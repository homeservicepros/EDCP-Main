


import React from 'react';
import './ContentSections.css';

function ContentSections() {
  
  const warningSigns = [
    {
      number: '01',
      icon: '🚫',
      title: 'Complete Drain Blockage',
      subtitle: 'Zero Water Flow Emergency',
      description: 'When water completely stops draining from your fixtures, immediate professional intervention is critical to prevent overflow and damage.',
      details: [
        'Water not draining at all from sink, tub, or toilet',
        'Standing water remaining in fixtures after hours',
        'Attempts to plunge produce no results',
        'Risk of overflow and water damage increasing by the minute'
      ]
    },
    {
      number: '02',
      icon: '💧',
      title: 'Water Backing Up',
      subtitle: 'Cross-Fixture Drainage Issues',
      description: 'Water appearing in unexpected places when using other fixtures indicates a serious main line blockage requiring immediate attention.',
      details: [
        'Water coming up in shower when toilet flushes',
        'Sink backing up when washing machine drains',
        'Multiple fixtures showing simultaneous problems',
        'Indicates main sewer line blockage affecting entire system'
      ]
    },
    {
      number: '03',
      icon: '🦠',
      title: 'Sewage Exposure',
      subtitle: 'Critical Health Hazard',
      description: 'Raw sewage backup poses immediate health risks and requires urgent professional clearing with proper safety protocols.',
      details: [
        'Raw sewage visible in drains or toilets',
        'Dark water with solid waste materials',
        'Immediate health hazard requiring urgent response',
        'Risk of contamination spreading throughout home'
      ]
    },
    {
      number: '04',
      icon: '👃',
      title: 'Persistent Sewage Odors',
      subtitle: 'Hidden Blockage Warning',
      description: 'Strong foul odors throughout your home indicate developing blockages or venting issues that will worsen without professional clearing.',
      details: [
        'Strong foul smells throughout home',
        'Odors worsening when water is used',
        'Smell originating from multiple drains',
        'Sign of sewage gas buildup or partial blockage'
      ]
    },
    {
      number: '05',
      icon: '🔊',
      title: 'Unusual Drain Sounds',
      subtitle: 'Air Trap Indicators',
      description: 'Gurgling and bubbling sounds from drains indicate air trapped by blockages—an early warning of impending complete failure.',
      details: [
        'Loud gurgling from toilets or drains',
        'Bubbling sounds when using fixtures',
        'Indicates air trapped by blockages',
        'Early warning sign of developing main line issues'
      ]
    },
    {
      number: '06',
      icon: '🏠',
      title: 'Basement or Floor Flooding',
      subtitle: 'Property Damage Emergency',
      description: 'Water pooling in your basement or from floor drains demands immediate action to prevent extensive structural damage and mold.',
      details: [
        'Water pooling on basement floor',
        'Floor drain overflowing',
        'Active flooding from drain systems',
        'Foundation and structural damage risk'
      ]
    }
  ];

  return (
    <section id="content" className="content-sections">
      <div className="container">
        
        {/* Emergency Drain Cleaning Introduction */}
        <div className="intro-block">
          <div className="intro-content">
            <div className="intro-text-side">
              <h2 className="intro-title">Fast Action When Seconds Count</h2>
              <div className="intro-highlight">
                <span className="highlight-icon">🚨</span>
                <span className="highlight-text">Emergency Response Available 24/7</span>
              </div>
              <p className="intro-description">
                When a drain emergency strikes, every moment matters. Water backing up into your home, sewage overflows, or multiple drains failing simultaneously aren't just inconveniences—they're urgent threats to your property, health, and peace of mind.
              </p>
              <p className="intro-description">
                Emergency drain cleaning provides immediate, professional intervention for severe blockages, backups, and overflows that demand instant attention. Unlike routine maintenance that can be scheduled at your convenience, emergency services operate 24/7 because drain disasters don't wait for business hours.
              </p>
              <div className="intro-benefits-redesign">
                <div className="benefit-card-modern glass-card">
                  <div className="benefit-icon-modern">⚡</div>
                  <div className="benefit-content-modern">
                    <h4>Immediate Response</h4>
                    <p>Technicians dispatched within minutes to handle your emergency</p>
                  </div>
                </div>
                <div className="benefit-card-modern glass-card">
                  <div className="benefit-icon-modern">🛡️</div>
                  <div className="benefit-content-modern">
                    <h4>Damage Prevention</h4>
                    <p>Stop water damage before it spreads throughout your property</p>
                  </div>
                </div>
                <div className="benefit-card-modern glass-card">
                  <div className="benefit-icon-modern">💪</div>
                  <div className="benefit-content-modern">
                    <h4>Professional Equipment</h4>
                    <p>Advanced tools for complete clearing and long-lasting results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-visual-side">
              <div className="visual-card glass-card">
                <h3>Why Fast Action Changes Everything</h3>
                <div className="timeline-points">
                  <div className="timeline-point">
                    <span className="time-label">First 15 Minutes</span>
                    <p>Water begins spreading, contaminating surfaces and materials</p>
                  </div>
                  <div className="timeline-point">
                    <span className="time-label">First Hour</span>
                    <p>Significant property damage, structural threats emerge</p>
                  </div>
                  <div className="timeline-point">
                    <span className="time-label">Beyond 2 Hours</span>
                    <p>Extensive damage, potential health hazards, costly repairs</p>
                  </div>
                </div>
                <div className="visual-cta">
                  <a href="tel:8003271709" className="btn btn-accent">
                    <span>📞</span>
                    Call Emergency Line Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding Block */}
        <div className="understanding-block">
          <h2 className="block-title">Understanding Emergency Drain Situations</h2>
          <p className="block-subtitle">
            Not all drain problems are emergencies, but knowing the difference can save you from disaster.
          </p>
          <div className="emergency-categories">
            <div className="category-card glass-card urgent-card">
              <div className="category-header">
                <span className="category-icon">🚨</span>
                <h3>True Emergencies</h3>
                <span className="urgency-badge severe">Call Immediately</span>
              </div>
              <ul className="category-list">
                <li><strong>Sewage Backup:</strong> Raw sewage coming up through drains or toilets—immediate health hazard</li>
                <li><strong>Multiple Drain Failure:</strong> Several drains backing up simultaneously—indicates main line blockage</li>
                <li><strong>Flooding from Drains:</strong> Water actively overflowing causing property damage</li>
                <li><strong>Complete Blockage:</strong> Zero drainage with water standing in fixtures</li>
                <li><strong>Basement Floor Drain Overflow:</strong> Water backing up into living spaces</li>
              </ul>
            </div>
            <div className="category-card glass-card warning-card">
              <div className="category-header">
                <span className="category-icon">⚠️</span>
                <h3>Urgent Situations</h3>
                <span className="urgency-badge high">Schedule Today</span>
              </div>
              <ul className="category-list">
                <li><strong>Slow Multiple Drains:</strong> Multiple fixtures draining slowly—early warning of main line issues</li>
                <li><strong>Gurgling Sounds:</strong> Air trapped in pipes indicating developing blockages</li>
                <li><strong>Sewage Odors:</strong> Persistent foul smells suggesting partial blockage or venting issues</li>
                <li><strong>Recurring Clogs:</strong> Same drain repeatedly blocking despite clearing attempts</li>
                <li><strong>Water Backing Up:</strong> Water appearing in unexpected places when using fixtures</li>
              </ul>
            </div>
          </div>
          <div className="difference-comparison">
            <div className="comparison-side emergency-side">
              <h3>Emergency Service</h3>
              <div className="comparison-features">
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <span>24/7 immediate response</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <span>Critical situations only</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <span>Premium pricing</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <span>Prevents extensive damage</span>
                </div>
              </div>
            </div>
            <div className="comparison-divider">
              <span className="divider-text">VS</span>
            </div>
            <div className="comparison-side routine-side">
              <h3>Routine Service</h3>
              <div className="comparison-features">
                <div className="feature-point">
                  <span className="point-icon">✓</span>
                  <span>Scheduled appointments</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">✓</span>
                  <span>Preventive maintenance</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">✓</span>
                  <span>Standard pricing</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">✓</span>
                  <span>Business hours service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When to Call Block - Redesigned with Stacked Cards */}
        <div className="when-call-block">
          <h2 className="section-title-left">Don't Wait—Call When You See These Warning Signs</h2>
          <p className="when-description">
            Recognizing emergency warning signs and acting quickly can mean the difference between a quick fix and extensive property damage. Here's what demands immediate professional attention.
          </p>
          
          {/* Warning Signs - Stacked Card Style */}
          <div className="warning-signs-stack-container">
            {warningSigns.map((sign, index) => (
              <React.Fragment key={index}>
                <div 
                  className="warning-sign-stack"
                  style={{
                    '--sign-index': index,
                    '--total-signs': warningSigns.length
                  } as React.CSSProperties}
                >
                  <div className="sign-stack-card">
                    <div className="sign-stack-header">
                      <div className="sign-number-badge">{sign.number}</div>
                      <div className="sign-icon-large">{sign.icon}</div>
                      <div className="sign-header-content">
                        <h3 className="sign-title-large">{sign.title}</h3>
                        <p className="sign-subtitle">{sign.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="sign-stack-body">
                      <p className="sign-description-main">{sign.description}</p>
                      
                      <div className="sign-details-list">
                        {sign.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="sign-detail-item">
                            <span className="detail-bullet">▸</span>
                            <span className="detail-text">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insert Action Panel after 6th warning sign (index 5) */}
                {index === 5 && (
                  <div className="action-panel-inserted glass-card">
                    <h3>Take Action Now</h3>
                    <p>Don't wait for drain emergencies to worsen. Our expert technicians are standing by 24/7 to provide immediate assistance and prevent costly damage.</p>
                    <div className="emergency-contact">
                      <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <div className="contact-details">
                          <span className="contact-label">Emergency Hotline</span>
                          <a href="tel:8003271709" className="contact-value">(800) 327-1709</a>
                        </div>
                      </div>
                      <div className="contact-item">
                        <span className="contact-icon">⏱️</span>
                        <div className="contact-details">
                          <span className="contact-label">Average Response</span>
                          <span className="contact-value">60-90 Minutes</span>
                        </div>
                      </div>
                    </div>
                    <div className="response-guarantee">
                      <div className="guarantee-badge">
                        <span className="badge-icon">✓</span>
                        <span className="badge-text">Rapid Response Guaranteed</span>
                      </div>
                      <p>Our technicians are strategically positioned throughout all service areas for the fastest possible emergency response.</p>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Affected Drains Block */}
        <div className="affected-drains-block">
          <h2 className="block-title">Every Drain Type We Service in Emergencies</h2>
          <p className="block-subtitle">
            Our emergency drain cleaning experts handle all residential drain types with specialized equipment and techniques.
          </p>
          <div className="drains-showcase">
            <div className="drain-feature-card glass-card">
              <div className="drain-icon-large">🚽</div>
              <h3>Toilet & Bathroom Drains</h3>
              <p className="drain-overview">
                From simple toilet clogs to complex bathroom drain systems, we handle all bathroom drainage emergencies with speed and expertise.
              </p>
              <div className="drain-specifics">
                <h4>Common Issues We Resolve:</h4>
                <ul>
                  <li>Toilet overflows and complete blockages</li>
                  <li>Sink drains clogged with hair and soap</li>
                  <li>Shower and bathtub slow draining</li>
                  <li>Multiple bathroom fixtures backing up</li>
                </ul>
              </div>
            </div>
            <div className="drain-feature-card glass-card">
              <div className="drain-icon-large">🍽️</div>
              <h3>Kitchen & Utility Drains</h3>
              <p className="drain-overview">
                Kitchen drains face unique challenges from grease, food particles, and heavy daily use. We clear them completely and effectively.
              </p>
              <div className="drain-specifics">
                <h4>Specialized Treatment For:</h4>
                <ul>
                  <li>Kitchen sink drain blockages from grease and food</li>
                  <li>Garbage disposal clogs and jams</li>
                  <li>Dishwasher drain line issues</li>
                  <li>Laundry room and utility sink drains</li>
                </ul>
              </div>
            </div>
            <div className="drain-feature-card glass-card">
              <div className="drain-icon-large">🏚️</div>
              <h3>Basement & Floor Drains</h3>
              <p className="drain-overview">
                Basement and floor drain backups can cause significant flooding and foundation damage. We respond immediately to protect your home.
              </p>
              <div className="drain-specifics">
                <h4>Emergency Response For:</h4>
                <ul>
                  <li>Basement floor drain overflows</li>
                  <li>Sump pump drain line blockages</li>
                  <li>Garage and utility floor drains</li>
                  <li>Crawl space drainage issues</li>
                </ul>
              </div>
            </div>
            <div className="drain-feature-card glass-card">
              <div className="drain-icon-large">🔧</div>
              <h3>Main Sewer Lines</h3>
              <p className="drain-overview">
                Main sewer line emergencies affect your entire home's drainage system. Our advanced equipment clears even the toughest blockages fast.
              </p>
              <div className="drain-specifics">
                <h4>Complete Solutions For:</h4>
                <ul>
                  <li>Whole-house drain system backups</li>
                  <li>Tree root intrusions in sewer lines</li>
                  <li>Main line clogs causing multiple fixture issues</li>
                  <li>Sewer line collapses and major blockages</li>
                </ul>
              </div>
            </div>
            <div className="drain-feature-card glass-card">
              <div className="drain-icon-large">🌳</div>
              <h3>Outdoor & Yard Drains</h3>
              <p className="drain-overview">
                Outdoor drainage emergencies can lead to landscape flooding and property damage. We clear all exterior drain systems efficiently.
              </p>
              <div className="drain-specifics">
                <h4>Expert Clearing Of:</h4>
                <ul>
                  <li>Storm drain and catch basin blockages</li>
                  <li>French drain system failures</li>
                  <li>Yard drainage and landscape drains</li>
                  <li>Outdoor sink and hose bib drains</li>
                </ul>
              </div>
            </div>
            <div className="drain-feature-card glass-card">
              <div className="drain-icon-large">🏡</div>
              <h3>Whole-House Systems</h3>
              <p className="drain-overview">
                When multiple drains fail simultaneously, it indicates a systemic issue requiring comprehensive emergency intervention.
              </p>
              <div className="drain-specifics">
                <h4>Full System Service:</h4>
                <ul>
                  <li>Multiple drain simultaneous failures</li>
                  <li>Complete drainage system inspections</li>
                  <li>Main line to fixture line clearing</li>
                  <li>Comprehensive hydro jetting services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Methods Block */}
        <div className="methods-block">
          <div className="container">
            <h2 className="block-title">Emergency Drain Cleaning Methods</h2>
            <p className="block-subtitle">
              Professional emergency drain cleaning employs advanced techniques and equipment for fast, thorough, and lasting results.
            </p>
            <div className="methods-grid">
              
              <div className="method-showcase">
                <div className="method-visual">
                  <div className="visual-icon">💧</div>
                  <span className="visual-badge">Most Effective</span>
                </div>
                <div className="method-content">
                  <h3>High-Pressure Hydro Jetting</h3>
                  <p className="method-intro">
                    The most powerful and thorough drain cleaning method available. Hydro jetting uses ultra-high-pressure water (up to 4000 PSI) to completely obliterate blockages and scour pipe walls clean.
                  </p>
                  <div className="method-details">
                    <div className="detail-section">
                      <h4>How It Works</h4>
                      <p>A specialized nozzle inserted into your drain line shoots high-pressure water in multiple directions, cutting through blockages, scouring pipe walls, and flushing debris completely out of the system. The process is like a pressure washer for your pipes.</p>
                    </div>
                    <div className="detail-section">
                      <h4>What It Removes</h4>
                      <div className="removes-grid">
                        <span className="remove-tag">Grease Buildup</span>
                        <span className="remove-tag">Tree Roots</span>
                        <span className="remove-tag">Scale Deposits</span>
                        <span className="remove-tag">Soap Scum</span>
                        <span className="remove-tag">Sludge</span>
                        <span className="remove-tag">Mineral Buildup</span>
                      </div>
                    </div>
                    <div className="detail-section">
                      <h4>Key Advantages</h4>
                      <ul className="advantages-list">
                        <li>Most thorough cleaning—removes 100% of buildup</li>
                        <li>Clears entire pipe diameter, not just a hole through the clog</li>
                        <li>Environmentally safe—no chemicals or harsh additives</li>
                        <li>Long-lasting results prevent recurring clogs</li>
                        <li>Safe for most pipe types when performed by professionals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="method-showcase">
                <div className="method-visual">
                  <div className="visual-icon">🐍</div>
                  <span className="visual-badge">Fast Action</span>
                </div>
                <div className="method-content">
                  <h3>Professional Drain Snaking</h3>
                  <p className="method-intro">
                    Mechanical drain snaking uses specialized augers and rooter equipment to break through and clear stubborn blockages. This tried-and-true method provides quick relief for immediate emergencies.
                  </p>
                  <div className="method-details">
                    <div className="detail-section">
                      <h4>The Process</h4>
                      <p>A flexible metal cable with a cutting head is inserted into the drain and rotated at high speed. The cutting head breaks up blockages, allowing debris to be pulled out or flushed through the system. Different head attachments handle various blockage types.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Best Applications</h4>
                      <ul className="advantages-list">
                        <li>Solid obstructions requiring physical breaking</li>
                        <li>Localized clogs in specific drain sections</li>
                        <li>Toilet paper and organic waste blockages</li>
                        <li>Hair clogs in bathroom drains</li>
                        <li>Quick emergency clearing before more thorough cleaning</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Professional Equipment</h4>
                      <p>Professional snaking equipment far exceeds consumer-grade tools, with cables reaching 100+ feet, powerful motors, and specialized cutting heads designed for specific blockage types and pipe materials.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="method-showcase">
                <div className="method-visual">
                  <div className="visual-icon">📹</div>
                  <span className="visual-badge">Precision Diagnosis</span>
                </div>
                <div className="method-content">
                  <h3>Video Camera Inspection</h3>
                  <p className="method-intro">
                    Advanced video camera technology allows professionals to see inside your drain lines, identifying the exact location, type, and severity of blockages without guesswork or invasive investigation.
                  </p>
                  <div className="method-details">
                    <div className="detail-section">
                      <h4>Technology Benefits</h4>
                      <p>High-definition waterproof cameras attached to flexible cables travel through your drain system, transmitting real-time video. This reveals not just blockages, but also pipe condition, damage, and potential future problems.</p>
                    </div>
                    <div className="detail-section">
                      <h4>What Cameras Reveal</h4>
                      <div className="inspection-findings">
                        <div className="finding-item">
                          <span className="finding-icon">📍</span>
                          <span>Exact blockage location and depth</span>
                        </div>
                        <div className="finding-item">
                          <span className="finding-icon">🌳</span>
                          <span>Tree root intrusions and extent</span>
                        </div>
                        <div className="finding-item">
                          <span className="finding-icon">💔</span>
                          <span>Pipe cracks, breaks, and deterioration</span>
                        </div>
                        <div className="finding-item">
                          <span className="finding-icon">⚠️</span>
                          <span>Misaligned or collapsed pipe sections</span>
                        </div>
                        <div className="finding-item">
                          <span className="finding-icon">🧱</span>
                          <span>Scale buildup and corrosion levels</span>
                        </div>
                      </div>
                    </div>
                    <div className="detail-section">
                      <h4>Why It Matters for Emergencies</h4>
                      <p>Camera inspection ensures the right clearing method is used immediately, preventing wasted time and potential pipe damage from inappropriate techniques. It also provides visual proof of the problem and documentation of the solution.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Professional vs DIY Block */}
        <div className="professional-vs-diy-block">
          <h2 className="block-title">Why Professional Service Outperforms DIY</h2>
          <p className="block-subtitle">
            Emergency drain situations demand professional expertise, equipment, and safety protocols that DIY methods simply cannot provide.
          </p>
          
          <div className="dangers-section">
            <h3 className="dangers-title">Dangers of DIY Emergency Drain Clearing</h3>
            <div className="dangers-grid">
              <div className="danger-card glass-card">
                <span className="danger-icon">☠️</span>
                <h4>Health Hazards</h4>
                <p>Exposure to raw sewage, harmful bacteria, and pathogens can cause serious illness. Professionals use proper protective equipment and sanitization protocols.</p>
              </div>
              <div className="danger-card glass-card">
                <span className="danger-icon">💥</span>
                <h4>Pipe Damage</h4>
                <p>Improper use of tools, excessive force, or wrong techniques can crack pipes, damage joints, or cause leaks requiring costly repairs.</p>
              </div>
              <div className="danger-card glass-card">
                <span className="danger-icon">🧪</span>
                <h4>Chemical Burns</h4>
                <p>Drain chemicals can cause severe skin burns, eye damage, and respiratory problems. They also damage pipes and harm septic systems.</p>
              </div>
              <div className="danger-card glass-card">
                <span className="danger-icon">⏰</span>
                <h4>Wasted Critical Time</h4>
                <p>Failed DIY attempts waste precious hours while water spreads, damage increases, and emergency costs escalate. Immediate professional help prevents this.</p>
              </div>
              <div className="danger-card glass-card">
                <span className="danger-icon">🔌</span>
                <h4>Electrical Risks</h4>
                <p>Water and electricity create deadly combinations. Standing water near outlets, appliances, or electrical panels poses electrocution hazards requiring professional assessment.</p>
              </div>
              <div className="danger-card glass-card">
                <span className="danger-icon">🏚️</span>
                <h4>Structural Damage</h4>
                <p>Delayed or improper handling allows water to compromise foundations, walls, and floors. Professionals prevent structural issues through rapid, effective clearing.</p>
              </div>
            </div>
          </div>

          <div className="comparison-detailed">
            <div className="comparison-column professional-column">
              <div className="column-header">
                <span className="column-icon">👨‍🔧</span>
                <h3>Professional Service</h3>
                <span className="column-badge recommended">Recommended</span>
              </div>
              <div className="comparison-items">
                <div className="comparison-item">
                  <span className="item-icon success">✓</span>
                  <div className="item-content">
                    <strong>Advanced Equipment</strong>
                    <p>Professional-grade hydro jetters, camera systems, and specialized tools that completely clear blockages.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon success">✓</span>
                  <div className="item-content">
                    <strong>Expert Diagnosis</strong>
                    <p>Years of experience and diagnostic technology identify root causes, not just symptoms.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon success">✓</span>
                  <div className="item-content">
                    <strong>Safety Protocols</strong>
                    <p>Proper protective equipment, sanitization procedures, and hazard management protect health and property.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon success">✓</span>
                  <div className="item-content">
                    <strong>Guaranteed Results</strong>
                    <p>Warranties on work, proper insurance coverage, and accountability for outcomes.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon success">✓</span>
                  <div className="item-content">
                    <strong>Prevents Future Issues</strong>
                    <p>Thorough cleaning and expert recommendations prevent recurring problems and extend system life.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon success">✓</span>
                  <div className="item-content">
                    <strong>Emergency Availability</strong>
                    <p>24/7 rapid response with fully equipped technicians ready for any emergency situation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="comparison-column diy-column">
              <div className="column-header">
                <span className="column-icon">🛠️</span>
                <h3>DIY Attempts</h3>
                <span className="column-badge warning">High Risk</span>
              </div>
              <div className="comparison-items">
                <div className="comparison-item">
                  <span className="item-icon danger">✗</span>
                  <div className="item-content">
                    <strong>Limited Tools</strong>
                    <p>Consumer-grade equipment lacks power and reach to properly clear serious blockages.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon danger">✗</span>
                  <div className="item-content">
                    <strong>Guesswork</strong>
                    <p>No way to see inside pipes or accurately diagnose problems—working blind often worsens issues.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon danger">✗</span>
                  <div className="item-content">
                    <strong>Health Exposure</strong>
                    <p>Lack of proper protective equipment risks exposure to sewage, bacteria, and harmful pathogens.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon danger">✗</span>
                  <div className="item-content">
                    <strong>No Guarantees</strong>
                    <p>If DIY fails or causes damage, you're responsible for all costs and consequences.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon danger">✗</span>
                  <div className="item-content">
                    <strong>Temporary Fixes</strong>
                    <p>Often only creates a hole through blockages rather than thorough cleaning, leading to quick recurrence.</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="item-icon danger">✗</span>
                  <div className="item-content">
                    <strong>Delayed Resolution</strong>
                    <p>Hours or days of failed attempts while damage spreads and emergency worsens, ultimately costing more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="real-cost-analysis glass-card">
            <h3>The Real Cost Comparison</h3>
            <div className="cost-comparison-grid">
              <div className="cost-scenario">
                <h4>Professional Emergency Service</h4>
                <div className="cost-breakdown">
                  <div className="cost-line">
                    Initial emergency service: <span>$350-$600</span>
                  </div>
                  <div className="cost-line">
                    Complete problem resolution: <span>✓</span>
                  </div>
                  <div className="cost-line">
                    Prevented water damage: <span>$0</span>
                  </div>
                  <div className="cost-line">
                    Warranty coverage: <span>30-90 days</span>
                  </div>
                  <div className="cost-line">
                    Time to resolution: <span>1-3 hours</span>
                  </div>
                  <div className="cost-total success">
                    Total: <span>$350-$600</span>
                  </div>
                </div>
              </div>
              <div className="cost-scenario">
                <h4>DIY Attempts + Consequences</h4>
                <div className="cost-breakdown">
                  <div className="cost-line">
                    DIY tools and chemicals: <span>$50-$150</span>
                  </div>
                  <div className="cost-line">
                    Failed attempts (wasted time): <span>8-24 hours</span>
                  </div>
                  <div className="cost-line">
                    Water damage from delay: <span>$1,000-$5,000+</span>
                  </div>
                  <div className="cost-line">
                    Emergency professional service: <span>$400-$800</span>
                  </div>
                  <div className="cost-line">
                    Pipe damage repairs: <span>$200-$1,000</span>
                  </div>
                  <div className="cost-total">
                    Total: <span>$1,650-$6,950+</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="cost-conclusion">
              Professional emergency service typically costs less than the consequences of delayed or improper DIY attempts. The peace of mind and guaranteed results make professional service the smart financial choice.
            </p>
          </div>
        </div>

        {/* Prevention Block */}
        <div className="prevention-block">
          <div className="container">
            <h2 className="block-title">Preventing Future Drain Emergencies</h2>
            <p className="block-subtitle">
              Smart maintenance and proper habits dramatically reduce emergency drain situations and extend your plumbing system's life.
            </p>
            
            <div className="prevention-importance glass-card">
              <div className="importance-icon">🛡️</div>
              <h3>Why Prevention Matters</h3>
              <p>
                Most drain emergencies are preventable through regular maintenance and proper usage. Investing in prevention costs a fraction of emergency service and protects your home from water damage, health hazards, and costly repairs. Professional preventive maintenance identifies developing problems before they become emergencies.
              </p>
              <div className="prevention-stats">
                <div className="stat-point">
                  <span className="stat-number">85%</span>
                  <span className="stat-label">Emergencies Prevented</span>
                </div>
                <div className="stat-point">
                  <span className="stat-number">$1,200</span>
                  <span className="stat-label">Average Savings</span>
                </div>
                <div className="stat-point">
                  <span className="stat-number">5x</span>
                  <span className="stat-label">Extended System Life</span>
                </div>
              </div>
            </div>

            <div className="strategy-category">
              <h3>Daily Best Practices</h3>
              <div className="practices-grid">
                <div className="practice-item glass-card">
                  <span className="practice-icon">🍳</span>
                  <h4>Kitchen Drain Care</h4>
                  <ul>
                    <li>Never pour grease or cooking oil down drains</li>
                    <li>Scrape plates into trash before washing</li>
                    <li>Use sink strainers to catch food particles</li>
                    <li>Run hot water after each use</li>
                    <li>Avoid fibrous foods in disposals</li>
                  </ul>
                </div>
                <div className="practice-item glass-card">
                  <span className="practice-icon">🚿</span>
                  <h4>Bathroom Protection</h4>
                  <ul>
                    <li>Install hair catchers in all drains</li>
                    <li>Remove and clean drain covers weekly</li>
                    <li>Don't flush anything except toilet paper</li>
                    <li>Avoid excessive bath products buildup</li>
                    <li>Clean stoppers and overflow drains regularly</li>
                  </ul>
                </div>
                <div className="practice-item glass-card">
                  <span className="practice-icon">🚫</span>
                  <h4>What Never Goes Down</h4>
                  <ul>
                    <li>Grease, fats, and cooking oils</li>
                    <li>Coffee grounds and fibrous foods</li>
                    <li>Flushable wipes (they're not actually flushable)</li>
                    <li>Feminine products and cotton swabs</li>
                    <li>Hair, dental floss, and medications</li>
                  </ul>
                </div>
                <div className="practice-item glass-card">
                  <span className="practice-icon">💧</span>
                  <h4>Water Usage Tips</h4>
                  <ul>
                    <li>Run cold water with garbage disposal</li>
                    <li>Flush drains with hot water weekly</li>
                    <li>Use full pressure when rinsing drains</li>
                    <li>Space out heavy water usage</li>
                    <li>Address slow drains immediately</li>
                  </ul>
                </div>
                <div className="practice-item glass-card">
                  <span className="practice-icon">🧼</span>
                  <h4>Cleaning Practices</h4>
                  <ul>
                    <li>Use enzyme-based drain cleaners monthly</li>
                    <li>Avoid harsh chemical drain cleaners</li>
                    <li>Clean overflow drains and covers</li>
                    <li>Remove soap scum buildup regularly</li>
                    <li>Sanitize drain areas to prevent odors</li>
                  </ul>
                </div>
                <div className="practice-item glass-card">
                  <span className="practice-icon">🔍</span>
                  <h4>Monitoring & Detection</h4>
                  <ul>
                    <li>Watch for slow drainage development</li>
                    <li>Notice unusual sounds or odors</li>
                    <li>Check for water backups between fixtures</li>
                    <li>Monitor outdoor drains after rain</li>
                    <li>Inspect visible pipes for leaks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="maintenance-schedule">
              <h3>Professional Maintenance Schedule</h3>
              <div className="schedule-timeline">
                <div className="schedule-item">
                  <div className="schedule-frequency">Monthly</div>
                  <div className="schedule-content">
                    <h4>Enzyme Treatment</h4>
                    <p>Use enzymatic drain cleaners in all drains to break down organic buildup naturally without damaging pipes.</p>
                  </div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-frequency">Every 6 Months</div>
                  <div className="schedule-content">
                    <h4>Drain Inspection</h4>
                    <p>Professional visual inspection of all drains, testing flow rates, and identifying early warning signs of developing problems.</p>
                  </div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-frequency">Annually</div>
                  <div className="schedule-content">
                    <h4>Professional Cleaning</h4>
                    <p>Complete drain system cleaning with hydro jetting or thorough snaking to remove accumulated buildup and prevent emergencies.</p>
                  </div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-frequency">Every 2-3 Years</div>
                  <div className="schedule-content">
                    <h4>Camera Inspection</h4>
                    <p>Video camera inspection of main sewer lines and primary drains to identify hidden issues, pipe deterioration, and root intrusion.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="warning-signs-monitor glass-card">
              <h3>Warning Signs Requiring Professional Attention</h3>
              <p>Don't wait for full emergencies. Address these warning signs promptly to prevent serious problems:</p>
              <div className="signs-checklist">
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Drains taking longer to empty than usual</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Gurgling sounds from drains or toilets</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Frequent clogs in same drain location</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Multiple slow drains throughout home</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Sewage odors from drains</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Water backing up when using other fixtures</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Wet spots in yard near sewer line</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Toilets bubbling during drain usage</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Persistent fruit fly presence near drains</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Changes in toilet water level</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Visible sewage in cleanout access points</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Foundation cracks near plumbing lines</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Unusual wet patches on walls or ceilings</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Mold or mildew growth near fixtures</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Sink or tub water draining into another fixture</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Unexplained increase in water bills</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Rust-colored water in drains</span>
                </div>
                <div className="sign-check">
                  <span className="check-icon">⚠️</span>
                  <span>Persistent low water pressure issues</span>
                </div>
              </div>
              <p className="signs-note">
                Addressing these warning signs early prevents emergencies and saves significant money on repairs and damage restoration.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Factors Block */}
        <div className="cost-factors-block">
          <h2 className="block-title">Understanding Emergency Service Costs</h2>
          <p className="block-subtitle">
            Emergency drain cleaning costs vary based on multiple factors. Understanding pricing helps you make informed decisions and avoid surprises.
          </p>
          
          <div className="pricing-overview glass-card">
            <h3>What Influences Emergency Service Pricing</h3>
            <div className="factors-grid">
              <div className="factor-item">
                <div className="factor-icon">⏰</div>
                <h4>Time of Service</h4>
                <p>After-hours, weekends, and holidays typically carry premium rates due to on-call availability and overtime for technicians.</p>
              </div>
              <div className="factor-item">
                <div className="factor-icon">🎯</div>
                <h4>Blockage Severity</h4>
                <p>Simple clogs cost less than complex main line blockages requiring extensive work, specialized equipment, or multiple techniques.</p>
              </div>
              <div className="factor-item">
                <div className="factor-icon">📍</div>
                <h4>Location & Access</h4>
                <p>Drain accessibility and your property location affect pricing. Difficult access or distance from service base increase costs.</p>
              </div>
              <div className="factor-item">
                <div className="factor-icon">🔧</div>
                <h4>Method Required</h4>
                <p>Hydro jetting costs more than simple snaking due to equipment and expertise, but provides superior, long-lasting results.</p>
              </div>
              <div className="factor-item">
                <div className="factor-icon">🏚️</div>
                <h4>Property Type & Age</h4>
                <p>Older homes with aging pipes or multi-story buildings may require additional care, time, and specialized approaches.</p>
              </div>
              <div className="factor-item">
                <div className="factor-icon">📹</div>
                <h4>Diagnostic Services</h4>
                <p>Camera inspection adds to baseline cost but ensures accurate diagnosis and appropriate treatment, saving money long-term.</p>
              </div>
            </div>
          </div>

          <div className="price-ranges">
            <h3>Typical Emergency Service Price Ranges</h3>
            <div className="price-table">
              <div className="price-row">
                <span className="service-name">
                  <span className="service-icon">🚽</span>
                  <span>Basic Toilet/Sink Unclogging</span>
                </span>
                <span className="price-range">$150 - $300</span>
              </div>
              <div className="price-row">
                <span className="service-name">
                  <span className="service-icon">🐍</span>
                  <span>Professional Drain Snaking</span>
                </span>
                <span className="price-range">$200 - $450</span>
              </div>
              <div className="price-row">
                <span className="service-name">
                  <span className="service-icon">💧</span>
                  <span>Hydro Jetting Service</span>
                </span>
                <span className="price-range">$350 - $600</span>
              </div>
              <div className="price-row">
                <span className="service-name">
                  <span className="service-icon">📹</span>
                  <span>Camera Inspection</span>
                </span>
                <span className="price-range">$100 - $250</span>
              </div>
              <div className="price-row">
                <span className="service-name">
                  <span className="service-icon">🔧</span>
                  <span>Main Sewer Line Cleaning</span>
                </span>
                <span className="price-range">$400 - $800+</span>
              </div>
              <div className="price-row">
                <span className="service-name">
                  <span className="service-icon">🚨</span>
                  <span>After-Hours Emergency (Premium)</span>
                </span>
                <span className="price-range">1.5x - 2x Standard</span>
              </div>
            </div>
            <p className="price-note">
              *Prices vary by location, severity, and specific circumstances. All quotes provided upfront before work begins.
            </p>
          </div>

          <div className="value-factors glass-card">
            <h3>Getting the Best Value</h3>
            <div className="value-tips">
              <div className="value-tip">
                <span className="tip-icon">💡</span>
                <div className="tip-content">
                  <strong>Request Detailed Quotes</strong>
                  <p>Always ask for itemized pricing before service begins. Reputable companies provide clear, upfront estimates with no hidden fees.</p>
                </div>
              </div>
              <div className="value-tip">
                <span className="tip-icon">💡</span>
                <div className="tip-content">
                  <strong>Understand What's Included</strong>
                  <p>Clarify what the quoted price covers—travel time, diagnostic inspection, clearing attempt, cleanup, and any warranties or guarantees.</p>
                </div>
              </div>
              <div className="value-tip">
                <span className="tip-icon">💡</span>
                <div className="tip-content">
                  <strong>Consider Preventive Packages</strong>
                  <p>Many companies offer maintenance packages that reduce emergency costs and prevent future issues through regular professional cleaning.</p>
                </div>
              </div>
              <div className="value-tip">
                <span className="tip-icon">💡</span>
                <div className="tip-content">
                  <strong>Verify Insurance Coverage</strong>
                  <p>Ensure the company carries proper liability insurance and workers' compensation. This protects you from liability if accidents occur.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden-costs-warning glass-card">
            <h3>Watch Out for Hidden Costs</h3>
            <p>Protect yourself by asking these questions before hiring any emergency drain service:</p>
            <ul className="questions-list">
              <li>Are diagnostic fees included or separate?</li>
              <li>What happens if the first clearing attempt doesn't work?</li>
              <li>Are there travel or trip charges beyond the service fee?</li>
              <li>Do different clearing methods cost different amounts?</li>
              <li>Is there a minimum service charge regardless of time spent?</li>
              <li>Are materials and equipment usage included?</li>
              <li>What warranty or guarantee comes with the service?</li>
              <li>Are there additional charges for after-hours service?</li>
              <li>What if additional problems are discovered during service?</li>
            </ul>
            <p className="warning-note">
              Reputable companies answer all questions clearly and provide written estimates. Be wary of any service that's vague about pricing or pressures you to commit before explaining costs.
            </p>
          </div>
        </div>

        {/* Final CTA Block */}
        <div className="final-cta-block">
          <div className="cta-content glass-card">
            <h2>Don't Let Drain Emergencies Disrupt Your Life</h2>
            <p>Professional help is just a phone call away. Our expert technicians are standing by 24/7 with the equipment, experience, and commitment to solve your drain emergency fast.</p>
            <div className="cta-actions">
              <a href="tel:8003271709" className="btn btn-primary btn-large">
                <span>📞</span>
                Call (800) 327-1709 Now
              </a>
              <a href="#locations" className="btn btn-accent btn-large">
                <span>📍</span>
                Find Your Local Service
              </a>
            </div>
            <div className="cta-assurance">
              <div className="assurance-item">
                <span className="assurance-icon">✓</span>
                <span>Rapid Response Guaranteed</span>
              </div>
              <div className="assurance-item">
                <span className="assurance-icon">✓</span>
                <span>Upfront Pricing</span>
              </div>
              <div className="assurance-item">
                <span className="assurance-icon">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="assurance-item">
                <span className="assurance-icon">✓</span>
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContentSections;


