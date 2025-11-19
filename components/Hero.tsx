export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Socks,<br />Delivered to Your Door
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to high-quality socks from the Netherlands. Choose your color, 
            quantity, and delivery frequency. Never run out of fresh socks again.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">
            Start Your Subscription
          </button>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🧦</div>
              <p className="text-gray-600 font-medium">White Socks</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🧦</div>
              <p className="text-gray-300 font-medium">Black Socks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
