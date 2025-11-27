export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUCKY SKIES</h3>
            <p className="text-gray-600">
              Contemporary Classic Pop from the London/Surrey area
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#band"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  The Band
                </a>
              </li>
              <li>
                <a
                  href="#music"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  href="#video"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  Video
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com/LuckySkiesMusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lucky_skies_music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@LuckySkiesMusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.stagecoach.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  Stagecoach Performing Arts
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Lucky Skies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <span>Genre: Contemporary Classic Pop</span>
              <span className="hidden sm:inline">|</span>
              <span>London/Surrey, UK</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
