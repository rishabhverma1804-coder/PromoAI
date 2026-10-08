import React from 'react';

import {
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
} from '@ionic/react';

interface ProductFormProps {
  productName: string;
  description: string;
  price: string;
  offer: string;
  targetAudience: string;
  category: string;

  onProductNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onOfferChange: (value: string) => void;
  onTargetAudienceChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  productName,
  description,
  price,
  offer,
  targetAudience,
  category,
  onProductNameChange,
  onDescriptionChange,
  onPriceChange,
  onOfferChange,
  onTargetAudienceChange,
  onCategoryChange,
}) => {
  return (
    <div className="product-form">

      {/* Product Name - Only required field */}
      <IonItem>
        <IonLabel position="stacked">
          Product Name <span className="required-mark">*</span>
        </IonLabel>

        <IonInput
          value={productName}
          placeholder="Example: Premium Perfume"
          clearInput
          onIonInput={(event) =>
            onProductNameChange(event.detail.value ?? '')
          }
        />
      </IonItem>

      {/* Description - Optional */}
      <IonItem>
        <IonLabel position="stacked">
          Product Description
          <span className="optional-label">Optional</span>
        </IonLabel>

        <IonTextarea
          value={description}
          placeholder="Describe your product... AI will fill creative gaps if left empty."
          autoGrow={true}
          rows={3}
          onIonInput={(event) =>
            onDescriptionChange(event.detail.value ?? '')
          }
        />
      </IonItem>

      {/* Price + Offer */}
      <div className="two-column">

        <IonItem>
          <IonLabel position="stacked">
            Price
            <span className="optional-label">Optional</span>
          </IonLabel>

          <IonInput
            value={price}
            placeholder="₹1999"
            clearInput
            onIonInput={(event) =>
              onPriceChange(event.detail.value ?? '')
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">
            Offer
            <span className="optional-label">Optional</span>
          </IonLabel>

          <IonInput
            value={offer}
            placeholder="20% OFF"
            clearInput
            onIonInput={(event) =>
              onOfferChange(event.detail.value ?? '')
            }
          />
        </IonItem>

      </div>

      {/* Target Audience */}
      <IonItem>
        <IonLabel position="stacked">
          Target Audience
          <span className="optional-label">Optional</span>
        </IonLabel>

        <IonInput
          value={targetAudience}
          placeholder="Young men and women 18-35"
          clearInput
          onIonInput={(event) =>
            onTargetAudienceChange(event.detail.value ?? '')
          }
        />
      </IonItem>

      {/* Category */}
      <IonItem>
        <IonLabel position="stacked">
          Product Category
          <span className="optional-label">Optional</span>
        </IonLabel>

        <IonInput
          value={category}
          placeholder="Fashion, Beauty, Electronics..."
          clearInput
          onIonInput={(event) =>
            onCategoryChange(event.detail.value ?? '')
          }
        />
      </IonItem>

      <div className="form-helper">
        <span>✨</span>
        <p>
          Only the product name is required. Give AI as much or as little
          information as you have.
        </p>
      </div>

    </div>
  );
};

export default ProductForm;