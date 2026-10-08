import React from 'react';
import { motion } from 'framer-motion';
import {
  Utensils,
  Flame,
  Sandwich,
  Drumstick,
  WrapText,
  Fish,
  Zap,
  Coffee,
  Shuffle,
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import type { CuisineType } from '../../types/restaurant';

interface QuestionCuisineProps {
  cuisines: CuisineType[];
  onToggleCuisine: (cuisine: CuisineType) => void;
  onSubmit: () => void;
  onBack: () => void;
}

interface CuisineOption {
  type: CuisineType;
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CUISINE_OPTIONS: CuisineOption[] = [
  {
    type: 'Italiano',
    label: 'Italiano',
    subtitle: 'Pasta fresca & pizzas',
    icon: Utensils,
  },
  {
    type: 'Carne',
    label: 'Carne',
    subtitle: 'Brasa & chuletones',
    icon: Flame,
  },
  {
    type: 'Burguer',
    label: 'Burguer',
    subtitle: 'Smash & gourmet',
    icon: Sandwich,
  },
  {
    type: 'Pollo',
    label: 'Pollo',
    subtitle: 'Asador a la leña',
    icon: Drumstick,
  },
  {
    type: 'Kebab',
    label: 'Kebab',
    subtitle: 'Shawarma & falafel',
    icon: WrapText,
  },
  {
    type: 'Sushi',
    label: 'Sushi',
    subtitle: 'Nigiris & asiático',
    icon: Fish,
  },
  {
    type: 'Fast Food',
    label: 'Fast Food',
    subtitle: 'Pizzas al corte, tacos & combos',
    icon: Zap,
  },
  {
    type: 'Desayuno / Merienda',
    label: 'Desayuno / Merienda',
    subtitle: 'Cafeterías, bowls & repostería',
    icon: Coffee,
  },
  {
    type: 'Aleatorio',
    label: 'Aleatorio (Cualquiera)',
    subtitle: 'Sorpresa con todas las opciones',
    icon: Shuffle,
  },
];

export const QuestionCuisine: React.FC<QuestionCuisineProps> = ({
  cuisines,
  onToggleCuisine,
  onSubmit,
  onBack,
}) => {
  const canProceed = cuisines.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-sm mx-auto"
    >
      {/* Step Counter */}
      <div className="text-center mb-4">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#E63946]">
          Paso 3 de 3
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mt-1">
          ¿Qué nos apetece cenar hoy?
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Elige <span className="font-semibold text-gray-700">una o varias cosas</span> que te llamen la atención.
        </p>
      </div>

      {/* Grid of Multi-Selectable Cuisine Cards */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {CUISINE_OPTIONS.map((opt) => {
          const isSelected = cuisines.includes(opt.type);
          const IconComp = opt.icon;
          const isRandom = opt.type === 'Aleatorio';

          return (
            <button
              key={opt.type}
              type="button"
              onClick={() => onToggleCuisine(opt.type)}
              className={`p-3 rounded-xl text-left border transition-all relative overflow-hidden cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#E63946] shadow-sm ring-2 ring-[#E63946]/20'
                  : 'bg-white/85 border-rose-100 hover:border-rose-300 hover:bg-white'
              } ${isRandom ? 'col-span-2' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#E63946] text-white'
                        : 'bg-rose-50 text-gray-700'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">
                      {opt.label}
                    </div>
                    <div className="text-[10px] text-gray-400 leading-none mt-0.5">
                      {opt.subtitle}
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <span className="w-4 h-4 rounded-full bg-[#E63946] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selection Count Pill */}
      {cuisines.length > 0 && (
        <div className="text-center mb-3">
          <span className="text-[11px] font-semibold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            {cuisines.length === 1
              ? '1 tipo de comida elegido'
              : `${cuisines.length} tipos de comida elegidos para nuestro plan`}
          </span>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 px-3 py-2 rounded-xl hover:bg-white/60 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Atrás</span>
        </button>

        <button
          type="button"
          disabled={!canProceed}
          onClick={onSubmit}
          className={`inline-flex items-center gap-1.5 font-semibold text-xs py-2.5 px-5 rounded-xl transition-all cursor-pointer ${
            canProceed
              ? 'bg-[#E63946] hover:bg-[#D90429] text-white shadow-md shadow-red-200 active:scale-98'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ver nuestros sitios</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
