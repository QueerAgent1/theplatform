import Link from 'next/link';

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: '1',
      name: 'Barcelona, Spain',
      image: '/images/barcelona.jpg',
      description: 'A vibrant city with stunning architecture, beautiful beaches, and a thriving LGBTQ+ scene.',
      safetyScore: 92
    },
    {
      id: '2',
      name: 'Tokyo, Japan',
      image: '/images/tokyo.jpg',
      description: 'Experience the perfect blend of tradition and innovation in one of the world\'s most exciting cities.',
      safetyScore: 85
    },
    {
      id: '3',
      name: 'Cape Town, South Africa',
      image: '/images/cape-town.jpg',
      description: 'Breathtaking landscapes, diverse culture, and a welcoming LGBTQ+ community await you.',
      safetyScore: 78
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Featured Destinations</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Discover our handpicked LGBTQ+ friendly luxury destinations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-purple-200 relative">
                {/* Placeholder for image */}
                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-tl-lg">
                  <span className="text-sm font-medium">Safety Score: {destination.safetyScore}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Link href={`/safety/${destination.id}`} className="text-purple-600 font-medium hover:text-purple-800">
                  View Safety Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/safety" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Explore All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
