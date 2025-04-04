export default function HowItWorks() {
  const steps = [
    {
      id: '1',
      title: 'Discover',
      description: 'Browse our curated collection of LGBTQ+ friendly luxury destinations and experiences.',
      icon: '🔍'
    },
    {
      id: '2',
      title: 'Personalize',
      description: 'Work with our travel experts to customize your perfect itinerary based on your preferences.',
      icon: '✨'
    },
    {
      id: '3',
      title: 'Experience',
      description: 'Enjoy your luxury travel experience with confidence, knowing every detail has been thoughtfully arranged.',
      icon: '🌈'
    },
    {
      id: '4',
      title: 'Share',
      description: 'Connect with the QueerLuxe community and share your experiences to inspire others.',
      icon: '❤️'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">How It Works</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Your journey to extraordinary LGBTQ+ travel experiences</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                {step.icon}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
