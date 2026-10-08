import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';

interface WelcomeStepProps {
  onStart: () => void;
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-sm mx-auto text-center"
    >
      {/* Top badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/90 border border-rose-200 text-[#E63946] text-xs font-semibold mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Planificador de Citas</span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2.5 leading-tight">
        Encuentra el restaurante <span className="text-[#E63946]">ideal para tu cita</span>
      </h1>

      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
        Tres preguntas rápidas para encontrar la mesa perfecta según tu apetito, desplazamiento y etiqueta.
      </p>

      {/* Feature Highlights List */}
      <div className="space-y-2.5 mb-7 text-left">
        <div className="bg-white/95 border border-rose-100 p-3 rounded-xl shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#E63946] flex items-center justify-center flex-shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900 leading-tight">
              Ubicación a Medida
            </h2>
            <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
              Villanueva de la Cañada, alrededores o Madrid Centro.
            </p>
          </div>
        </div>

        <div className="bg-white/95 border border-rose-100 p-3 rounded-xl shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#E63946] flex items-center justify-center flex-shrink-0">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900 leading-tight">
              Código de Estilo
            </h2>
            <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
              Desde planes informales hasta alta cocina y gala.
            </p>
          </div>
        </div>

        <div className="bg-white/95 border border-rose-100 p-3 rounded-xl shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#E63946] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900 leading-tight">
              Fotos Reales y Reseñas
            </h2>
            <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
              Opiniones contrastadas y precio medio para 2.
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onStart}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#D90429] text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-red-200 hover:shadow-xl transition-all transform active:scale-98 text-sm cursor-pointer"
      >
        <span>Comenzar selección</span>
        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
      </button>

      <p className="text-[10px] text-gray-400 mt-3 font-medium">
        Toma menos de 30 segundos
      </p>
    </motion.div>
  );
};
