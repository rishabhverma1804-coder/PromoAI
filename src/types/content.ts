export type ContentType = 'reel' | 'banner';

export type ReelStyle =
  | 'cinematic'
  | 'luxury'
  | 'energetic'
  | 'minimal'
  | 'social-media';

export type ReelDuration = 15 | 20;

export interface ProductData {
  productName: string;

  // Optional fields
  description: string;
  price: string;
  offer: string;
  targetAudience: string;
  category: string;

  contentType: ContentType;
  reelStyle: ReelStyle;
  duration: ReelDuration;

  // Product image is optional
  productImage?: File;
}

export interface GeneratedContent {
  id: string;
  type: ContentType;

  videoUrl?: string;
  imageUrl?: string;

  title?: string;
  hook?: string;
  caption?: string;
  hashtags?: string[];

  status: 'processing' | 'completed' | 'failed';
}