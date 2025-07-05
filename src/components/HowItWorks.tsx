import React from 'react';

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wider">
            GETTING STARTED
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600">
            We believe in constructive criticism that fuels success.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                {/* Scribbled Circle */}
                <div className="relative w-20 h-20 mx-auto">
                  <svg
                    className="w-20 h-20 text-gray-800"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 40C15 25 25 15 40 15C55 15 65 25 65 40C65 55 55 65 40 65C25 65 15 55 15 40Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      style={{
                        strokeDasharray: "3,2",
                        filter: "url(#roughPaper)"
                      }}
                    />
                    <defs>
                      <filter id="roughPaper">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
                      </filter>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">1</span>
                  </div>
                </div>
              </div>

              {/* Arrow 1 - positioned to the right of circle 1 */}
              <div className="hidden md:block absolute top-6 -right-12 z-10">
                <svg
                  className="w-24 h-12"
                  viewBox="0 0 96 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#FFA500" />
                      <stop offset="100%" stopColor="#FF6347" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8 24C8 24 32 8 48 24C64 40 88 24 88 24"
                    stroke="url(#arrowGradient1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    markerEnd="url(#arrowhead1)"
                  />
                  <defs>
                    <marker
                      id="arrowhead1"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon
                        points="0 0, 10 3.5, 0 7"
                        fill="url(#arrowGradient1)"
                      />
                    </marker>
                  </defs>
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Add Indicator in Tradingview
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose your indicator plan and seamlessly connect it to your TradingView chart in seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                {/* Scribbled Circle */}
                <div className="relative w-20 h-20 mx-auto">
                  <svg
                    className="w-20 h-20 text-gray-800"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 40C15 25 25 15 40 15C55 15 65 25 65 40C65 55 55 65 40 65C25 65 15 55 15 40Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      style={{
                        strokeDasharray: "3,2",
                        filter: "url(#roughPaper2)"
                      }}
                    />
                    <defs>
                      <filter id="roughPaper2">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
                      </filter>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">2</span>
                  </div>
                </div>
              </div>

              {/* Arrow 2 - positioned to the right of circle 2 */}
              <div className="hidden md:block absolute top-6 -right-12 z-10">
                <svg
                  className="w-24 h-12"
                  viewBox="0 0 96 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#FFA500" />
                      <stop offset="100%" stopColor="#FF6347" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8 24C8 24 32 40 48 24C64 8 88 24 88 24"
                    stroke="url(#arrowGradient2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    markerEnd="url(#arrowhead2)"
                  />
                  <defs>
                    <marker
                      id="arrowhead2"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon
                        points="0 0, 10 3.5, 0 7"
                        fill="url(#arrowGradient2)"
                      />
                    </marker>
                  </defs>
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Wait For Signals
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
               Let our quant-based indicators analyze the market and alert you to high-probability trade setups.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                {/* Scribbled Circle */}
                <div className="relative w-20 h-20 mx-auto">
                  <svg
                    className="w-20 h-20 text-gray-800"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 40C15 25 25 15 40 15C55 15 65 25 65 40C65 55 55 65 40 65C25 65 15 55 15 40Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      style={{
                        strokeDasharray: "3,2",
                        filter: "url(#roughPaper3)"
                      }}
                    />
                    <defs>
                      <filter id="roughPaper3">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="3"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
                      </filter>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">3</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Take Fearless Trades
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">Act on the signals and manage your trades effortlessly — aim for your targets without
hesitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}