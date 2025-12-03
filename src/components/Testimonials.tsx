
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Rocky River, OH',
      rating: 5,
      text: 'Called them at 11 PM with a major backup. They arrived in 45 minutes and had everything fixed within an hour. True lifesavers! Professional, courteous, and their pricing was exactly what they quoted.',
      service: 'Emergency Sewer Line Cleaning'
    },
    {
      name: 'James Rodriguez',
      location: 'Miami, FL',
      rating: 5,
      text: 'Best drain service I\'ve ever used. The technician explained everything, showed me the camera inspection footage, and cleared years of buildup. No more slow drains! Worth every penny.',
      service: 'Hydro Jetting Service'
    },
    {
      name: 'Emily Chen',
      location: 'Marietta, GA',
      rating: 5,
      text: 'Our kitchen sink was completely blocked during a holiday weekend. They came out immediately, diagnosed the issue, and fixed it fast. Very impressed with their professionalism and expertise.',
      service: 'Kitchen Drain Cleaning'
    },
    {
      name: 'Michael Thompson',
      location: 'Rochester, NY',
      rating: 5,
      text: 'Had multiple drains backing up—scary situation. Their team responded quickly, identified a main line blockage, and used hydro jetting to completely clear it. Haven\'t had a single issue since. Highly recommend!',
      service: 'Main Sewer Line Service'
    },
    {
      name: 'Lisa Anderson',
      location: 'Bay Village, OH',
      rating: 5,
      text: 'Professional from start to finish. They arrived on time, wore protective gear, explained the problem clearly, and cleaned up perfectly after the job. The transparency in pricing was refreshing.',
      service: 'Bathroom Drain Cleaning'
    },
    {
      name: 'David Park',
      location: 'Lakeland, FL',
      rating: 5,
      text: 'Emergency service on a Sunday morning! Our basement was flooding from a floor drain backup. They responded immediately and prevented major damage. Can\'t thank them enough for their quick action.',
      service: 'Emergency Drain Service'
    },
    {
      name: 'Jennifer Martinez',
      location: 'North Olmsted, OH',
      rating: 5,
      text: 'Used them for routine maintenance and they found issues before they became emergencies. The camera inspection was eye-opening. They saved me from what could have been a disaster. Great preventive service!',
      service: 'Drain Camera Inspection'
    },
    {
      name: 'Robert Williams',
      location: 'Avon, OH',
      rating: 5,
      text: 'Top-notch service! Toilet was overflowing and they had someone here within the hour. Fixed the problem completely and even gave me tips to prevent future issues. Will definitely use them again.',
      service: 'Toilet Drain Unclogging'
    },
    {
      name: 'Amanda Foster',
      location: 'Fairview Park, OH',
      rating: 5,
      text: 'Our shower drain had been slow for weeks. They came out, used a camera to find the problem, and hydro jetted the line. Drains like new now! Professional service at a fair price.',
      service: 'Shower Drain Cleaning'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Real reviews from real customers who experienced our emergency drain cleaning services.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-location">{testimonial.location}</div>
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-service">
                <span className="service-badge">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
