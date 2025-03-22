import React from 'react'

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#6A0DAD] to-[#C71585] text-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Travel Authentically. Live Luxuriously. Belong Anywhere.
            </h1>
            <p className="text-xl opacity-90">
              Bespoke, luxurious travel experiences crafted by and for the LGBTQ+ community and allies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-secondary">Explore Destinations</button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#6A0DAD] transition-all">
                Plan Your Journey
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            {/* Image placeholder - will be replaced with actual image in Codespaces */}
            <div className="absolute inset-0 bg-[#C71585] bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Hero Image: Diverse LGBTQ+ travelers in luxury setting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
