'use client';

export default function Video() {
  // Video URL from f.io
  const videoUrl = 'https://f.io/5VvH6Om7';

  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Official Video
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Filmed at the beautiful chapel at Royal Holloway, University of London
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="Lucky Skies - When You Know It's Christmas (with captions)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            The video features stunning visuals captured at Royal Holloway&rsquo;s historic chapel,
            bringing together the festive spirit of our Christmas classic with breathtaking
            architecture and locations.
          </p>
        </div>
      </div>
    </section>
  );
}
