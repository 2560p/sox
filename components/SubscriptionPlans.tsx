'use client';

import { useState } from 'react';

type Frequency = 'monthly' | 'bimonthly' | 'sixmonthly';
type Color = 'white' | 'black';

interface Plan {
  pairs: number;
  monthlyPrice: number;
  popular?: boolean;
}

const plans: Plan[] = [
  { pairs: 5, monthlyPrice: 15 },
  { pairs: 10, monthlyPrice: 25, popular: true },
  { pairs: 18, monthlyPrice: 40 },
];

const frequencyOptions = [
  { value: 'monthly' as Frequency, label: 'Every Month', discount: 0 },
  { value: 'bimonthly' as Frequency, label: 'Every 2 Months', discount: 5 },
  { value: 'sixmonthly' as Frequency, label: 'Every 6 Months', discount: 15 },
];

export default function SubscriptionPlans() {
  const [selectedFrequency, setSelectedFrequency] = useState<Frequency>('monthly');
  const [selectedColor, setSelectedColor] = useState<Color>('black');

  const calculatePrice = (basePrice: number) => {
    const discount = frequencyOptions.find(f => f.value === selectedFrequency)?.discount || 0;
    return basePrice * (1 - discount / 100);
  };

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600">
            Select the perfect subscription for your needs
          </p>
        </div>

        {/* Color Selection */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-300 p-1">
            <button
              onClick={() => setSelectedColor('white')}
              className={`px-6 py-2 rounded-md transition-colors ${
                selectedColor === 'white'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ⚪ White Socks
            </button>
            <button
              onClick={() => setSelectedColor('black')}
              className={`px-6 py-2 rounded-md transition-colors ${
                selectedColor === 'black'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ⚫ Black Socks
            </button>
          </div>
        </div>

        {/* Frequency Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-4">
            {frequencyOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedFrequency(option.value)}
                className={`px-6 py-3 rounded-lg border-2 transition-all ${
                  selectedFrequency === option.value
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                <div className="font-medium">{option.label}</div>
                {option.discount > 0 && (
                  <div className="text-sm">Save {option.discount}%</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.pairs}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gray-900 text-white ring-4 ring-gray-900 ring-offset-4'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center">
                <div className="text-5xl mb-4">🧦</div>
                <h3 className="text-2xl font-bold mb-2">{plan.pairs} Pairs</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    €{calculatePrice(plan.monthlyPrice).toFixed(0)}
                  </span>
                  <span className={plan.popular ? 'text-gray-300' : 'text-gray-500'}>
                    /delivery
                  </span>
                </div>
                
                <ul className={`space-y-3 mb-8 text-left ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {plan.pairs} pairs of {selectedColor} socks
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium quality cotton
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free shipping in NL
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cancel anytime
                  </li>
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
