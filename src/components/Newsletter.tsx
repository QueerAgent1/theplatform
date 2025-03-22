import React from 'react'

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#6A0DAD] to-[#C71585] text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the House of QueerLuxe</h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe for exclusive travel offers, inspiration, and community stories
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <button className="btn-secondary whitespace-nowrap">Subscribe</button>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            By subscribing, you agree to receive marketing communications from QueerLuxe Travel Studio.
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
}
