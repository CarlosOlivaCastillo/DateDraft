import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Navigation, MapPin, Check, ArrowRight, ArrowLeft, Clock } from 'lucide-react';

interface QuestionDriveProps {
  wantsToDrive: boolean | null;
  driveDuration: 'ratito' | 'mucho' | null;
  onSelectDrive: (wants: boolean) => void;
  onSelectDuration: (duration: 'ratito' | 'mucho') => void;
  onNext: () => void;
  onBack: () => void;
}

export const QuestionDrive: React.FC<QuestionDriveProps> = ({
  wantsToDrive,
  driveDuration,
  onSelectDrive,
  onSelectDuration,
  onNext,
  onBack,
}) => {
  const canProceed =
    wantsToDrive === false || (wantsToDrive === true && driveDuration === 'ratito');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-sm mx-auto"
    >
      {/* Step Counter */}
      <div className="text-center mb-5">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#E63946]">
          Paso 1 de 3
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mt-1">
          ¿Te apetece conducir?
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Definamos el radio geográfico de vuestra cita.
        </p>
      </div>

      {/* Main Decision Buttons: Sí / No */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Option: NO */}
        <button
          type="button"
          onClick={() => {
            onSelectDrive(false);
          }}
          className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden cursor-pointer ${
            wantsToDrive === false
              ? 'bg-white border-[#E63946] shadow-md shadow-red-100 ring-2 ring-[#E63946]/20'
              : 'bg-white/80 border-rose-100 hover:border-rose-300 hover:bg-white'
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                wantsToDrive === false
                  ? 'bg-[#E63946] text-white'
                  : 'bg-rose-50 text-gray-700'
              }`}
            >
              <MapPin className="w-4 h-4" />
            </div>
            {wantsToDrive === false && (
              <span className="w-5 h-5 rounded-full bg-[#E63946] text-white flex items-center justify-center">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
            )}
          </div>
          <div className="text-base font-bold text-gray-900 mb-0.5">No</div>
          <p className="text-[11px] text-gray-500 leading-tight">
            Quedarnos en <span className="font-semibold text-gray-700">Villanueva de la Cañada</span>.
          </p>
          <div className="mt-2.5 inline-block px-2 py-0.5 rounded-md bg-rose-50 border border-rose-100 text-[10px] font-semibold text-rose-700">
            Todos los locales
          </div>
        </button>

        {/* Option: SÍ */}
        <button
          type="button"
          onClick={() => {
            onSelectDrive(true);
            onSelectDuration('ratito'); // Default to ratito
          }}
          className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden cursor-pointer ${
            wantsToDrive === true
              ? 'bg-white border-[#E63946] shadow-md shadow-red-100 ring-2 ring-[#E63946]/20'
              : 'bg-white/80 border-rose-100 hover:border-rose-300 hover:bg-white'
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                wantsToDrive === true
                  ? 'bg-[#E63946] text-white'
                  : 'bg-rose-50 text-gray-700'
              }`}
            >
              <Car className="w-4 h-4" />
            </div>
            {wantsToDrive === true && (
              <span className="w-5 h-5 rounded-full bg-[#E63946] text-white flex items-center justify-center">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
            )}
          </div>
          <div className="text-base font-bold text-gray-900 mb-0.5">Sí</div>
          <p className="text-[11px] text-gray-500 leading-tight">
            Explorar alrededores y municipios cercanos.
          </p>
          <div className="mt-2.5 inline-block px-2 py-0.5 rounded-md bg-rose-50 border border-rose-100 text-[10px] font-semibold text-rose-700">
            Hasta Pozuelo
          </div>
        </button>
      </div>

      {/* Sub-Question Fluid Reveal when "Sí" is selected */}
      <AnimatePresence>
        {wantsToDrive === true && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.96 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden mb-4"
          >
            <div className="bg-gradient-to-br from-white to-rose-50/70 border border-rose-200 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Navigation className="w-3.5 h-3.5 text-[#E63946]" />
                <h3 className="text-xs font-bold text-gray-900">
                  Radio de desplazamiento:
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Sub-option A: Un ratito (Active) */}
                <button
                  type="button"
                  onClick={() => onSelectDuration('ratito')}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    driveDuration === 'ratito'
                      ? 'bg-white border-[#E63946] shadow-xs ring-1 ring-[#E63946]'
                      : 'bg-white/90 border-gray-200 hover:border-rose-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-bold text-gray-900">
                      Un ratito
                    </span>
                    {driveDuration === 'ratito' && (
                      <Check className="w-3.5 h-3.5 text-[#E63946] stroke-[3]" />
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">
                    10 - 15 min
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                    Majadahonda, Boadilla, Pozuelo, Las Rozas, Brunete.
                  </p>
                </button>

                {/* Sub-option B: Madrid Centro (Coming Soon) */}
                <div
                  className="p-3 rounded-xl text-left border border-gray-200 bg-gray-50/80 opacity-70 relative select-none"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-semibold text-gray-500">
                      Madrid Centro
                    </span>
                    <Clock className="w-3 h-3 text-gray-400" />
                  </div>
                  <div className="inline-block mt-1 px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-[9px] font-bold uppercase tracking-wider text-amber-700">
                    Próximamente
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 leading-tight">
                    Enfoque actual en zona noroeste.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-2">
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
          onClick={onNext}
          className={`inline-flex items-center gap-1.5 font-semibold text-xs py-2.5 px-5 rounded-xl transition-all cursor-pointer ${
            canProceed
              ? 'bg-[#E63946] hover:bg-[#D90429] text-white shadow-md shadow-red-200 active:scale-98'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>Siguiente</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
