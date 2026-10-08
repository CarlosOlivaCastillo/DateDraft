import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  MapPin,
  Utensils,
  ExternalLink,
  Sparkles,
  SlidersHorizontal,
  Lightbulb,
  Dice5,
  Dice6,
  RotateCcw,
  SearchX,
} from 'lucide-react';
import type { Restaurant, UserPreferences } from '../../types/restaurant';
import type { GeminiDateAnalysis } from '../../services/geminiService';
import { ReviewItem } from '../ReviewItem';

interface ResultsViewProps {
  restaurants: Restaurant[];
  preferences: UserPreferences;
  geminiAnalysis: GeminiDateAnalysis | null;
  onReset: () => void;
  onRedraft: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  restaurants,
  preferences,
  geminiAnalysis,
  onReset,
  onRedraft,
}) => {
  const [isRedrafting, setIsRedrafting] = useState(false);

  const handleRedraftClick = () => {
    setIsRedrafting(true);
    onRedraft();
    setTimeout(() => {
      setIsRedrafting(false);
    }, 450);
  };

  // --- EMPTY STATE WHEN NO RESULTS MATCH FILTERS ---
  if (!restaurants || restaurants.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm mx-auto text-center py-10 px-4"
      >
        <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-[#E63946] flex items-center justify-center mx-auto mb-4 shadow-sm">
          <SearchX className="w-8 h-8 stroke-[2]" />
        </div>

        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mb-2">
          No hay resultados disponibles
        </h2>

        <p className="text-xs text-gray-500 leading-relaxed mb-6">
          No hemos encontrado locales que cumplan simultáneamente con todos los filtros seleccionados.
        </p>

        <div className="bg-white/90 border border-rose-100 rounded-2xl p-4 text-left text-xs mb-6 space-y-2">
          <span className="font-bold text-gray-800 block text-[11px] uppercase tracking-wider">
            Filtros aplicados:
          </span>
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full text-rose-800 text-[11px]">
              {preferences.wantsToDrive === false
                ? 'Villanueva de la Cañada'
                : 'Alrededores (hasta Pozuelo)'}
            </span>
            <span className="bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full text-rose-800 text-[11px]">
              {preferences.dressLevel !== null
                ? `Etiqueta: ${preferences.dressLevel}/10`
                : 'Cualquier etiqueta'}
            </span>
            {preferences.cuisines?.map((c) => (
              <span
                key={c}
                className="bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full text-rose-800 text-[11px]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#D90429] text-white font-semibold py-3 px-6 rounded-xl shadow-md shadow-red-200 transition-all cursor-pointer text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Modificar respuestas</span>
        </button>
      </motion.div>
    );
  }

  // --- RESULTS LIST SCREEN ---
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full pb-24"
    >
      {/* Header Results Info */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#E63946] text-[11px] font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{restaurants.length} Locales Seleccionados</span>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Restaurantes para tu cita
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Mostrando los mejores locales adaptados a tus preferencias.
        </p>

        {/* Selected Criteria Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-rose-200 text-[11px] font-semibold text-gray-700 shadow-xs">
            <MapPin className="w-3 h-3 text-[#E63946]" />
            {preferences.wantsToDrive === false
              ? 'Villanueva'
              : 'Alrededores (hasta Pozuelo)'}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-rose-200 text-[11px] font-semibold text-gray-700 shadow-xs">
            <SlidersHorizontal className="w-3 h-3 text-[#E63946]" />
            {preferences.dressLevel !== null
              ? `Etiqueta: ${preferences.dressLevel}/10`
              : 'Cualquier etiqueta'}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-rose-200 text-[11px] font-semibold text-gray-700 shadow-xs">
            <Utensils className="w-3 h-3 text-[#E63946]" />
            {preferences.cuisines?.length > 0
              ? preferences.cuisines.join(', ')
              : 'Cualquiera'}
          </span>
        </div>
      </div>

      {/* Date Advisory Box */}
      {geminiAnalysis && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 border border-rose-200 rounded-2xl p-4 sm:p-5 mb-5 shadow-xs relative overflow-hidden"
        >
          <div className="flex items-center gap-1.5 text-[#E63946] font-bold text-[11px] uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Análisis Gastronómico</span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug mb-3">
            {geminiAnalysis.matchSummary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-rose-100 text-xs">
            <div className="bg-rose-50/70 p-2.5 rounded-xl">
              <span className="font-bold text-gray-800 block mb-0.5 text-[11px]">
                Recomendación de vestuario:
              </span>
              <p className="text-gray-600 leading-tight text-xs">
                {geminiAnalysis.dressSuggestion}
              </p>
            </div>

            <div className="bg-rose-50/70 p-2.5 rounded-xl">
              <span className="font-bold text-gray-800 block mb-0.5 text-[11px]">
                Atmósfera prevista:
              </span>
              <p className="text-gray-600 leading-tight text-xs">
                {geminiAnalysis.estimatedVibe}
              </p>
            </div>
          </div>

          {geminiAnalysis.romanticTips && geminiAnalysis.romanticTips.length > 0 && (
            <div className="mt-2.5 pt-2 border-t border-rose-50">
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-800 mb-1.5">
                <Lightbulb className="w-3 h-3 text-amber-500" />
                <span>Consejos para una velada impecable:</span>
              </div>
              <ul className="space-y-1 text-xs text-gray-600">
                {geminiAnalysis.romanticTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#E63946] font-bold">•</span>
                    <span className="leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {/* Restaurant Cards List (Clean Typographic Design without photos) */}
      <AnimatePresence mode="popLayout">
        <div className="space-y-4">
          {restaurants.map((restaurant, index) => {
            return (
              <motion.article
                key={restaurant.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Top Header Strip with Badges */}
                <div className="bg-gradient-to-r from-rose-50/90 via-pink-50/60 to-rose-50/90 px-4 py-3 border-b border-rose-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E63946] bg-white border border-rose-200 px-2.5 py-0.5 rounded-full shadow-2xs">
                      <Utensils className="w-3 h-3" />
                      <span>{restaurant.cuisine}</span>
                    </span>
                    <span className="text-[10px] font-semibold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded-full">
                      {restaurant.dressCodeLabel}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 bg-white border border-rose-200 px-2.5 py-0.5 rounded-full shadow-2xs">
                    <Star className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
                    <span className="text-xs font-bold text-gray-900">{restaurant.rating.toFixed(1)}</span>
                    <span className="text-[10px] text-gray-400 font-normal">
                      ({restaurant.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-4 sm:p-5">
                  {/* Highlights tags */}
                  {restaurant.highlights && restaurant.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {restaurant.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center text-[10px] font-semibold text-rose-700 bg-rose-50/70 border border-rose-100 px-2 py-0.5 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Restaurant Name in Large Typography */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-1.5 leading-snug">
                    {restaurant.name}
                  </h3>

                  {/* Distance & Address */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E63946] flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{restaurant.distance}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-3 pl-5">
                    {restaurant.address}
                  </p>

                  {/* Average total price for 2 people, MANDATORY small & gray #808080 */}
                  <div className="pt-2.5 pb-3 border-t border-rose-50 flex items-center justify-between">
                    <p
                      className="text-xs font-normal text-[#808080]"
                      style={{ color: '#808080' }}
                    >
                      Precio medio total para 2 personas: {restaurant.priceForTwo} {restaurant.currency}
                    </p>
                    <span className="text-[10px] text-gray-400">
                      Nivel {restaurant.dressCodeLevel}/10
                    </span>
                  </div>

                  {/* Reviews Section: 3-4 brief reviews in clean list format */}
                  <div className="pt-2.5 pb-4 border-t border-rose-50">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold text-gray-900 uppercase tracking-wider">
                        Reseñas verificadas
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {restaurant.reviews.length} opiniones
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      {restaurant.reviews.slice(0, 4).map((review) => (
                        <ReviewItem key={review.id} review={review} />
                      ))}
                    </div>
                  </div>

                  {/* Action Button: Full-width Red Button linking directly to Google Maps */}
                  <a
                    href={restaurant.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#E63946] hover:bg-[#D90429] text-white py-3.5 px-4 rounded-xl font-semibold shadow-md shadow-red-200 hover:shadow-lg transition-all transform active:scale-98 text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <span>Ver ubicación en Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </AnimatePresence>

      {/* REDRAFT in bottom middle with two dice icons (SVG, no emojis) */}
      <div className="mt-8 flex flex-col items-center justify-center gap-3">
        {/* Main REDRAFT Button */}
        <button
          onClick={handleRedraftClick}
          disabled={isRedrafting}
          className="inline-flex items-center justify-center gap-2.5 bg-[#E63946] hover:bg-[#D90429] text-white text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-2xl shadow-lg shadow-red-200 hover:shadow-xl transition-all transform active:scale-95 cursor-pointer"
        >
          <Dice5 className={`w-5 h-5 ${isRedrafting ? 'animate-spin' : ''}`} />
          <span>REDRAFT</span>
          <Dice6 className={`w-5 h-5 ${isRedrafting ? 'animate-spin' : ''}`} />
        </button>

        {/* Secondary reset button */}
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#E63946] bg-white/80 border border-rose-200 px-4 py-2 rounded-full shadow-xs hover:border-[#E63946] transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Cambiar respuestas</span>
        </button>
      </div>
    </motion.div>
  );
};
