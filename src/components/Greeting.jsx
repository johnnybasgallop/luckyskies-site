"use client";

export default function Greeting() {
  return (
    <section
      id="greeting"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Greeting From Lucky Skies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A special message from the band
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <video
              className="w-full"
              controls
              preload="metadata"
            >
              <source src="/greeting.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
