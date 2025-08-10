import React from 'react';
import { Card } from './components/Card';
import { PricingSection } from './components/PricingSection';
import './App.css';

/**
 * Sample pricing plans data
 */
const samplePricingPlans = [
  {
    id: 'basic',
    title: 'Basic Plan',
    price: '$9.99/month',
    features: [
      '1 GB Storage',
      'Basic Support',
      'All Core Features',
      'Email Support'
    ],
    variant: 'default' as const
  },
  {
    id: 'pro',
    title: 'Pro Plan',
    price: '$19.99/month',
    features: [
      '10 GB Storage',
      'Priority Support',
      'All Core Features',
      'Advanced Analytics',
      'API Access',
      'Phone Support'
    ],
    variant: 'featured' as const,
    popular: true
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: '$49.99/month',
    features: [
      'Unlimited Storage',
      '24/7 Support',
      'All Core Features',
      'Advanced Analytics',
      'API Access',
      'Phone Support',
      'Custom Integrations',
      'Dedicated Account Manager'
    ],
    variant: 'default' as const
  }
];

/**
 * Main App component demonstrating Card and PricingSection usage
 */
function App() {
  const handlePlanSelect = (planId: string) => {
    console.log(`Selected plan: ${planId}`);
    // In a real app, you might redirect to checkout or update state
  };

  const handleCardClick = () => {
    console.log('Individual card clicked!');
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>Pricing Component Demo</h1>
        <p>Modern, responsive pricing cards built with React & TypeScript</p>
      </header>

      <main className="app__main">
        {/* Individual Card Example */}
        <section className="app__section">
          <h2>Individual Card Example</h2>
          <div className="app__card-demo">
            <Card
              title="Starter Plan"
              price="$4.99/month"
              features={[
                '500 MB Storage',
                'Community Support',
                'Basic Features'
              ]}
              buttonText="Get Started"
              onButtonClick={handleCardClick}
              variant="minimal"
            />
          </div>
        </section>

        {/* Pricing Section Example */}
        <section className="app__section">
          <PricingSection
            plans={samplePricingPlans}
            sectionTitle="Choose Your Perfect Plan"
            sectionSubtitle="Start with our basic plan and upgrade as you grow"
            onPlanSelect={handlePlanSelect}
          />
        </section>

        {/* Disabled Card Example */}
        <section className="app__section">
          <h2>Disabled Card Example</h2>
          <div className="app__card-demo">
            <Card
              title="Coming Soon"
              price="TBD"
              features={[
                'Advanced AI Features',
                'Custom Workflows',
                'Enterprise Security'
              ]}
              buttonText="Notify Me"
              disabled={true}
            />
          </div>
        </section>
      </main>

      <footer className="app__footer">
        <p>&copy; 2024 Pricing Component Demo. Built with modern web technologies.</p>
      </footer>
    </div>
  );
}

export default App; 