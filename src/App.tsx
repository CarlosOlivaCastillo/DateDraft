import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { WelcomeStep } from './components/DecisionFlow/WelcomeStep';
import { QuestionDrive } from './components/DecisionFlow/QuestionDrive';
import { QuestionDressCode } from './components/DecisionFlow/QuestionDressCode';
import { QuestionCuisine } from './components/DecisionFlow/QuestionCuisine';
import { LoadingTransition } from './components/DecisionFlow/LoadingTransition';
import { ResultsView } from './components/DecisionFlow/ResultsView';
import { RestaurantService } from './services/restaurantService';
import type { CuisineType, Restaurant, UserPreferences } from './types/restaurant';

export const App: React.FC = () => {
  // Step state: 0=Welcome, 1=Drive, 2=Dress, 3=Cuisine, 4=Loading, 5=Results
  const [step, setStep] = useState<number>(0);

  const [preferences, setPreferences] = useState<UserPreferences>({
    wantsToDrive: null,
    driveDuration: null,
    dressLevel: 6,
    cuisines: [],
  });

  const [redraftCount, setRedraftCount] = useState<number>(0);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const handleSelectDrive = (wants: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      wantsToDrive: wants,
      driveDuration: wants ? prev.driveDuration : null,
    }));
  };

  const handleSelectDuration = (duration: 'ratito' | 'mucho') => {
    setPreferences((prev) => ({
      ...prev,
      driveDuration: duration,
    }));
  };

  const handleDressChange = (level: number) => {
    setPreferences((prev) => ({
      ...prev,
      dressLevel: level,
    }));
  };

  const handleSkipDressCode = () => {
    setPreferences((prev) => ({
      ...prev,
      dressLevel: null,
    }));
    setStep(3); // Directly advance to Question 3
  };

  const handleToggleCuisine = (cuisine: CuisineType) => {
    setPreferences((prev) => {
      if (cuisine === 'Aleatorio') {
        const hasRandom = prev.cuisines.includes('Aleatorio');
        return {
          ...prev,
          cuisines: hasRandom ? [] : ['Aleatorio'],
        };
      }

      const withoutRandom = prev.cuisines.filter((c) => c !== 'Aleatorio');
      const isSelected = withoutRandom.includes(cuisine);

      const nextCuisines = isSelected
        ? withoutRandom.filter((c) => c !== cuisine)
        : [...withoutRandom, cuisine];

      return {
        ...prev,
        cuisines: nextCuisines,
      };
    });
  };

  const handleStartSearch = async () => {
    setStep(4); // Move to loading transition: "Analizando locales"
    setRedraftCount(0);

    try {
      const results = await RestaurantService.findIdealRestaurants(preferences, 0);
      setRestaurants(results);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
    }
  };

  const handleLoadingFinished = () => {
    setStep(5); // Move to results view
  };

  const handleRedraft = async () => {
    const nextSeed = redraftCount + 1;
    setRedraftCount(nextSeed);

    // Fetch fresh 5-6 restaurants with the same filters
    const newBatch = await RestaurantService.findIdealRestaurants(preferences, nextSeed);
    setRestaurants(newBatch);
  };

  const handleReset = () => {
    setPreferences({
      wantsToDrive: null,
      driveDuration: null,
      dressLevel: 6,
      cuisines: [],
    });
    setRestaurants([]);
    setRedraftCount(0);
    setStep(0);
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-neutral-950 flex justify-center items-stretch sm:py-6 sm:px-4">
      {/* Mobile App Viewport Container (optimized for iPhone 15 logical width 393px - 420px) */}
      <div className="w-full max-w-[420px] min-h-screen min-h-[100dvh] sm:min-h-[844px] bg-gradient-to-b from-[#FFF5F7] via-[#FFEBF0] to-[#FFF0F4] text-gray-900 flex flex-col font-sans selection:bg-rose-200 selection:text-rose-900 sm:rounded-[36px] sm:shadow-2xl sm:border sm:border-rose-200/60 overflow-x-hidden relative">
        {/* Top Navigation */}
        <Navbar
          currentStep={step >= 1 && step <= 3 ? step : 0}
          totalSteps={3}
          onReset={handleReset}
          showReset={step > 0}
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full px-4 pt-4 pb-6 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <WelcomeStep key="welcome" onStart={() => setStep(1)} />
            )}

            {step === 1 && (
              <QuestionDrive
                key="step-drive"
                wantsToDrive={preferences.wantsToDrive}
                driveDuration={preferences.driveDuration}
                onSelectDrive={handleSelectDrive}
                onSelectDuration={handleSelectDuration}
                onNext={() => setStep(2)}
                onBack={() => setStep(0)}
              />
            )}

            {step === 2 && (
              <QuestionDressCode
                key="step-dress"
                dressLevel={preferences.dressLevel}
                onChangeDressLevel={handleDressChange}
                onSkipDressCode={handleSkipDressCode}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <QuestionCuisine
                key="step-cuisine"
                cuisines={preferences.cuisines}
                onToggleCuisine={handleToggleCuisine}
                onSubmit={handleStartSearch}
                onBack={() => setStep(2)}
              />
            )}

            {step === 4 && (
              <LoadingTransition
                key="step-loading"
                preferences={preferences}
                onFinished={handleLoadingFinished}
              />
            )}

            {step === 5 && (
              <ResultsView
                key="step-results"
                restaurants={restaurants}
                preferences={preferences}
                onReset={handleReset}
                onRedraft={handleRedraft}
              />
            )}
          </AnimatePresence>
        </main>

        {/* Mobile App Footer Bar with Safe Area */}
        <footer className="w-full border-t border-rose-100 bg-white/70 py-2.5 text-center text-[10px] text-gray-400 safe-area-bottom">
          <div className="px-4 flex items-center justify-between">
            <span className="font-semibold text-gray-500">DateDraft</span>
            <span>Villanueva & Alrededores</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
