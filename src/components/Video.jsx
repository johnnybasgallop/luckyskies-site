'use client';

import { useState } from 'react';

export default function Video() {
  // Set to null or empty string for placeholder, or add YouTube video ID when ready
  const [videoId, setVideoId] = useState('');

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
          {videoId ? (
            // YouTube Video Embed (when video ID is added)
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Lucky Skies - When You Know It's Christmas"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            // Placeholder
            <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative w-full h-96 flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-white/50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Video Coming Soon</h3>
                  <p className="text-gray-300">
                    Check back soon or subscribe to our YouTube channel for updates
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 text-center border-t border-gray-200">
                <a
                  href="https://www.youtube.com/@LuckySkiesMusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          )}
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
