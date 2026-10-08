import React from 'react';
import { RotateCcw, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  currentStep: number;
  totalSteps: number;
  onReset: () => void;
  showReset: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentStep,
  totalSteps,
  onReset,
  showReset,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-rose-100 transition-all">
      <div className="w-full max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E63946] to-[#B91C1C] flex items-center justify-center text-white shadow-xs">
            <UtensilsCrossed className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-gray-900 block leading-none">
              Date<span className="text-[#E63946]">Draft</span>
            </span>
            <span className="text-[9px] font-semibold text-gray-400 tracking-wider uppercase">
              Asistente Gastronómico
            </span>
          </div>
        </div>

        {/* Step Indicator & Actions */}
        <div className="flex items-center gap-2">
          {currentStep > 0 && currentStep <= totalSteps && (
            <div className="flex items-center bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-rose-700">
              <span>{currentStep}/{totalSteps}</span>
            </div>
          )}

          {showReset && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 text-[11px] font-semibold text-gray-600 hover:text-[#E63946] bg-gray-50 hover:bg-rose-50 border border-gray-200 hover:border-rose-200 px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer"
              title="Reiniciar selección"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Inicio</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress Line */}
      {currentStep > 0 && currentStep <= totalSteps && (
        <div className="w-full bg-rose-100 h-1 overflow-hidden">
          <div
            className="bg-[#E63946] h-full transition-all duration-400 ease-out rounded-r-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      )}
    </header>
  );
};
