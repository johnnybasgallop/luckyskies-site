'use client';

import { useState } from 'react';

export default function SafetyReminder() {
  const [isOpen, setIsOpen] = useState(false);

  const officialAccounts = [
    { platform: 'Facebook', handle: 'Lucky Skies Music' },
    { platform: 'Instagram', handle: '@lucky_skies_music' },
    { platform: 'X (Twitter)', handle: '@luckyskiesmusic' },
    { platform: 'TikTok', handle: '@luckyskies2' },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex items-center justify-between"
        >
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-yellow-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="font-semibold text-gray-900">Online Safety Reminder</span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="mt-4 bg-white rounded-lg shadow-md p-6 md:p-8">

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              A friendly reminder to all Lucky Skies fans that our only official and legitimate
              social media accounts are:
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3">
                {officialAccounts.map((account, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <span className="font-semibold">{account.platform}:</span> {account.handle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <h3 className="font-bold text-red-900 mb-2 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Stay Vigilant
              </h3>
              <p className="text-red-800">
                Fake and imitation profiles are an unfortunate inevitability online.
                If you receive a direct message from anyone purporting to be Lucky Skies
                or their management, and at any point asking you for money or personal
                details, <span className="font-bold">do not reply to them</span>.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="font-bold text-blue-900 mb-2">What to do:</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Block and report the account through the relevant social media platform&rsquo;s reporting process</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Never share personal information or send money to unverified accounts</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Help other fans stay safe by reporting scammers in the comments</span>
                </li>
              </ul>
            </div>

            <p className="text-center text-gray-600 italic">
              Thank you to the fans who regularly identify and block any scammers appearing in
              the comments, helping to keep each other safe.
            </p>
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
