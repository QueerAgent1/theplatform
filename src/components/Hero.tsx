export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">QueerLuxe Travel Studio</h1>
        <p className="text-xl md:text-2xl mb-8">Luxury travel experiences designed for the LGBTQ+ community</p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
          Explore Destinations
        </button>
      </div>
    </section>
  );
}
