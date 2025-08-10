import React, { useState, useCallback } from 'react';
import { Card, CardProps } from '../Card';
import './PricingSection.css';

/**
 * Interface for pricing plan data
 */
interface PricingPlan {
  id: string;
  title: string;
  price: string;
  features: string[];
  variant?: CardProps['variant'];
  popular?: boolean;
}

/**
 * Props for PricingSection component
 */
interface PricingSectionProps {
  /** Array of pricing plans to display */
  plans: PricingPlan[];
  /** Optional title for the section */
  sectionTitle?: string;
  /** Optional subtitle for the section */
  sectionSubtitle?: string;
  /** Callback when a plan is selected */
  onPlanSelect?: (planId: string) => void;
}

/**
 * PricingSection component that displays multiple pricing cards
 * 
 * @param props - Component props
 * @returns A responsive pricing section with multiple cards
 */
export const PricingSection: React.FC<PricingSectionProps> = ({
  plans,
  sectionTitle = 'Choose Your Plan',
  sectionSubtitle = 'Select the perfect plan for your needs',
  onPlanSelect
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = useCallback((planId: string) => {
    setSelectedPlan(planId);
    onPlanSelect?.(planId);
  }, [onPlanSelect]);

  // Error handling for missing plans
  if (!plans || plans.length === 0) {
    console.warn('PricingSection: No plans provided');
    return (
      <div className="pricing-section pricing-section--error">
        <p>No pricing plans available at the moment.</p>
      </div>
    );
  }

  return (
    <section className="pricing-section" aria-labelledby="pricing-title">
      <header className="pricing-section__header">
        <h1 id="pricing-title" className="pricing-section__title">
          {sectionTitle}
        </h1>
        {sectionSubtitle && (
          <p className="pricing-section__subtitle">
            {sectionSubtitle}
          </p>
        )}
      </header>

      <div className="pricing-section__grid">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`pricing-section__card-wrapper ${
              plan.popular ? 'pricing-section__card-wrapper--popular' : ''
            }`}
          >
            {plan.popular && (
              <div className="pricing-section__popular-badge">
                Most Popular
              </div>
            )}
            <Card
              title={plan.title}
              price={plan.price}
              features={plan.features}
              variant={plan.variant || 'default'}
              buttonText={selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
              onButtonClick={() => handlePlanSelect(plan.id)}
              className={selectedPlan === plan.id ? 'pricing-section__card--selected' : ''}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection; 