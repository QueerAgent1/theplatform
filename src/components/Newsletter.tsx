export default function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for exclusive travel offers, LGBTQ+ friendly destination updates, and luxury travel inspiration.</p>
        
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
        
        <p className="mt-4 text-sm opacity-80">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
