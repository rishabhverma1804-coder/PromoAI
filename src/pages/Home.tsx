import React from 'react';

import {
  IonButton,
  IonContent,
  IonPage,
  IonText,
} from '@ionic/react';

import { useNavigate } from 'react-router-dom';

import './Home.css';

const Home: React.FC = () => {

  const navigate = useNavigate();

  return (
    <IonPage>

      <IonContent fullscreen>

        <div className="home-container">

          <div className="home-hero">

            <div className="brand">
              ✨ PromoAI
            </div>

            <IonText>
              <h1>
                Turn Products Into
                <br />
                <span>Promotional Reels</span>
              </h1>
            </IonText>

            <IonText color="medium">
              <p>
                Upload your product and let AI create
                engaging promotional content for Instagram.
              </p>
            </IonText>

            <IonButton
              size="large"
              onClick={() => navigate('/create')}
            >
              ✨ Create Promotional Reel
            </IonButton>

          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>AI Reels</h3>
              <p>
                Generate promotional video content
                from your product.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🖼️</div>
              <h3>AI Banners</h3>
              <p>
                Create attractive promotional images
                for social media.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI Marketing</h3>
              <p>
                AI automatically creates hooks,
                captions and promotional concepts.
              </p>
            </div>

          </div>

        </div>

      </IonContent>

    </IonPage>
  );
};

export default Home;