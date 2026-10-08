
import React from 'react';

import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonText,
} from '@ionic/react';

import {
  arrowBackOutline,
  downloadOutline,
  refreshOutline,
  sparklesOutline,
} from 'ionicons/icons';

import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import './Result.css';

import type { GeneratedReel } from '../services/promo-ai.service';

interface ResultLocationState {
  reel?: GeneratedReel;
}

const Result: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state =
    location.state as ResultLocationState | null;

  const reel = state?.reel;

  const videoUrl = reel?.videoUrl;

  const productName =
    reel?.productName || 'Your Product';

  const duration =
    reel?.duration ?? 8;

  const hashtags = [
    `#${productName.replace(/[^a-zA-Z0-9]/g, '')}`,
    '#InstagramReels',
    '#ProductPromotion',
    '#PromoAI',
  ];

  const handleDownload = () => {
    if (!videoUrl) {
      return;
    }

    const link = document.createElement('a');

    link.href = videoUrl;
    link.download = `${productName
      .replace(/[^a-zA-Z0-9-_]/g, '-')
      .toLowerCase()}-reel.mp4`;

    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="result-container">

          {/* Header */}

          <div className="result-header">
            <IonButton
              fill="clear"
              className="back-button"
              onClick={() => navigate('/create')}
            >
              <IonIcon
                slot="icon-only"
                icon={arrowBackOutline}
              />
            </IonButton>

            <div className="result-title">
              <div className="result-badge">
                ✨ AI GENERATED
              </div>

              <IonText>
                <h1>Your Promotional Reel</h1>
              </IonText>

              <p>
                Your AI-created Instagram Reel.
              </p>
            </div>
          </div>

          {/* Actual Video Preview */}

          <div className="preview-section">
            {videoUrl ? (
              <div className="video-player-container">
                <video
                  className="generated-video"
                  src={videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${productName} promotional Reel`}
                >
                  Your browser does not support video playback.
                </video>

                <div className="video-caption">
                  <strong>{productName}</strong>
                  <span>AI-generated promotional video</span>
                </div>
              </div>
            ) : (
              <div className="video-placeholder">
                <div className="preview-glow" />

                <div className="play-icon">▶</div>

                <strong>Video Not Available</strong>

                <p>
                  No generated video was found.
                  Please return to the creation page
                  and generate your Reel again.
                </p>

                <span className="preview-status">
                  WAITING FOR VIDEO
                </span>
              </div>
            )}
          </div>

          {/* Reel Information */}

          <div className="reel-meta">
            <div className="meta-item">
              <span className="meta-label">
                Duration
              </span>

              <strong>{duration} sec</strong>
            </div>

            <div className="meta-item">
              <span className="meta-label">
                Format
              </span>

              <strong>{reel?.format || '9:16'}</strong>
            </div>

            <div className="meta-item">
              <span className="meta-label">
                Resolution
              </span>

              <strong>{reel?.resolution || '720p'}</strong>
            </div>
          </div>

          {/* Product Information */}

          {reel && (
            <div className="result-card">
              <div className="result-card-heading">
                <div className="result-card-icon">
                  <IonIcon icon={sparklesOutline} />
                </div>

                <div>
                  <h2>Reel Information</h2>

                  <p>
                    Details used for your promotion
                  </p>
                </div>
              </div>

              <div className="content-block">
                <div className="content-label">
                  PRODUCT
                </div>

                <p>{reel.productName}</p>
              </div>

              {reel.description && (
                <div className="content-block">
                  <div className="content-label">
                    DESCRIPTION
                  </div>

                  <p>{reel.description}</p>
                </div>
              )}

              {reel.price && (
                <div className="content-block">
                  <div className="content-label">
                    PRICE
                  </div>

                  <p>{reel.price}</p>
                </div>
              )}

              {reel.offer && (
                <div className="content-block">
                  <div className="content-label">
                    OFFER
                  </div>

                  <p>{reel.offer}</p>
                </div>
              )}

              {reel.targetAudience && (
                <div className="content-block">
                  <div className="content-label">
                    TARGET AUDIENCE
                  </div>

                  <p>{reel.targetAudience}</p>
                </div>
              )}

              {reel.category && (
                <div className="content-block">
                  <div className="content-label">
                    CATEGORY
                  </div>

                  <p>{reel.category}</p>
                </div>
              )}

              <div className="content-block">
                <div className="content-label">
                  REEL STYLE
                </div>

                <p>{reel.reelStyle}</p>
              </div>
            </div>
          )}

          {/* AI Marketing Content */}

          <div className="result-card">
            <div className="result-card-heading">
              <div className="result-card-icon">
                <IonIcon icon={sparklesOutline} />
              </div>

              <div>
                <h2>Marketing Content Ideas</h2>

                <p>
                  Suggested text for your promotion
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="content-label">
                HOOK
              </div>

              <p className="hook-text">
                {`${productName} deserves the spotlight.`}
              </p>
            </div>

            <div className="content-block">
              <div className="content-label">
                CAPTION
              </div>

              <p>
                Take a closer look at {productName}.
                Discover the product and decide if
                it is right for you.
              </p>
            </div>

            <div className="content-block">
              <div className="content-label">
                HASHTAGS
              </div>

              <div className="hashtags">
                {hashtags.map((hashtag) => (
                  <span key={hashtag}>
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}

          <div className="result-actions">
            <IonButton
              expand="block"
              size="large"
              className="download-button"
              onClick={handleDownload}
              disabled={!videoUrl}
            >
              <IonIcon
                slot="start"
                icon={downloadOutline}
              />

              Download Reel
            </IonButton>

            <IonButton
              expand="block"
              fill="outline"
              className="regenerate-button"
              onClick={() => navigate('/create')}
            >
              <IonIcon
                slot="start"
                icon={refreshOutline}
              />

              Create Another Reel
            </IonButton>

            <IonButton
              expand="block"
              fill="clear"
              className="create-another-button"
              onClick={() => navigate('/create')}
            >
              Back to Create Page
            </IonButton>
          </div>

          {/* Footer */}

          <div className="result-footer">
            <span>✨</span>

            <p>
              Generated by PromoAI • Vertical video
              optimized for Instagram Reels
            </p>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Result;