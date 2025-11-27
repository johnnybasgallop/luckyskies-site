export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lucky Skies feat. Stagecoach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Story
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our band, Lucky Skies, all live in and around the London/Surrey area of the UK.
              We are experienced performing musicians who share a passion for creating classic pop music.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We wrote and recorded the song <span className="font-semibold">&ldquo;When You Know It&rsquo;s Christmas&rdquo;</span>
              &mdash; a joint venture with Stagecoach Performing Arts featuring backing vocals from
              a total of <span className="font-semibold text-purple-600">6,345 children</span> from
              England, Wales, Scotland, Germany, Malta, and Canada.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The song is a classic Christmas pop song in the traditional sense, bringing together
              voices from hundreds of Stagecoach schools spread all across the UK and beyond.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              About Stagecoach
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stagecoach Performing Arts &mdash; the biggest performing arts school in the world &mdash;
              began in Surrey and now has thousands of current and ex-students.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Founded in 1988 by Stephanie Manuel and David Sprigg</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Operates over 700 schools in nine countries</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Notable alumni include Emma Watson, Jamie Bell, and Tom Fletcher</span>
                </li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The video was recorded in the beautiful chapel at Royal Holloway, University of London
              and other locations nearby.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
