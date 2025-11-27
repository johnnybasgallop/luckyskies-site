export default function MobileHero() {
  return (
    <section
      id="home"
      className="md:hidden relative flex justify-center overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 pt-30 pb-35"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col w-full text-center justify-center items-center lg:text-left space-y-15">
            {/* <p className="md:text-2xl text-xl text-gray-700 font-light tracking-wide">
              CONTEMPORARY CLASSIC POP
            </p> */}

            <div className="relative w-full flex justify-center">
              <img
                src="./hero.jpeg"
                alt="Lucky Skies"
                width={600}
                height={600}
                className="w-[90vw] rounded-3xl h-auto object-contain"
              />

              {/* Featuring badge positioned relative to the image */}
              <div className="absolute top-[-12px] left-[73%] -translate-x-1/2">
                <div className="flex items-center gap-1">
                  <span className="bg-white px-4 py-[10px] rounded-full text-gray-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
                    Featuring
                  </span>
                  <img
                    src="/stagecoach.png"
                    alt="Stagecoach Performing Arts"
                    className="w-12 h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href="#music"
                className="py-4 w-[90vw] bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Listen Now
              </a>
              <a
                href="#about"
                className="py-4 w-[90vw] bg-white border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side - Hero Image */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce bg-white backdrop-blur-xl rounded-full p-3">
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
