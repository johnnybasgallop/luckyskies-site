'use client';

import { useState } from 'react';

export default function Lyrics() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Lyrics Button Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Song Lyrics
          </h3>
          <p className="text-gray-600 mb-6">
            Read the full lyrics to &ldquo;When You Know It&rsquo;s Christmas&rdquo;
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Lyrics
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="sticky top-0 right-0 float-right m-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                  When You Know It&rsquo;s Christmas
                </h2>
                <p className="text-center text-gray-600 mb-8">Lucky Skies feat. Stagecoach</p>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <p>Hark Herald angels are singing,</p>
                    <p>For a stable birth,</p>
                    <p>Why&rsquo;s it only at this time of year,</p>
                    <p>We sing of peace on Earth?</p>
                  </div>

                  <div>
                    <p>The village green is frosty white,</p>
                    <p>The golden winter sun sinks low,</p>
                    <p>Will the forecasters get it right,</p>
                    <p>Will it really snow, proper snow?</p>
                  </div>

                  <div className="italic font-semibold text-center text-lg">
                    <p>Holy night, starry night,</p>
                    <p>There&rsquo;s something special in the air tonight,</p>
                    <p>That&rsquo;s when you know it&rsquo;s Christmas,</p>
                    <p>That&rsquo;s when you know</p>
                  </div>

                  <div>
                    <p>Choosing presents for the ones you love,</p>
                    <p>Sharing drinks with favourite friends,</p>
                    <p>Familiar songs play on the radio,</p>
                    <p>Another year is at an end</p>
                  </div>

                  <div>
                    <p>Singing carols in a crowded church,</p>
                    <p>The vicar beams from ear to ear,</p>
                    <p>All ye faithful came and filled the place,</p>
                    <p>He wonders where, where they&rsquo;ve been all year</p>
                  </div>

                  <div className="italic font-semibold text-center text-lg">
                    <p>Holy night, starry night,</p>
                    <p>There is something special going on tonight,</p>
                    <p>That&rsquo;s when you know it&rsquo;s Christmas,</p>
                    <p>That&rsquo;s when you know.</p>
                  </div>

                  <div>
                    <p>Going back to 1914,</p>
                    <p>Entrenched on Christmas Day</p>
                    <p>Two armies left their guns</p>
                    <p>in the hellish mud,</p>
                    <p>And they got ...together...to play</p>
                  </div>

                  <div className="text-center italic">
                    <p>Instrumental</p>
                  </div>

                  <div>
                    <p>Wisemen, shepherds, a nativity scene,</p>
                    <p>Tea-towels on tiny heads,</p>
                    <p>Leaving carrots out for Rudolph,</p>
                    <p>&ldquo;Santa won&rsquo;t be coming til you&rsquo;re</p>
                    <p>fast asleep in bed.&rdquo;</p>
                  </div>

                  <div className="italic font-semibold text-center text-lg">
                    <p>Holy night, starry night,</p>
                    <p>There is something special in the air tonight,</p>
                    <p>That&rsquo;s when you know it&rsquo;s Christmas,</p>
                    <p>That&rsquo;s when you know.</p>
                  </div>

                  <div className="text-sm text-gray-500 italic text-center mt-8">
                    <p>Outro over C- D/F#- iF -Dm7/G</p>
                    <p>Part 1 Holy night, starry night, (loop)</p>
                    <p>Part 2 There is something special in the air tonight,</p>
                    <p>That&rsquo;s when you know it&rsquo;s Christmas,</p>
                    <p>That&rsquo;s when you know.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
