
import React from 'react';
import './Process.css';

function Process() {
  const steps = [
    {
      number: '01',
      title: 'Contact Us Anytime',
      subtitle: 'Immediate Response & Dispatch',
      description: 'Your emergency is our priority. The moment you contact us, our time-critical response protocol activates immediately.',
      icon: '📞',
      details: [
        {
          heading: '24/7 Live Answer',
          content: 'Real human operators answer your call day or night, no automated systems. We understand emergencies require immediate human attention and empathy.'
        },
        {
          heading: 'Detailed Assessment',
          content: 'Our trained operators ask targeted questions to understand your situation: What fixtures are affected? Is water backing up? Any visible sewage? This information helps us prepare the right equipment.'
        },
        {
          heading: 'Instant Technician Dispatch',
          content: 'While you\'re still on the phone, we\'re already dispatching the nearest available technician with GPS routing to your location. No waiting for callbacks or scheduling—immediate action.'
        },
        {
          heading: 'Transparent Time Estimate',
          content: 'We provide realistic arrival time estimates based on current location and traffic conditions. You\'ll know exactly when to expect help, and we update you if anything changes.'
        },
        {
          heading: 'Emergency Preparation Guidance',
          content: 'Our operators provide immediate guidance while you wait: how to stop water flow, what to avoid touching, safety precautions, and damage prevention steps you can take right now.'
        }
      ]
    },
    {
      number: '02',
      title: 'Rapid Response Arrival',
      subtitle: 'Fully Equipped & Ready',
      description: 'Our technicians arrive prepared for any scenario, eliminating the need for return trips or equipment delays.',
      icon: '🚗',
      details: [
        {
          heading: 'Average 60-90 Minute Response',
          content: 'Our strategically positioned service vehicles across multiple locations ensure the fastest possible arrival. Priority routing and real-time GPS tracking optimize every second of transit time.'
        },
        {
          heading: 'Fully Stocked Service Vehicles',
          content: 'Every truck carries comprehensive equipment: multiple hydro jetters, various drain snakes, camera inspection systems, specialized tools, safety gear, and cleaning supplies. We arrive ready for complete service, not just diagnosis.'
        },
        {
          heading: 'Professional Introduction',
          content: 'Our uniformed technicians identify themselves with company credentials, explain the service process, and take time to understand your specific concerns before beginning any work.'
        },
        {
          heading: 'Property Protection Protocol',
          content: 'Before starting, we lay protective coverings on floors and work areas, ensuring your home stays clean throughout the service. Our respect for your property is paramount.'
        },
        {
          heading: 'Safety Assessment',
          content: 'Immediate evaluation of safety hazards: electrical risks near standing water, sewage exposure areas, structural concerns, and ventilation needs. Your family\'s safety comes first.'
        }
      ]
    },
    {
      number: '03',
      title: 'Complete Diagnosis & Assessment',
      subtitle: 'Advanced Technology Meets Expertise',
      description: 'We use cutting-edge diagnostic tools combined with decades of experience to accurately identify every aspect of your drain problem.',
      icon: '🔍',
      details: [
        {
          heading: 'Visual Inspection Protocol',
          content: 'Systematic examination of all accessible drain points, fixture connections, cleanout access, and potential problem areas. We check for obvious issues, water damage, and signs of underlying problems.'
        },
        {
          heading: 'HD Camera Inspection',
          content: 'Our high-definition waterproof cameras travel through your entire drain system, revealing blockage locations, pipe condition, cracks, root intrusions, scale buildup, and structural issues. Real-time video shows you exactly what we\'re seeing.'
        },
        {
          heading: 'System Testing',
          content: 'We test water flow patterns, drainage rates, and fixture interactions to understand how your entire system is functioning. This reveals problems not immediately obvious and helps prevent future issues.'
        },
        {
          heading: 'Root Cause Identification',
          content: 'Beyond just finding the blockage, we identify why it occurred: improper waste disposal, pipe deterioration, tree root invasion, installation defects, or system design issues. Understanding the cause prevents recurrence.'
        },
        {
          heading: 'Documentation & Explanation',
          content: 'We provide recorded camera footage, detailed findings, and clear explanations in terms you\'ll understand. You\'ll see exactly what\'s wrong, why it happened, and what needs to be done.'
        }
      ]
    },
    {
      number: '04',
      title: 'Transparent Quote & Options',
      subtitle: 'No Surprises, Full Disclosure',
      description: 'Before any work begins, you receive comprehensive pricing information and understand all your options clearly.',
      icon: '💵',
      details: [
        {
          heading: 'Detailed Written Estimate',
          content: 'Itemized pricing breakdown showing labor, equipment usage, materials, and any additional services. Every cost is explained clearly with no vague line items or hidden fees.'
        },
        {
          heading: 'Multiple Solution Options',
          content: 'We present different approaches with pros, cons, costs, and expected outcomes for each: quick fix vs. comprehensive solution, snaking vs. hydro jetting, immediate service vs. scheduled maintenance. You choose what fits your needs and budget.'
        },
        {
          heading: 'Long-term Value Discussion',
          content: 'Honest conversation about which solution provides the best long-term value. Sometimes more thorough initial service prevents expensive emergency returns. We help you make informed decisions.'
        },
        {
          heading: 'Warranty & Guarantee Terms',
          content: 'Clear explanation of what\'s covered, for how long, and under what conditions. Our warranties are straightforward with no fine print surprises.'
        },
        {
          heading: 'Approval Before Service',
          content: 'We never begin work without your explicit approval after you\'ve had time to review pricing, ask questions, and feel completely comfortable with the plan. Your informed consent is mandatory.'
        }
      ]
    },
    {
      number: '05',
      title: 'Expert Service Execution',
      subtitle: 'Precision, Power, & Professionalism',
      description: 'Our technicians execute the approved solution with expertise, efficiency, and attention to detail that defines professional service.',
      icon: '🔧',
      details: [
        {
          heading: 'Optimal Method Selection',
          content: 'Based on diagnosis, we select the most effective clearing method: high-pressure hydro jetting for complete cleaning, mechanical snaking for targeted blockages, or specialized techniques for unique situations. The right tool for the right job.'
        },
        {
          heading: 'Hydro Jetting Excellence',
          content: 'When hydro jetting is used, our technicians precisely control water pressure (up to 4000 PSI) based on pipe material, age, and condition. Multiple nozzle types handle different blockage types and pipe diameters, ensuring thorough cleaning without damage.'
        },
        {
          heading: 'Mechanical Snaking Precision',
          content: 'Professional-grade snakes with interchangeable cutting heads designed for specific materials: hair-cutting blades, root-cutting saw teeth, grease-breaking augers. Proper technique prevents pipe damage while effectively breaking through blockages.'
        },
        {
          heading: 'Real-Time Problem Solving',
          content: 'If unexpected issues arise during service, we pause, assess, explain the situation, and get your approval for any additional work. No surprise charges for legitimate complications beyond the original diagnosis.'
        },
        {
          heading: 'Environmental Responsibility',
          content: 'Proper waste disposal, minimal water usage, eco-friendly methods when possible, and responsible treatment of any sewage exposure. Professional service includes environmental consideration.'
        }
      ]
    },
    {
      number: '06',
      title: 'Verification, Testing & Cleanup',
      subtitle: 'Guaranteed Complete Resolution',
      description: 'We don\'t consider the job done until we\'ve verified complete clearing, ensured proper function, and left your property spotless.',
      icon: '✓',
      details: [
        {
          heading: 'Post-Service Camera Inspection',
          content: 'After clearing, we run the camera through again to verify complete blockage removal, confirm pipe cleanliness, and ensure no damage occurred during service. You see the before and after difference clearly.'
        },
        {
          heading: 'Live Flow Testing',
          content: 'Comprehensive testing of all affected fixtures: running water at full pressure, flushing toilets multiple times, testing drainage rates, checking for proper venting, and ensuring no backups occur. Everything must function perfectly.'
        },
        {
          heading: 'Multi-Fixture Verification',
          content: 'Testing interactions between fixtures to ensure main line is completely clear: running one fixture while others drain, checking for gurgling or slow drainage, verifying proper venting signals. Complete system verification.'
        },
        {
          heading: 'Professional Cleanup',
          content: 'Meticulous work area cleaning: removing all equipment, disposing of waste properly, cleaning any spills, sanitizing work areas exposed to sewage, and removing all protective coverings. Your home should look like we were never there except for the perfectly functioning drains.'
        },
        {
          heading: 'Final Walkthrough',
          content: 'Together we verify that everything meets your satisfaction: drains flowing perfectly, no residual odors, work area cleaned, all questions answered. You sign off only when you\'re completely satisfied.'
        }
      ]
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          Our streamlined 6-step process ensures fast, effective, and hassle-free drain cleaning every time. Experience professional service from start to finish.
        </p>
        
        <div className="process-stack-container">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="process-step-stack"
              style={{
                ['--step-index' as any]: index,
                ['--total-steps' as any]: steps.length
              }}
            >
              <div className="step-stack-card">
                <div className="step-stack-header">
                  <div className="step-number-badge">{step.number}</div>
                  <div className="step-icon-large">{step.icon}</div>
                  <div className="step-header-content">
                    <h3 className="step-title-large">{step.title}</h3>
                    <p className="step-subtitle">{step.subtitle}</p>
                  </div>
                </div>
                
                <div className="step-stack-body">
                  <p className="step-description-main">{step.description}</p>
                  
                  <div className="step-details-grid">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="detail-item">
                        <div className="detail-heading">
                          <span className="detail-bullet">▸</span>
                          <h4>{detail.heading}</h4>
                        </div>
                        <p className="detail-content">{detail.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="process-cta">
          <h3>Ready to Experience Our Professional Service?</h3>
          <p>Join thousands of satisfied customers who trust us with their drain emergencies. Expert technicians are standing by 24/7 to provide the exceptional service you deserve.</p>
          <a href="#locations" className="btn btn-accent">
            Find Your Local Service Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Process;
