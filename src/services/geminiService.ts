import type { Restaurant, UserPreferences } from '../types/restaurant';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export interface GeminiDateAnalysis {
  matchSummary: string;
  romanticTips: string[];
  dressSuggestion: string;
  estimatedVibe: string;
}

export class GeminiService {
  /**
   * Request date recommendation insights
   */
  static async analyzeDatePreferences(
    preferences: UserPreferences,
    restaurants: Restaurant[]
  ): Promise<GeminiDateAnalysis> {
    const cuisinesList = preferences.cuisines?.join(', ') || 'Variada';
    const dressText =
      preferences.dressLevel !== null
        ? `${preferences.dressLevel}/10`
        : 'Indiferente / Sin restricción de etiqueta';

    const promptText = `
Eres el asesor gastronómico y de citas de DateDraft.
Analiza las siguientes preferencias de una pareja para su cita:
- Desplazamiento: ${
      preferences.wantsToDrive === false
        ? 'Sin conducir (Villanueva de la Cañada)'
        : preferences.driveDuration === 'mucho'
        ? 'Madrid Centro'
        : 'Alrededores cercanos'
    }
- Nivel de arreglo/elegancia: ${dressText}
- Tipos de comida elegidos: ${cuisinesList}
- Opciones seleccionadas: ${restaurants.map((r) => r.name).join(', ')}

IMPORTANTE: Prohibido estrictamente el uso de emojis en todo el texto.
Genera un análisis breve en formato JSON con:
{
  "matchSummary": "Frase elegante que sintetiza por qué este plan encaja a la perfección con su apetito y ubicación.",
  "dressSuggestion": "Consejo sobrio y conciso sobre el atuendo adecuado.",
  "romanticTips": ["Consejo 1 para la velada", "Consejo 2 para la velada"],
  "estimatedVibe": "Estilo de la velada (ej. Velada íntima y acogedora)"
}
`;

    try {
      if (GEMINI_API_KEY) {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: promptText }] }],
              generationConfig: {
                responseMimeType: 'application/json',
                temperature: 0.7,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            const parsed = JSON.parse(rawText);
            return {
              matchSummary: parsed.matchSummary || 'Selección personalizada ajustada a vuestro plan.',
              dressSuggestion: parsed.dressSuggestion || 'Atuendo acorde al ambiente seleccionado.',
              romanticTips: Array.isArray(parsed.romanticTips) ? parsed.romanticTips : ['Reservar mesa con antelación'],
              estimatedVibe: parsed.estimatedVibe || 'Ambiente cuidado y agradable',
            };
          }
        }
      }
    } catch (e) {
      console.warn('AI analysis fallback:', e);
    }

    return this.getFallbackAnalysis(preferences);
  }

  private static getFallbackAnalysis(preferences: UserPreferences): GeminiDateAnalysis {
    const dress = preferences.dressLevel;
    let vibe = 'Velada distendida y relajada';
    let suggestion = 'Ropa cómoda y cuidada, calzado informal elegante.';

    if (dress !== null && dress >= 8) {
      vibe = 'Cena exclusiva de alta etiqueta';
      suggestion = 'Traje o americana elegante, vestido de noche y zapatos formales.';
    } else if (dress !== null && dress >= 4) {
      vibe = 'Cita chic con ambiente cálido';
      suggestion = 'Camisa, calzado cuidado, toque sofisticado sin excesiva rigidez.';
    } else if (dress === null) {
      vibe = 'Cita flexible y agradable';
      suggestion = 'Viste como más cómodo te sientas, los locales seleccionados admiten un estilo versátil.';
    }

    const areaText =
      preferences.wantsToDrive === false
        ? 'en Villanueva de la Cañada para mayor comodidad'
        : preferences.driveDuration === 'mucho'
        ? 'en Madrid Centro para vivir una experiencia cosmopolita'
        : 'en los alrededores cercanos para una velada dinámica';

    const cuisinesText = preferences.cuisines?.length
      ? preferences.cuisines.join(' / ')
      : 'variada';

    return {
      matchSummary: `Hemos seleccionado las mejores opciones de cocina ${cuisinesText} ${areaText}.`,
      dressSuggestion: suggestion,
      romanticTips: [
        'Solicitar una mesa rinconera o con luz tenue para mayor privacidad.',
        'Dejar margen de 15 minutos para llegar con tranquilidad.',
        'Preguntar por el plato estrella del chef fuera de carta.',
      ],
      estimatedVibe: vibe,
    };
  }
}
