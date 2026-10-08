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
Eres el asesor personal de citas de DateDraft.
Habla en primera persona, cercano y natural (como el anfitrión organizando el plan para la pareja):
- Desplazamiento: ${
      preferences.wantsToDrive === false
        ? 'Aquí en Villanueva de la Cañada (a pie / muy cerca)'
        : 'Nos movemos en coche por los alrededores'
    }
- Nivel de arreglo: ${dressText}
- Comida elegida: ${cuisinesList}
- Opciones: ${restaurants.map((r) => r.name).join(', ')}

IMPORTANTE: Prohibido estrictamente el uso de emojis en todo el texto.
Genera un análisis breve en formato JSON con:
{
  "matchSummary": "Frase natural y cercana que explique por qué estos sitios son ideales para nuestro plan de hoy.",
  "dressSuggestion": "Consejo directo y claro sobre cómo ir vestidos.",
  "romanticTips": ["Detalle o consejo 1 para la cita", "Detalle o consejo 2 para la cita"],
  "estimatedVibe": "Ambiente de la velada (ej. Cena íntima y tranquila)"
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
              matchSummary: parsed.matchSummary || 'He seleccionado estos sitios porque encajan perfecto con lo que nos apetece hoy.',
              dressSuggestion: parsed.dressSuggestion || 'Ropa cuidada y acorde al sitio.',
              romanticTips: Array.isArray(parsed.romanticTips) ? parsed.romanticTips : ['Pedir una mesa tranquila al fondo'],
              estimatedVibe: parsed.estimatedVibe || 'Ambiente acogedor y agradable',
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
    let vibe = 'Plan relajado y con buen rollo';
    let suggestion = 'Ropa cómoda y arreglada, calzado cuidado sin complicaciones.';

    if (dress !== null && dress >= 8) {
      vibe = 'Cena elegante y especial de noche';
      suggestion = 'Americana o vestido elegante, zapatos formales y un toque sofisticado.';
    } else if (dress !== null && dress >= 4) {
      vibe = 'Cita cuidada con ambiente cálido';
      suggestion = 'Camisa, vestido mono y calzado limpio para un look arreglado pero casual.';
    } else if (dress === null) {
      vibe = 'Cita informal y muy apetecible';
      suggestion = 'Vamos como más a gusto estemos, los locales elegidos admiten cualquier estilo.';
    }

    const areaText =
      preferences.wantsToDrive === false
        ? 'aquí mismo en Villanueva de la Cañada'
        : 'por los alrededores cercanos';

    const cuisinesText = preferences.cuisines?.length
      ? preferences.cuisines.join(' / ')
      : 'variada';

    return {
      matchSummary: `He seleccionado las mejores opciones de ${cuisinesText} ${areaText} para que disfrutemos de una gran cena juntos.`,
      dressSuggestion: suggestion,
      romanticTips: [
        'Pedir una mesa en una esquina o zona tranquila para charlar a gusto.',
        'Salir con 10 minutos de margen para llegar sin prisas.',
        'Preguntar por las sugerencias fuera de carta de la casa.',
      ],
      estimatedVibe: vibe,
    };
  }
}
