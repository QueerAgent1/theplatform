import React from 'react'

export const Testimonials = () => {
  return (
    <section className="py-20 bg-[#6A0DAD] text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The House of QueerLuxe Testimonials</h2>
          <p className="text-lg opacity-90">
            Hear from travelers who've experienced the QueerLuxe difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800">
            <div className="mb-4">
              <p className="italic text-gray-600">
                "QueerLuxe transformed my travel experience from apprehension to absolute joy. For the first time, I felt celebrated rather than merely tolerated. The attention to detail was impeccable!"
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Jordan T.</h4>
                <p className="text-sm text-gray-500">Tokyo Adventure, 2024</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800">
            <div className="mb-4">
              <p className="italic text-gray-600">
                "As a trans woman, finding travel experiences where I'm truly welcomed can be challenging. QueerLuxe not only found me safe spaces, but places where I was celebrated. The luxury yacht experience in Greece was beyond my wildest dreams!"
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#C71585] rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Sophia R.</h4>
                <p className="text-sm text-gray-500">Greek Islands Cruise, 2024</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800">
            <div className="mb-4">
              <p className="italic text-gray-600">
                "Our honeymoon had to be perfect, and QueerLuxe delivered beyond our expectations. From the private villa in Bali to the personalized welcome at every hotel, we felt like royalty. This is how travel should be!"
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#008080] rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Marcus & David</h4>
                <p className="text-sm text-gray-500">Honeymoon Tour, 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-[#6A0DAD] px-6 py-3 rounded-md hover:bg-opacity-90 transition-all">
            Read More Stories
          </button>
        </div>
      </div>
    </section>
  )
}
