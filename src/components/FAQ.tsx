
import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What are the common signs that I need emergency drain cleaning?',
      answer: 'Common signs include: complete drain blockage with no water flow, multiple drains backing up simultaneously, sewage odors inside your home, visible sewage backup, water flooding from drains, gurgling sounds from toilets or drains, and standing water that won\'t drain. These situations require immediate professional attention.'
    },
    {
      question: 'How quickly can a professional arrive for an urgent drain blockage?',
      answer: 'Our emergency response teams are strategically positioned across all service areas and typically arrive within 60-90 minutes of your call, 24/7. Response times vary by location and current demand, but we prioritize all emergency calls and dispatch the nearest available technician immediately.'
    },
    {
      question: 'What methods do experts use for emergency drain cleaning?',
      answer: 'Professional emergency drain cleaning uses multiple methods: high-pressure hydro jetting for complete pipe cleaning, mechanical drain snaking for breaking through blockages, video camera inspection for accurate diagnosis, specialized root cutting equipment, and professional-grade augers. The method selected depends on the specific situation.'
    },
    {
      question: 'Can emergency drain cleaners handle both residential and commercial issues?',
      answer: 'Yes, professional emergency drain cleaning services handle both residential and commercial properties. However, this service focuses primarily on residential drain emergencies. Commercial properties often require specialized equipment and different service protocols.'
    },
    {
      question: 'Are 24/7 drain cleaning services available near me?',
      answer: 'Yes! Emergency Drain Cleaning Pros provides true 24/7 service in all our coverage areas. We maintain on-call technicians around the clock, every day of the year, including nights, weekends, and holidays. When you have a drain emergency, we\'re always available.'
    },
    {
      question: 'How much does emergency drain cleaning typically cost?',
      answer: 'Emergency drain cleaning costs vary based on several factors: time of service, blockage severity, drain type, and required equipment. Simple drain clearing may range from $150-$300, while complex main sewer line cleaning can cost $400-$800+. After-hours service typically carries a premium. We provide upfront estimates before beginning work.'
    },
    {
      question: 'Can emergency services fix sewage backups effectively?',
      answer: 'Yes, emergency drain cleaning services are specifically equipped to handle sewage backups safely and effectively. We use professional equipment, follow strict safety protocols, completely clear the blockage, and ensure proper sanitization. Sewage backups are considered high-priority emergencies.'
    },
    {
      question: 'Should I use drain chemicals before calling a professional?',
      answer: 'No, avoid chemical drain cleaners. They can damage pipes, create dangerous fumes, worsen blockages, harm septic systems, and make professional cleaning more difficult. Chemical cleaners rarely solve serious blockages and often cause more problems. Call a professional instead for safe, effective clearing.'
    },
    {
      question: 'What is the fastest way to clear a blocked drain during an emergency?',
      answer: 'The fastest and most effective approach is calling a professional emergency drain cleaning service immediately. Attempting DIY fixes during emergencies often wastes valuable time and can worsen the problem. Professionals arrive equipped with specialized tools and expertise to diagnose and clear blockages quickly.'
    },
    {
      question: 'Do emergency drain services offer same-day or 1-hour response?',
      answer: 'Yes, most emergency drain cleaning services offer same-day service, and many provide response within 60-90 minutes for true emergencies. Response times depend on your location, current service demand, and the time of day. We prioritize emergency calls and dispatch technicians as quickly as possible.'
    },
    {
      question: 'Can hydro jetting remove grease, sludge, and tree roots?',
      answer: 'Yes, professional hydro jetting is highly effective at removing grease buildup, sludge accumulation, soap scum, mineral deposits, and even tree roots. High-pressure water (up to 4000 PSI) completely cleans pipe walls and provides long-lasting results. It\'s the most thorough drain cleaning method available.'
    },
    {
      question: 'What should I do if multiple drains clog at once?',
      answer: 'Multiple clogged drains indicate a main sewer line blockage—a serious emergency. Stop using all water in your home immediately, avoid flushing toilets, and call emergency drain cleaning service right away. This situation can quickly lead to sewage backup throughout your home and requires immediate professional attention.'
    },
    {
      question: 'Do emergency drain companies provide camera inspections?',
      answer: 'Yes, professional emergency drain companies use video camera inspection as a standard diagnostic tool. High-definition cameras inserted into your drain lines reveal the exact location, cause, and severity of blockages. This technology ensures accurate diagnosis and efficient clearing without guesswork.'
    },
    {
      question: 'How do I know if the problem is in my home or the main sewer line?',
      answer: 'If multiple drains back up simultaneously, water backs up when using other fixtures, or all drains are slow or blocked, the problem is likely in your main sewer line. If only one fixture is affected, the issue is probably in that individual drain line. Professional camera inspection provides definitive answers.'
    },
    {
      question: 'Can emergency cleaning prevent water damage and flooding?',
      answer: 'Yes, immediate emergency drain cleaning prevents or minimizes water damage and flooding. Fast response stops backups before they cause extensive damage, protects your home and belongings, prevents structural issues, and eliminates health hazards from sewage exposure. Quick action is crucial for damage prevention.'
    },
    {
      question: 'Do local drain experts offer warranties or guarantees?',
      answer: 'Yes, reputable drain cleaning companies offer satisfaction guarantees and workmanship warranties, typically ranging from 30-90 days. If the same blockage returns within the warranty period, they return to resolve it at no additional charge. Always request warranty terms in writing before service.'
    },
    {
      question: 'Are emergency drain cleaning costs higher at night or on weekends?',
      answer: 'Yes, after-hours emergency service (nights, weekends, holidays) typically costs 1.5-2x regular rates due to premium availability. However, the additional cost is often worth it to prevent extensive damage from untreated emergencies. Many companies provide upfront pricing so you know costs before service begins.'
    },
    {
      question: 'Can emergency drain cleaners unclog outdoor or yard drains?',
      answer: 'Yes, professional emergency drain cleaning services handle outdoor and yard drains, including storm drains, yard drainage systems, basement floor drains, and outdoor sink drains. These situations often require specialized equipment and expertise that professionals provide.'
    },
    {
      question: 'How can I avoid future emergency drain issues?',
      answer: 'Prevent emergencies through: annual professional drain cleaning, proper disposal practices (no grease down drains), using drain screens, addressing slow drains promptly, avoiding chemical cleaners, proper usage of garbage disposals, and scheduling inspections when warning signs appear. Preventive maintenance dramatically reduces emergency situations.'
    },
    {
      question: 'Are slow drains a sign of a pending emergency?',
      answer: 'Yes, slow drains often indicate developing blockages that will eventually cause complete backups. Addressing slow drains with professional cleaning prevents emergencies, saves money compared to emergency service, and protects your plumbing system. Don\'t ignore slow drains—they rarely resolve on their own.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about emergency drain cleaning services near you.
        </p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item glass-card ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
