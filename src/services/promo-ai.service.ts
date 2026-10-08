import type {
  ReelDuration,
  ReelStyle,
} from '../types/content';

export interface GenerateReelRequest {
  productName: string;
  description?: string;
  price?: string;
  offer?: string;
  targetAudience?: string;
  category?: string;
  reelStyle?: ReelStyle;
  duration?: ReelDuration;
}

export interface GeneratedReel {
  title: string;
  productName: string;
  description: string | null;
  price: string | null;
  offer: string | null;
  targetAudience: string | null;
  category: string | null;
  reelStyle: string;
  duration: number;
  format: string;
  resolution: string;
  status: string;
  videoUrl: string | null;
  message: string;
}

export interface GenerateReelResponse {
  success: boolean;
  mode?: string;
  reel?: GeneratedReel;
  error?: string;
}

const API_BASE_URL = 'http://localhost:3000';

export async function generatePromotionalReel(
  data: GenerateReelRequest
): Promise<GenerateReelResponse> {

  const response = await fetch(
    `${API_BASE_URL}/api/generate-reel`,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    }
  );

  const result: GenerateReelResponse =
    await response.json();

  if (!response.ok) {
    throw new Error(
      result.error || 'Failed to generate Reel.'
    );
  }

  return result;
}