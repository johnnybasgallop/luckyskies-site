'use client';

export default function Music() {
  const streamingPlatforms = [
    {
      name: 'Spotify',
      color: 'bg-[#1DB954]',
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
    },
    {
      name: 'Apple Music',
      color: 'bg-gradient-to-br from-pink-500 to-purple-600',
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.132c-.317-1.446-1.142-2.584-2.139-3.016-.749-.324-1.65-.419-2.612-.419a122.954 122.954 0 0 0-3.237.152 123.524 123.524 0 0 0-3.207.156c-.14.012-.28.024-.418.036V15.95a3.406 3.406 0 0 0-1.044-.168c-1.898 0-3.431 1.534-3.431 3.432 0 1.898 1.533 3.432 3.431 3.432 1.898 0 3.432-1.534 3.432-3.432V9.238c2.017-.168 4.016-.36 6.015-.539v5.416a3.406 3.406 0 0 0-1.044-.168c-1.898 0-3.431 1.534-3.431 3.432 0 1.898 1.533 3.432 3.431 3.432 1.899 0 3.433-1.534 3.433-3.432V6.124z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube Music',
      color: 'bg-[#FF0000]',
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/>
        </svg>
      ),
    },
    {
      name: 'Amazon Music',
      color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.4 17.6c.9.6 2.1 1 3.4 1.2 1.3.2 2.7.3 4.2.3 1.8 0 3.4-.2 4.9-.5 1.5-.3 2.7-.9 3.8-1.6.3-.2.3-.5.1-.7-.2-.2-.5-.2-.7 0-2 1.3-4.6 2-7.8 2-2.5 0-4.7-.4-6.6-1.3-.2-.1-.5-.1-.6.1-.2.2-.1.4.1.5h.2zm-.5-2.9c2.2 1.6 5.4 2.4 8.8 2.4 2.3 0 4.3-.3 6.1-.9 1.8-.6 3.2-1.5 4.3-2.6.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0-2 1.9-4.9 2.9-8.6 2.9-3.3 0-6.1-.7-8.4-2-.2-.1-.5-.1-.7.1-.1.2-.1.5.1.7l.1.1zm16.8 3.5c-.2-.1-.5 0-.6.2-.1.2 0 .5.2.6 1.6.8 2.4 1.4 2.4 1.8 0 .2-.4.5-1.3.7-.8.2-1.9.3-3.1.3-2.1 0-4.4-.4-6.8-1.3-2.4-.8-4.5-2-6.4-3.4-.2-.1-.5-.1-.7.1-.1.2-.1.5.1.7 2 1.5 4.2 2.7 6.7 3.6 2.5.9 4.9 1.3 7.1 1.3 1.4 0 2.6-.1 3.6-.4 1-.3 1.7-.7 2-1.3.2-.4.2-.8-.1-1.2-.3-.4-1.2-1-2.1-1.7z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="music" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Listen Now
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Stream &ldquo;When You Know It&rsquo;s Christmas&rdquo; on your favorite platform
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              When You Know It&rsquo;s Christmas
            </h3>
            <p className="text-lg text-gray-600">Lucky Skies feat. Stagecoach</p>
          </div>

          {/* Ditto Embed */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-xl p-8 text-center">
              <a
                href="https://ditto.fm/when-you-know-it-s-christmas/presavecallback?context=pre_save&service=spotify&redirecturl&actionid&order=6924910ca25e1ee52e6c8b52&fpEnabled=false&user=Captain%20T&status=success&origin=presavecallback"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Stream on All Platforms
              </a>
              <p className="text-white mt-4 text-sm">
                Available on Spotify, Apple Music, YouTube Music, and more
              </p>
            </div>
          </div>

          {/* Streaming platforms with logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {streamingPlatforms.map((platform, index) => (
              <div
                key={index}
                className={`${platform.color} rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center`}
              >
                {platform.icon}
                <p className="text-white font-semibold mt-3 text-sm">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
