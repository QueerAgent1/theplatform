import React from 'react'

export const ValueProposition = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A0DAD] mb-4">Where Luxury Meets Authenticity</h2>
          <p className="text-lg text-gray-700">
            At QueerLuxe Travel Studio, we understand the delicate balance between adventure and comfort.
            Our experts have walked these paths before you, ensuring every experience is both authentic and exquisite.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#6A0DAD] hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-[#6A0DAD] rounded-full flex items-center justify-center mb-4 text-white">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#333333]">Vetted, Celebratory Destinations</h3>
            <p className="text-gray-600">We don't just book travel; we curate moments where you can live your truth in absolute luxury.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#D4AF37] hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 text-white">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#333333]">Local Queer Culture</h3>
            <p className="text-gray-600">Connect with authentic local LGBTQ+ communities and experiences that most travelers never discover.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#008080] hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mb-4 text-white">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#333333]">Elevated Experiences</h3>
            <p className="text-gray-600">From private yacht charters to exclusive resort access, experience travel at its most opulent.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#C71585] hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-[#C71585] rounded-full flex items-center justify-center mb-4 text-white">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#333333]">Personalized Service</h3>
            <p className="text-gray-600">Travel with experts who truly see and understand you, providing support every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
