
import React, { useState } from 'react';
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
    },
    {
      question: 'What should I do if my drain is completely blocked?',
      answer: 'For a completely blocked drain: stop using that fixture immediately, avoid chemical drain cleaners, do not attempt aggressive DIY clearing that could damage pipes, turn off water to prevent overflow if necessary, call professional emergency drain cleaning service, and describe the situation clearly to dispatch. Quick professional intervention prevents damage and ensures proper clearing.'
    },
    {
      question: 'How quickly can a drain cleaning service arrive in an emergency?',
      answer: 'Professional emergency drain services typically arrive within 60-90 minutes for urgent situations. Response times vary based on your location, time of day, and current demand. Services with local technicians and multiple locations generally provide faster response than those covering large areas from single locations.'
    },
    {
      question: 'What are the signs that I need a professional to clean my drains?',
      answer: 'Call a professional when you notice: recurring clogs despite clearing attempts, multiple slow drains, gurgling sounds, sewage odors, water backing up into other fixtures, standing water that drains very slowly, or visible sewage. These signs indicate problems that require professional equipment and expertise.'
    },
    {
      question: 'Are there any preventative maintenance tips to avoid future drain emergencies?',
      answer: 'Key prevention tips include: schedule annual professional drain cleaning, use drain screens to catch debris, dispose of grease in trash (not drains), run hot water after using garbage disposal, avoid flushing inappropriate items, address slow drains immediately, consider water softener if you have hard water, and have professional inspections for older plumbing.'
    },
    {
      question: 'Can drain cleaning services handle both residential and commercial emergencies?',
      answer: 'Most drain cleaning services handle both residential and commercial properties, though requirements differ. This service specializes in residential drain emergencies. Commercial properties often require different equipment, certifications, and service protocols due to larger systems and different usage patterns.'
    },
    {
      question: 'What methods do professionals use to resolve emergency drain blockages?',
      answer: 'Professionals use various methods: hydro jetting with high-pressure water for complete cleaning, mechanical snaking/rooter for breaking through blockages, video camera inspection for accurate diagnosis, specialized augers for different drain types, root cutting equipment for tree intrusions, and combination approaches for complex situations. Method selection depends on the specific blockage.'
    },
    {
      question: 'How do I find the best emergency drain cleaning near me fast?',
      answer: 'To find reliable emergency drain cleaning: search "emergency drain cleaning near me", check online reviews and ratings, verify licensing and insurance, confirm 24/7 availability, ask about response times, request upfront pricing, check Better Business Bureau ratings, and ask for references. Local companies with established reputations typically provide the best service.'
    },
    {
      question: 'Do emergency drain cleaners near me offer 24/7 service?',
      answer: 'Many emergency drain cleaning companies claim 24/7 service, but verify true around-the-clock availability. Emergency Drain Cleaning Pros maintains on-call technicians 24/7/365 in all service areas, ensuring real emergency response any time, day or night, including holidays.'
    },
    {
      question: 'Can local emergency plumbers handle sewer line backups?',
      answer: 'Yes, professional emergency drain cleaning services are equipped to handle sewer line backups with specialized equipment including high-pressure hydro jetters, sewer-specific cameras, heavy-duty augers, and root cutting tools. Sewer backups are considered critical emergencies requiring immediate professional intervention.'
    },
    {
      question: 'How fast can same-day drain cleaning arrive at my home?',
      answer: 'Same-day service is standard for emergency drain cleaning, with many services arriving within 1-2 hours of your call. For critical emergencies like sewage backups or flooding, response is often within 60 minutes. Actual arrival times depend on your location and technician availability at the time of your call.'
    },
    {
      question: 'Are emergency drain services available on weekends and holidays?',
      answer: 'Yes, true emergency drain cleaning services operate 24/7 including all weekends and holidays. Drain emergencies don\'t respect schedules, so professional services maintain availability year-round. Weekend and holiday service may carry premium pricing, but availability is guaranteed.'
    },
    {
      question: 'Do emergency drain companies use hydro jetting?',
      answer: 'Yes, professional emergency drain companies use hydro jetting as a primary clearing method for severe blockages. This technique uses high-pressure water (up to 4000 PSI) to completely remove clogs, clean pipe walls, cut through roots, and eliminate years of buildup. It\'s the most effective drain cleaning method available.'
    },
    {
      question: 'Should I use chemical drain cleaners before calling a pro?',
      answer: 'No, never use chemical drain cleaners before professional service. They can damage pipes, create hazardous fumes when combined with professional equipment, make blockages worse by hardening debris, harm septic systems, and pose safety risks to technicians. Always call professionals first for safe, effective clearing.'
    },
    {
      question: 'What\'s the difference between emergency and regular drain cleaning?',
      answer: 'Emergency drain cleaning provides 24/7 immediate response for urgent situations like backups, overflows, and severe blockages. Regular drain cleaning is scheduled, preventive maintenance during business hours. Emergency service typically costs more but addresses critical situations that can\'t wait. Both use similar techniques but differ in timing and urgency.'
    },
    {
      question: 'Can urgent drain cleaning prevent water damage?',
      answer: 'Yes, immediate emergency drain cleaning prevents water damage by quickly stopping overflows, eliminating backups before they spread, clearing blockages before pipes burst from pressure, and preventing sewage contamination. Fast professional response is crucial for minimizing damage and protecting your property and health.'
    },
    {
      question: 'How do professionals diagnose extreme drain clogs?',
      answer: 'Professionals diagnose severe clogs using: visual inspection of accessible drain areas, video camera inspection to see inside pipes, pressure testing, locating equipment to find blockage position, analysis of multiple fixture behavior, and experience recognizing common patterns. Technology and expertise combine for accurate diagnosis.'
    },
    {
      question: 'Are after-hours drain cleaning costs higher?',
      answer: 'Yes, after-hours service (nights, weekends, holidays) typically costs 1.5-2x standard rates due to premium availability and overtime for technicians. However, delaying treatment often leads to greater damage and higher total costs. Reputable companies provide clear pricing before beginning work, so you know costs upfront.'
    },
    {
      question: 'Is emergency drain cleaning effective for tree-root intrusions?',
      answer: 'Yes, professional emergency drain cleaning effectively removes tree roots using specialized root cutting augers and high-pressure hydro jetting. After clearing, professionals may recommend preventive treatments to slow re-growth and can assess whether pipe repair or replacement is needed for severe root damage.'
    },
    {
      question: 'Do slow drains always require emergency service?',
      answer: 'Slow drains don\'t always require emergency service but should never be ignored. If drains are progressively worsening, multiple drains are slow, or sewage odors are present, schedule service promptly. Complete blockage or backup requires immediate emergency service. Addressing slow drains prevents future emergencies.'
    },
    {
      question: 'How do I know if the issue is from my home or city sewer line?',
      answer: 'If the problem affects only your property, it\'s your responsibility. If neighbors also experience issues, it may be the city main. Check cleanout access points—if backup occurs before the property line, it\'s your system. Camera inspection definitively shows where blockages are located. The city typically handles issues in public lines beyond your property.'
    },
    {
      question: 'Do emergency drain services near me provide warranties?',
      answer: 'Yes, reputable emergency drain services provide warranties on their work, typically 30-90 days depending on the service performed. Warranties cover the same blockage recurring, workmanship issues, and equipment failures. Hydro jetting often carries longer warranties than simple snaking. Always get warranty terms in writing.'
    },
    {
      question: 'Can experts fix recurring clogs permanently?',
      answer: 'Yes, professionals can often permanently resolve recurring clogs by identifying and addressing root causes rather than just clearing symptoms. Camera inspection reveals underlying issues like pipe damage, incorrect slope, or root infiltration. Solutions may include thorough hydro jetting, pipe repair, or system modifications to prevent recurrence.'
    },
    {
      question: 'What tools do emergency drain cleaners use?',
      answer: 'Professional emergency drain cleaners use: commercial hydro jetting machines (up to 4000 PSI), various drain snakes and augers, video camera inspection systems, locating equipment, specialized cutting tools, professional vacuums for cleanup, and pressure testing equipment. This specialized equipment enables fast, effective clearing that DIY methods cannot achieve.'
    },
    {
      question: 'Can they remove grease buildup in kitchen drains?',
      answer: 'Yes, professionals effectively remove kitchen grease buildup using high-pressure hydro jetting, which breaks down and flushes out hardened grease, soap scum, and food particles. This method thoroughly cleans pipe walls unlike snaking, which only pokes holes through blockages. Regular professional cleaning prevents grease accumulation.'
    },
    {
      question: 'Can emergency services handle toilet overflows?',
      answer: 'Yes, emergency drain services specialize in toilet overflow situations, which can involve sewage and require immediate response. Professionals have proper equipment, safety protocols, and expertise to quickly clear toilet blockages, address main line issues causing backups, and ensure proper sanitization after clearing.'
    },
    {
      question: 'Is camera inspection included in emergency services?',
      answer: 'Camera inspection availability varies by company and situation. Many include it as standard practice for diagnosing complex blockages, while others offer it as an additional service. For severe or recurring issues, camera inspection is highly recommended and often included to ensure proper diagnosis and complete clearing.'
    },
    {
      question: 'What are the common causes of sudden drain blockages?',
      answer: 'Common causes include: flushing inappropriate items (wipes, feminine products), grease/fat accumulation, hair accumulation, soap scum buildup, foreign objects, tree root intrusion into sewer lines, pipe deterioration, shifted pipes from ground movement, and heavy rain overwhelming drainage systems. Many sudden blockages result from gradual buildup reaching critical points.'
    },
    {
      question: 'Can emergency cleaners detect pipe leaks?',
      answer: 'While emergency drain cleaners focus primarily on clearing blockages, camera inspection often reveals pipe leaks, cracks, and damage. Many services offer leak detection as an additional capability. If leaks are discovered, professionals can provide repair recommendations or referrals to specialists.'
    },
    {
      question: 'Do 24/7 services unclog outdoor/yard drains?',
      answer: 'Yes, 24/7 emergency drain services handle outdoor and yard drain emergencies including storm drains, French drains, yard drainage systems, and exterior basement drains. Outdoor drain blockages can cause flooding and foundation damage, making them legitimate emergencies requiring immediate professional attention.'
    },
    {
      question: 'What is the fastest method to clear a blocked drain?',
      answer: 'The fastest effective method is calling professional emergency drain cleaning immediately. Professionals arrive equipped with diagnostic tools and multiple clearing methods (hydro jetting, snaking, etc.) to quickly identify and resolve blockages. DIY attempts often waste time and worsen problems. Professional intervention is both fastest and most effective for serious blockages.'
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
