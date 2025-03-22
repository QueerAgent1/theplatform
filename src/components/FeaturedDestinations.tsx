import React from 'react'

export const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A0DAD] mb-4">Category Is: Destination Eleganza</h2>
          <p className="text-lg text-gray-700">
            Explore our handpicked collection of LGBTQ+ friendly luxury destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-64 bg-[#191970] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span>Paris Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Paris, France</h3>
              <p className="text-gray-600 mb-4">Darling, Your Luxury Awaits: Paris Like You've Never Experienced</p>
              <button className="btn-outline w-full">Discover Paris</button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-64 bg-[#008080] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span>Bali Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Bali, Indonesia</h3>
              <p className="text-gray-600 mb-4">Serving Opulence: Bali Retreats That Celebrate Your Authentic Self</p>
              <button className="btn-outline w-full">Discover Bali</button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-64 bg-[#6A0DAD] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span>Greek Islands Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Greek Islands</h3>
              <p className="text-gray-600 mb-4">Category Is: Mediterranean Elegance – Greek Islands for the Discerning Traveler</p>
              <button className="btn-outline w-full">Discover Greece</button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">View All Destinations</button>
        </div>
      </div>
    </section>
  )
}
