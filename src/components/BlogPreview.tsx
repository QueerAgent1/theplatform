import React from 'react'

export const BlogPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A0DAD] mb-4">The QueerLuxe Chronicles</h2>
          <p className="text-lg text-gray-700">
            Travel stories, insights, and inspiration from our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-48 bg-[#C71585] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span>Blog Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Finding Queer Joy in Traditional Cultures</h3>
              <p className="text-gray-600 mb-4">Navigating and celebrating LGBTQ+ experiences in conservative destinations</p>
              <a href="#" className="text-[#6A0DAD] font-medium hover:underline">Read More →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-48 bg-[#008080] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span>Blog Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#333333]">The Ultimate Pride Calendar 2025</h3>
              <p className="text-gray-600 mb-4">Your guide to the most fabulous Pride celebrations around the world</p>
              <a href="#" className="text-[#6A0DAD] font-medium hover:underline">Read More →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="h-48 bg-[#6A0DAD] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span>Blog Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Luxury Travel for Every Body</h3>
              <p className="text-gray-600 mb-4">How QueerLuxe is redefining inclusive luxury experiences</p>
              <a href="#" className="text-[#6A0DAD] font-medium hover:underline">Read More →</a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-outline">View All Articles</button>
        </div>
      </div>
    </section>
  )
}
