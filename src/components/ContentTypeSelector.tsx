import React from 'react';
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';

import type { ContentType } from '../types/content';

interface ContentTypeSelectorProps {
  value: ContentType;
  onChange: (value: ContentType) => void;
}

const ContentTypeSelector: React.FC<ContentTypeSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <IonSegment
      value={value}
      onIonChange={(event) => {
        onChange(event.detail.value as ContentType);
      }}
    >
      <IonSegmentButton value="reel">
        <IonLabel>🎬 Reel</IonLabel>
      </IonSegmentButton>

      <IonSegmentButton value="banner">
        <IonLabel>🖼️ Banner</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default ContentTypeSelector;