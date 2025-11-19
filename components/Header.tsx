export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Sox</h1>
            <span className="ml-2 text-sm text-gray-500">Netherlands</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#plans" className="text-gray-700 hover:text-gray-900">Plans</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</a>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
