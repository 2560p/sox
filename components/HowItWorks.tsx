export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Plan",
      description: "Select the number of sock pairs, color (white or black), and delivery frequency that works for you.",
      icon: "📋"
    },
    {
      number: 2,
      title: "Subscribe",
      description: "Complete your subscription with our secure payment system. Cancel or modify anytime.",
      icon: "✅"
    },
    {
      number: 3,
      title: "Receive Your Socks",
      description: "Get premium quality socks delivered to your door on your chosen schedule.",
      icon: "📦"
    },
    {
      number: 4,
      title: "Enjoy Fresh Socks",
      description: "Never worry about running out of socks again. We've got you covered!",
      icon: "😊"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Getting started is easy. Follow these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">🇳🇱</div>
            <h4 className="font-bold text-gray-900 mb-1">Made in Netherlands</h4>
            <p className="text-sm text-gray-600">Premium quality, locally sourced</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">♻️</div>
            <h4 className="font-bold text-gray-900 mb-1">Sustainable</h4>
            <p className="text-sm text-gray-600">Eco-friendly materials</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h4 className="font-bold text-gray-900 mb-1">Free Shipping</h4>
            <p className="text-sm text-gray-600">Throughout the Netherlands</p>
          </div>
        </div>
      </div>
    </section>
  );
}
