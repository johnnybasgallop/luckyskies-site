export default function Hero() {
  return (
    <section
      id="home"
      className="hidden relative min-h-screen md:flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                LUCKY SKIES
              </h1>
              <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full max-w-xs mx-auto lg:mx-0"></div>
            </div>

            <p className="text-2xl sm:text-3xl text-gray-700 font-light tracking-wide">
              CONTEMPORARY CLASSIC POP
            </p>

            {/* Featuring Stagecoach */}
            <div className="flex items-center justify-center lg:justify-start gap-4 xl:mt-15 mt-5">
              <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
                Featuring
              </span>
              <div className="relative w-24 h-auto">
                <img
                  src="/stagecoach.png"
                  alt="Stagecoach Performing Arts"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#music"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Listen Now
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl transform rotate-6"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/hero.png"
                  alt="Lucky Skies"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
