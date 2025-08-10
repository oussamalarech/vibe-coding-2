import React from 'react';
import { Card } from '../src/components/Card';
import { PricingSection } from '../src/components/PricingSection';

/**
 * Example 1: Basic Card Usage
 */
export const BasicCardExample = () => (
  <Card
    title="Starter Plan"
    price="$4.99/month"
    features={[
      '500 MB Storage',
      'Community Support',
      'Basic Features'
    ]}
    onButtonClick={() => alert('Starter plan selected!')}
  />
);

/**
 * Example 2: Featured Card with Custom Button
 */
export const FeaturedCardExample = () => (
  <Card
    title="Pro Plan"
    price="$19.99/month"
    features={[
      '10 GB Storage',
      'Priority Support',
      'Advanced Features',
      'API Access'
    ]}
    buttonText="Get Pro Now"
    variant="featured"
    onButtonClick={() => alert('Pro plan selected!')}
  />
);

/**
 * Example 3: Minimal Card Variant
 */
export const MinimalCardExample = () => (
  <Card
    title="Enterprise"
    price="Custom Pricing"
          features={[
        'Unlimited Storage',
        '24/7 Support',
        'Custom Features',
        'Dedicated Manager'
      ]}
    buttonText="Contact Sales"
    variant="minimal"
    onButtonClick={() => alert('Contacting sales...')}
  />
);

/**
 * Example 4: Disabled Card
 */
export const DisabledCardExample = () => (
  <Card
    title="Coming Soon"
    price="TBD"
          features={[
        'AI-Powered Features',
        'Advanced Analytics',
        'Custom Workflows'
      ]}
    buttonText="Notify Me"
    disabled={true}
  />
);

/**
 * Example 5: Complete Pricing Section
 */
export const CompletePricingSectionExample = () => {
  const plans = [
    {
      id: 'basic',
      title: 'Basic',
      price: '$9.99/month',
      features: [
        '1 GB Storage',
        'Basic Support',
        'Core Features'
      ],
      variant: 'default' as const
    },
    {
      id: 'pro',
      title: 'Professional',
      price: '$29.99/month',
      features: [
        '10 GB Storage',
        'Priority Support',
        'Advanced Features',
        'API Access'
      ],
      variant: 'featured' as const,
      popular: true
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: '$99.99/month',
      features: [
        'Unlimited Storage',
        '24/7 Support',
        'Custom Features',
        'Dedicated Manager'
      ],
      variant: 'default' as const
    }
  ];

  const handlePlanSelect = (planId: string) => {
    console.log(`Selected plan: ${planId}`);
    // In a real app, you might:
    // - Redirect to checkout
    // - Update user subscription
    // - Show plan details
  };

  return (
    <PricingSection
      plans={plans}
      sectionTitle="Choose Your Perfect Plan"
      sectionSubtitle="Start with our basic plan and upgrade as you grow"
      onPlanSelect={handlePlanSelect}
    />
  );
};

/**
 * Example 6: Dynamic Card Generation
 */
export const DynamicCardsExample = () => {
  const cardData = [
    { title: 'Plan A', price: '$10', features: ['Feature 1', 'Feature 2'] },
    { title: 'Plan B', price: '$20', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { title: 'Plan C', price: '$30', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] }
  ];

  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          price={data.price}
          features={data.features}
          onButtonClick={() => alert(`${data.title} selected!`)}
        />
      ))}
    </div>
  );
};

/**
 * Example 7: Card with Custom Styling
 */
export const CustomStyledCardExample = () => (
  <Card
    title="Custom Plan"
    price="$15.99/month"
    features={[
      'Custom Feature 1',
      'Custom Feature 2',
      'Custom Feature 3'
    ]}
    className="custom-card-style"
    onButtonClick={() => alert('Custom plan selected!')}
  />
);

/**
 * Example 8: Interactive Pricing Section
 */
export const InteractivePricingSectionExample = () => {
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null);
  
  const plans = [
    {
      id: 'monthly',
      title: 'Monthly',
      price: '$19.99/month',
      features: ['Flexible billing', 'Cancel anytime'],
      variant: 'default' as const
    },
    {
      id: 'yearly',
      title: 'Yearly',
      price: '$199.99/year',
      features: ['2 months free', 'Best value', 'Locked in rate'],
      variant: 'featured' as const,
      popular: true
    }
  ];

  return (
    <div>
      <PricingSection
        plans={plans}
        sectionTitle="Choose Your Billing Cycle"
        sectionSubtitle="Save money with annual billing"
        onPlanSelect={setSelectedPlan}
      />
      {selectedPlan && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>You selected: <strong>{selectedPlan}</strong></p>
        </div>
      )}
    </div>
  );
}; 