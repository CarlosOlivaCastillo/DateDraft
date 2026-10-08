import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Shirt, Utensils, CheckCircle2 } from 'lucide-react';
import type { UserPreferences } from '../../types/restaurant';

interface LoadingTransitionProps {
  preferences: UserPreferences;
  onFinished: () => void;
}

const STEPS = [
  { label: 'Analizando locales de la zona seleccionada', icon: Search },
  { label: 'Calculando radio geográfico y accesibilidad', icon: MapPin },
  { label: 'Sincronizando nivel de etiqueta y ambiente', icon: Shirt },
  { label: 'Curando las mejores mesas para dos personas', icon: Utensils },
];

export const LoadingTransition: React.FC<LoadingTransitionProps> = ({
  preferences,
  onFinished,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    const finishTimeout = setTimeout(() => {
      onFinished();
    }, 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimeout);
    };
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-sm mx-auto text-center py-6 px-2"
    >
      {/* Animated Core */}
      <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-rose-300 blur-lg"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-[#E63946]/50"
        />
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#E63946] to-[#B91C1C] flex items-center justify-center text-white shadow-lg shadow-red-200 z-10">
          <Search className="w-7 h-7 animate-pulse stroke-[2.5]" />
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-1.5">
        Analizando locales
      </h2>
      <p className="text-xs text-gray-500 mb-6 max-w-xs mx-auto">
        Comprobando disponibilidad, ambiente y valoraciones en tiempo real.
      </p>

      {/* Progress Steps List */}
      <div className="bg-white/95 border border-rose-100 rounded-2xl p-4 shadow-sm text-left space-y-3 mb-5">
        {STEPS.map((step, idx) => {
          const StepIcon = step.icon;
          const isDone = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center justify-between text-xs py-0.5 transition-all ${
                isCurrent
                  ? 'text-gray-900 font-semibold'
                  : isDone
                  ? 'text-gray-500 font-medium'
                  : 'text-gray-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                    isCurrent
                      ? 'bg-rose-100 text-[#E63946]'
                      : isDone
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-gray-100 text-gray-300'
                  }`}
                >
                  <StepIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs leading-tight">{step.label}</span>
              </div>

              {isDone && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              )}
              {isCurrent && (
                <span className="w-2 h-2 rounded-full bg-[#E63946] animate-ping" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Criteria Summary Badges */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-semibold text-gray-600">
        <span className="bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full text-rose-800">
          {preferences.wantsToDrive === false
            ? 'Villanueva de la Cañada'
            : preferences.driveDuration === 'mucho'
            ? 'Madrid Centro'
            : 'Alrededores'}
        </span>
        <span className="bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full text-rose-800">
          {preferences.dressLevel !== null
            ? `Etiqueta ${preferences.dressLevel}/10`
            : 'Cualquier etiqueta'}
        </span>
        {preferences.cuisines && preferences.cuisines.length > 0 && (
          <span className="bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full text-rose-800">
            {preferences.cuisines.join(', ')}
          </span>
        )}
      </div>
    </motion.div>
  );
};
