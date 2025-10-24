export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Built for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              We understand the challenges that modern businesses face. That is why we have created a solution that combines power, simplicity, and flexibility.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform has helped thousands of teams streamline their workflows, increase productivity, and achieve their goals faster than ever before.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Proven Results</h4>
                  <p className="text-gray-600">Join 10,000+ companies that trust our platform for their success.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Continuous Innovation</h4>
                  <p className="text-gray-600">Regular updates and new features based on customer feedback.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">World-Class Support</h4>
                  <p className="text-gray-600">Expert help available 24/7 to ensure your success.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-slide-up">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-32 h-32 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-400 text-sm">Your Image Here</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}