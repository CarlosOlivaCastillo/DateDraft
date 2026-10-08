import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Sparkles, Crown, ArrowRight, ArrowLeft, FastForward } from 'lucide-react';

interface QuestionDressCodeProps {
  dressLevel: number | null;
  onChangeDressLevel: (level: number) => void;
  onSkipDressCode: () => void;
  onNext: () => void;
  onBack: () => void;
}

export const QuestionDressCode: React.FC<QuestionDressCodeProps> = ({
  dressLevel,
  onChangeDressLevel,
  onSkipDressCode,
  onNext,
  onBack,
}) => {
  const currentLevel = dressLevel ?? 5;

  const getStyleCategory = (level: number) => {
    if (level <= 3) {
      return {
        title: 'De relax / Cómodos',
        description: 'Zapatillas, vaqueros y ropa cómoda sin complicarnos la vida.',
        icon: Shirt,
      };
    }
    if (level <= 7) {
      return {
        title: 'Arreglados pero informales',
        description: 'Camisa, vestido mono, calzado cuidado y un toque guay para la cita.',
        icon: Sparkles,
      };
    }
    return {
      title: 'Muy elegantes / Puestos',
      description: 'Americana, vestido especial, perfume y ambiente top de noche.',
      icon: Crown,
    };
  };

  const styleInfo = getStyleCategory(currentLevel);
  const StyleIcon = styleInfo.icon;

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
          Paso 2 de 3
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mt-1">
          ¿Cómo de arreglados vamos?
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Para que vayamos los dos a juego con el rollo del restaurante.
        </p>
      </div>

      {/* Interactive Card */}
      <div className="bg-white/95 border border-rose-100 rounded-2xl p-5 shadow-xs mb-3">
        {/* Visual Level Display */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-rose-50">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E63946]">
              <StyleIcon className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Nuestro Estilo
              </div>
              <div className="text-sm font-bold text-gray-900 leading-tight">
                {styleInfo.title}
              </div>
            </div>
          </div>

          <div className="flex items-baseline gap-0.5 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100">
            <span className="text-2xl font-black text-[#E63946] leading-none">
              {currentLevel}
            </span>
            <span className="text-[10px] font-bold text-gray-400">/ 10</span>
          </div>
        </div>

        <p className="text-[11px] text-gray-500 mt-3 mb-5 leading-relaxed">
          {styleInfo.description}
        </p>

        {/* Continuous Slider */}
        <div className="relative pb-2">
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={currentLevel}
            onChange={(e) => onChangeDressLevel(Number(e.target.value))}
            className="w-full h-2.5 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-[#E63946] focus:outline-none"
          />

          {/* Scale numbers 1 - 10 */}
          <div className="flex justify-between items-center mt-2.5 text-[11px] font-bold text-gray-400 px-0.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => onChangeDressLevel(num)}
                className={`transition-colors cursor-pointer ${
                  num === currentLevel
                    ? 'text-[#E63946] font-black scale-125'
                    : 'hover:text-gray-700'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Scale Labels */}
          <div className="flex justify-between items-center text-[9px] uppercase font-semibold text-gray-400 mt-1.5">
            <span>1 · Relax</span>
            <span>5 · Cuidado</span>
            <span>10 · Top gala</span>
          </div>
        </div>
      </div>

      {/* Option to SKIP dresscode */}
      <div className="mb-4 text-center">
        <button
          type="button"
          onClick={onSkipDressCode}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#E63946] bg-white border border-rose-200 hover:border-[#E63946] px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
        >
          <FastForward className="w-3.5 h-3.5 text-[#E63946]" />
          <span>Nos da igual (vamos como queramos)</span>
        </button>
      </div>

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
          onClick={onNext}
          className="inline-flex items-center gap-1.5 font-semibold text-xs py-2.5 px-5 rounded-xl bg-[#E63946] hover:bg-[#D90429] text-white shadow-md shadow-red-200 active:scale-98 transition-all cursor-pointer"
        >
          <span>Siguiente</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
