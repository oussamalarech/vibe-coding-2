import React from 'react';
import './Card.css';

/**
 * Interface for Card component props
 */
export interface CardProps {
  /** The title of the card */
  title: string;
  /** The price display text */
  price: string;
  /** Array of feature strings to display */
  features: string[];
  /** Optional button text (defaults to "Start Trial") */
  buttonText?: string;
  /** Optional click handler for the button */
  onButtonClick?: () => void;
  /** Optional CSS class for additional styling */
  className?: string;
  /** Optional variant for different card styles */
  variant?: 'default' | 'featured' | 'minimal';
  /** Optional disabled state */
  disabled?: boolean;
}

/**
 * Card component for displaying pricing plans or feature lists
 * 
 * @param props - Card component props
 * @returns A responsive card component with proper accessibility
 * 
 * @example
 * ```tsx
 * <Card
 *   title="Basic Plan"
 *   price="$9.99/month"
 *   features={["1 GB Storage", "Basic Support", "All Core Features"]}
 *   onButtonClick={() => console.log('Button clicked')}
 * />
 * ```
 */
export const Card: React.FC<CardProps> = ({
  title,
  price,
  features,
  buttonText = 'Start Trial',
  onButtonClick,
  className = '',
  variant = 'default',
  disabled = false
}) => {
  // Error handling for missing required data
  if (!title || !price || !features || features.length === 0) {
    console.warn('Card component: Missing required props (title, price, or features)');
    return null;
  }

  // Memoize the features list to prevent unnecessary re-renders
  const featuresList = React.useMemo(() => 
    features.map((feature, index) => (
      <li key={`${feature}-${index}`} className="card__feature">
        {feature}
      </li>
    )), [features]
  );

  const handleButtonClick = () => {
    if (!disabled && onButtonClick) {
      onButtonClick();
    }
  };

  const cardClasses = [
    'card',
    `card--${variant}`,
    disabled ? 'card--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <article className={cardClasses} role="article" aria-labelledby="card-title">
      <header className="card__header">
        <h2 id="card-title" className="card__title">
          {title}
        </h2>
        <p className="card__price" aria-label={`Price: ${price}`}>
          {price}
        </p>
      </header>
      
      <section className="card__features" aria-labelledby="card-title">
        <ul className="card__features-list" role="list">
          {featuresList}
        </ul>
      </section>
      
      <footer className="card__footer">
        <button
          className="card__button"
          onClick={handleButtonClick}
          disabled={disabled}
          aria-describedby="card-title"
          aria-label={`${buttonText} for ${title}`}
        >
          {buttonText}
        </button>
      </footer>
    </article>
  );
};

export default Card; 