export default function MobileHero() {
  return (
    <section
      id="home"
      className="md:hidden relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 py-20"
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
          <div className="flex flex-col w-full text-center justify-center items-center lg:text-left space-y-0">
            {/* <p className="md:text-2xl text-xl text-gray-700 font-light tracking-wide">
              CONTEMPORARY CLASSIC POP
            </p> */}

            <div className="">
              <img
                src="/hero.png"
                alt="Lucky Skies"
                width={600}
                height={600}
                className="w-[80vw] rounded-3xl h-auto object-contain "
              />
            </div>

            {/* Featuring Stagecoach */}
            <div className="relative bottom-82 left-23">
              <div className="flex items-center justify-center lg:justify-start gap-1">
                <span className="bg-white/80 backdrop-blur-sm px-4 py-[10px] rounded-full text-gray-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
                  Featuring
                </span>
                <div className="relative w-15 h-auto">
                  <img
                    src="/stagecoach.png"
                    alt="Stagecoach Performing Arts"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#music"
                className="py-3 w-[80vw] bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Listen Now
              </a>
              <a
                href="#about"
                className="py-3 w-[80vw] bg-white border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side - Hero Image */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce bg-white backdrop-blur-xl rounded-full p-2">
          <svg
            className="w-4 h-4 text-black"
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
