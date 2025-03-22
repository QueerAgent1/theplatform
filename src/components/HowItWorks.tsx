import React from 'react'

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A0DAD] mb-4">The QueerLuxe Experience</h2>
          <p className="text-lg text-gray-700">
            Our clear, stress-free plan for your perfect luxury travel experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#6A0DAD] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
            <h3 className="text-xl font-bold mb-3 text-[#333333]">Connect</h3>
            <p className="text-gray-600">Share your travel aspirations and preferences with our expert curators</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
            <h3 className="text-xl font-bold mb-3 text-[#333333]">Design</h3>
            <p className="text-gray-600">We craft a bespoke itinerary tailored to your unique desires</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-[#008080] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
            <h3 className="text-xl font-bold mb-3 text-[#333333]">Confirm</h3>
            <p className="text-gray-600">We meticulously book every detail of your luxury experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-[#C71585] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">4</div>
            <h3 className="text-xl font-bold mb-3 text-[#333333]">Experience</h3>
            <p className="text-gray-600">Travel with confidence while we provide ongoing support</p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="btn-primary">Begin Your Transformation</button>
        </div>
      </div>
    </section>
  )
}
