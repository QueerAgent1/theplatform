export default function Testimonials() {
  const testimonials = [
    {
      id: '1',
      name: 'Alex Johnson',
      location: 'New York, USA',
      quote: 'QueerLuxe Travel Studio created the most amazing experience for my husband and me on our honeymoon. Every detail was perfect!',
      image: '/images/testimonial-1.jpg'
    },
    {
      id: '2',
      name: 'Sophia Chen',
      location: 'London, UK',
      quote: 'As a trans woman, I was concerned about travel safety. QueerLuxe made me feel secure and celebrated throughout my entire journey.',
      image: '/images/testimonial-2.jpg'
    },
    {
      id: '3',
      name: 'Marcus & David',
      location: 'Sydney, Australia',
      quote: 'The luxury accommodations and exclusive experiences were beyond our expectations. We\'ve already booked our next trip!',
      image: '/images/testimonial-3.jpg'
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">What Our Travelers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full mb-4">
                  {/* Placeholder for image */}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{testimonial.location}</p>
                <p className="text-gray-600 text-center italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
