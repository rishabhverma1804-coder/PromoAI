import React, { useRef, useState } from 'react';

import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import {
  imageOutline,
  sparklesOutline,
} from 'ionicons/icons';

import ProductForm from '../components/ProductForm';
import ContentTypeSelector from '../components/ContentTypeSelector';
import { generatePromotionalReel } from '../services/promo-ai.service';
import { useNavigate } from 'react-router-dom';

import type {
  ContentType,
  ReelDuration,
  ReelStyle,
} from '../types/content';

import './Create.css';

const Create: React.FC = () => {

  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [offer, setOffer] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [category, setCategory] = useState('');

  const [contentType, setContentType] =
    useState<ContentType>('reel');

  const [reelStyle, setReelStyle] =
    useState<ReelStyle>('cinematic');

  const [duration, setDuration] =
    useState<ReelDuration>(15);

  const [productImage, setProductImage] =
    useState<File | null>(null);

  const [imagePreview, setImagePreview] =
    useState<string>('');

  const [isGenerating, setIsGenerating] =
    useState(false);

  const handleImageSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setProductImage(file);

    const previewUrl = URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };

  const handleGenerate = async () => {
    if (!productName.trim()) {
      alert('Please enter the product name.'); return;
    }
    setIsGenerating(true);
    try {
      const result = await generatePromotionalReel({
        productName: productName.trim(),
        description: description.trim() || undefined,
        price: price.trim() || undefined,
        offer: offer.trim() || undefined,
        targetAudience: targetAudience.trim() || undefined,
        category: category.trim() || undefined,
        reelStyle,
        duration,
      });
      console.log('Generate Reel Response:', result);
      if (!result.success || !result.reel) {
        throw new Error(result.error || 'Reel generation failed.');

      } /* Backend se received Reel data ko Result page par pass kar rahe hain. */ navigate('/result', { state: { reel: result.reel, }, });
    }
    catch (error) {
      console.error('Generate Promotional Reel Error:', error);
      alert(error instanceof Error
        ? error.message : 'Unable to connect to PromoAI backend.'
      );
    }
    finally {
      setIsGenerating(false);

    }
  };

  return (
    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonTitle>
            ✨ PromoAI
          </IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

        <div className="create-container">

          {/* Page Heading */}

          <div className="create-heading">

            <div className="create-badge">
              ✨ AI ADVERTISING STUDIO
            </div>

            <IonText>

              <h1>
                Create Your
                <br />
                <span>Promotional Reel</span>
              </h1>

            </IonText>

            <IonText color="medium">

              <p>
                Give AI your product information and let it
                create a scroll-stopping promotional Reel.
              </p>

            </IonText>

          </div>


          {/* Product Information */}

          <div className="section-card">

            <div className="section-heading">

              <div className="section-number">
                01
              </div>

              <div>
                <h2>
                  Product Information
                </h2>

                <p>
                  Tell AI about your product
                </p>
              </div>

            </div>

            <ProductForm
              productName={productName}
              description={description}
              price={price}
              offer={offer}
              targetAudience={targetAudience}
              category={category}
              onProductNameChange={setProductName}
              onDescriptionChange={setDescription}
              onPriceChange={setPrice}
              onOfferChange={setOffer}
              onTargetAudienceChange={setTargetAudience}
              onCategoryChange={setCategory}
            />

          </div>


          {/* Product Image */}

          <div className="section-card">

            <div className="section-heading">

              <div className="section-number">
                02
              </div>

              <div>
                <h2>
                  Product Image
                </h2>

                <p>
                  Optional — AI can work without an image
                </p>
              </div>

            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageSelect}
            />

            <div
              className={`image-upload ${imagePreview ? 'has-image' : ''
                }`}
              onClick={() =>
                fileInputRef.current?.click()
              }
            >

              {imagePreview ? (

                <div className="image-preview-wrapper">

                  <IonImg
                    src={imagePreview}
                    alt="Product preview"
                  />

                  <div className="image-change-label">
                    Change Image
                  </div>

                </div>

              ) : (

                <>

                  <div className="upload-icon">
                    <IonIcon
                      icon={imageOutline}
                    />
                  </div>

                  <h3>
                    Add Product Image
                  </h3>

                  <p>
                    Optional • JPG, PNG or WEBP
                  </p>

                  <span className="upload-hint">
                    AI can create the Reel even without an image
                  </span>

                </>

              )}

            </div>

          </div>


          {/* Content Type */}

          <div className="section-card">

            <div className="section-heading">

              <div className="section-number">
                03
              </div>

              <div>
                <h2>
                  Content Type
                </h2>

                <p>
                  Choose what AI should create
                </p>
              </div>

            </div>

            <ContentTypeSelector
              value={contentType}
              onChange={setContentType}
            />

          </div>


          {/* Reel Settings */}

          {contentType === 'reel' && (

            <div className="section-card">

              <div className="section-heading">

                <div className="section-number">
                  04
                </div>

                <div>
                  <h2>
                    Reel Settings
                  </h2>

                  <p>
                    Customize the creative direction
                  </p>
                </div>

              </div>


              <div className="reel-settings">

                {/* Reel Style */}

                <div className="setting-group">

                  <label>
                    Reel Style
                  </label>

                  <IonSelect
                    interface="popover"
                    value={reelStyle}
                    onIonChange={(event) =>
                      setReelStyle(
                        event.detail.value as ReelStyle
                      )
                    }
                  >

                    <IonSelectOption value="cinematic">
                      🎬 Cinematic
                    </IonSelectOption>

                    <IonSelectOption value="luxury">
                      💎 Luxury
                    </IonSelectOption>

                    <IonSelectOption value="energetic">
                      ⚡ Energetic
                    </IonSelectOption>

                    <IonSelectOption value="minimal">
                      ◻️ Minimal
                    </IonSelectOption>

                    <IonSelectOption value="social-media">
                      🔥 Social Media Trending
                    </IonSelectOption>

                  </IonSelect>

                </div>


                {/* Duration */}

                <div className="setting-group">

                  <label>
                    Duration
                  </label>

                  <IonSelect
                    interface="popover"
                    value={duration}
                    onIonChange={(event) =>
                      setDuration(
                        Number(
                          event.detail.value
                        ) as ReelDuration
                      )
                    }
                  >

                    <IonSelectOption value={15}>
                      15 seconds
                    </IonSelectOption>

                    <IonSelectOption value={20}>
                      20 seconds
                    </IonSelectOption>

                  </IonSelect>

                </div>

              </div>


              {/* AI Information */}

              <div className="ai-info-box">

                <div className="ai-info-icon">
                  ✨
                </div>

                <div>

                  <strong>
                    AI Creative Mode
                  </strong>

                  <p>
                    AI will use everything you provide and
                    creatively fill missing information to
                    build your promotional concept.
                  </p>

                </div>

              </div>

            </div>

          )}


          {/* Generate */}

          <div className="generate-section">

            <div className="generate-info">

              <span>
                ✨
              </span>

              <div>

                <strong>
                  Ready to create?
                </strong>

                <p>
                  Your AI promotional Reel will be
                  optimized for Instagram.
                </p>

              </div>

            </div>

            <IonButton
              expand="block"
              size="large"
              className="generate-button"
              onClick={handleGenerate}
              disabled={
                isGenerating ||
                !productName.trim()
              }
            >

              <IonIcon
                slot="start"
                icon={sparklesOutline}
              />

              {isGenerating
                ? 'Creating with AI...'
                : contentType === 'reel'
                  ? 'Generate Promotional Reel'
                  : 'Generate Promotional Banner'
              }

            </IonButton>

            <p className="generate-note">
              Product Name is required • Everything else is optional
            </p>

          </div>

        </div>

      </IonContent>

    </IonPage>
  );
};

export default Create;