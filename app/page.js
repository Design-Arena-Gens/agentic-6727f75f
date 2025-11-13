'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: (
      <div>
        <h2 style={{ color: '#2c5282', marginBottom: '20px' }}>About Me</h2>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
              Welcome! I'm Sarah Mitchell, a dedicated high school English teacher with over 10 years of experience inspiring students to discover the power of literature and effective communication.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
              My teaching philosophy centers on creating an inclusive, engaging classroom environment where every student feels valued and challenged to reach their full potential. I believe in the transformative power of storytelling and critical thinking.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              I hold a Master's degree in Education from Boston University and a Bachelor's degree in English Literature from UCLA. I'm passionate about integrating technology into the classroom and fostering a love of reading in the digital age.
            </p>
          </div>
          <div style={{ flex: '0 0 250px', background: '#f7fafc', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, color: '#2c5282' }}>Quick Facts</h3>
            <ul style={{ lineHeight: '2', paddingLeft: '20px' }}>
              <li>10+ years teaching experience</li>
              <li>Master's in Education</li>
              <li>AP English Literature certified</li>
              <li>Department Chair (2020-Present)</li>
              <li>Published educational articles</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    experience: (
      <div>
        <h2 style={{ color: '#2c5282', marginBottom: '30px' }}>Teaching Experience</h2>

        <div style={{ marginBottom: '30px', padding: '20px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #3182ce' }}>
          <h3 style={{ marginTop: 0, color: '#2c5282' }}>English Department Chair & AP Literature Teacher</h3>
          <p style={{ color: '#718096', marginBottom: '10px' }}><strong>Lincoln High School</strong> | 2018 - Present</p>
          <ul style={{ lineHeight: '1.8' }}>
            <li>Lead a team of 12 English teachers, coordinating curriculum development and assessment strategies</li>
            <li>Teach AP English Literature with a 92% pass rate on AP exams</li>
            <li>Developed and implemented a school-wide reading initiative that increased student literacy scores by 23%</li>
            <li>Mentor new teachers and conduct professional development workshops</li>
          </ul>
        </div>

        <div style={{ marginBottom: '30px', padding: '20px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #3182ce' }}>
          <h3 style={{ marginTop: 0, color: '#2c5282' }}>High School English Teacher</h3>
          <p style={{ color: '#718096', marginBottom: '10px' }}><strong>Roosevelt Academy</strong> | 2014 - 2018</p>
          <ul style={{ lineHeight: '1.8' }}>
            <li>Taught English 9-11, including honors sections</li>
            <li>Created differentiated lesson plans to accommodate diverse learning styles</li>
            <li>Sponsored the Creative Writing Club and Literary Magazine</li>
            <li>Integrated technology tools including Google Classroom and educational apps</li>
          </ul>
        </div>

        <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #3182ce' }}>
          <h3 style={{ marginTop: 0, color: '#2c5282' }}>English Teacher</h3>
          <p style={{ color: '#718096', marginBottom: '10px' }}><strong>Madison Middle School</strong> | 2012 - 2014</p>
          <ul style={{ lineHeight: '1.8' }}>
            <li>Taught 8th grade English Language Arts</li>
            <li>Developed cross-curricular projects with History department</li>
            <li>Implemented reading intervention strategies for struggling students</li>
          </ul>
        </div>
      </div>
    ),
    education: (
      <div>
        <h2 style={{ color: '#2c5282', marginBottom: '30px' }}>Education & Certifications</h2>

        <div style={{ marginBottom: '30px', padding: '25px', background: '#f7fafc', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0, color: '#2c5282' }}>Master of Education (M.Ed.)</h3>
          <p style={{ color: '#718096', marginBottom: '10px' }}><strong>Boston University</strong> | 2016</p>
          <p style={{ lineHeight: '1.8' }}>Specialization in Curriculum and Instruction with a focus on literacy education. Thesis: "Digital Literacy in the Modern Classroom: Bridging Traditional and Contemporary Reading Practices"</p>
        </div>

        <div style={{ marginBottom: '30px', padding: '25px', background: '#f7fafc', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0, color: '#2c5282' }}>Bachelor of Arts in English Literature</h3>
          <p style={{ color: '#718096', marginBottom: '10px' }}><strong>University of California, Los Angeles (UCLA)</strong> | 2012</p>
          <p style={{ lineHeight: '1.8' }}>Minor in Creative Writing. Dean's List all four years. Member of Sigma Tau Delta, International English Honor Society.</p>
        </div>

        <div style={{ padding: '25px', background: '#f7fafc', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0, color: '#2c5282' }}>Certifications</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>Teaching License:</strong> California Secondary English (Grades 7-12)</li>
            <li><strong>AP Certification:</strong> College Board AP English Literature & Composition</li>
            <li><strong>ESL Endorsement:</strong> English as a Second Language</li>
            <li><strong>Google Certified Educator</strong> Level 2</li>
            <li><strong>AVID Certification:</strong> Advancement Via Individual Determination</li>
          </ul>
        </div>
      </div>
    ),
    achievements: (
      <div>
        <h2 style={{ color: '#2c5282', marginBottom: '30px' }}>Achievements & Recognition</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '20px', background: '#edf2f7', borderRadius: '8px', borderTop: '3px solid #3182ce' }}>
            <h3 style={{ color: '#2c5282', marginTop: 0 }}>🏆 Teacher of the Year</h3>
            <p style={{ color: '#718096', marginBottom: '10px' }}>Lincoln High School | 2022</p>
            <p style={{ lineHeight: '1.8' }}>Recognized for outstanding dedication to student success and innovative teaching methods.</p>
          </div>

          <div style={{ padding: '20px', background: '#edf2f7', borderRadius: '8px', borderTop: '3px solid #3182ce' }}>
            <h3 style={{ color: '#2c5282', marginTop: 0 }}>📚 Excellence in Literacy Award</h3>
            <p style={{ color: '#718096', marginBottom: '10px' }}>State Education Board | 2021</p>
            <p style={{ lineHeight: '1.8' }}>Awarded for implementing programs that significantly improved student reading comprehension.</p>
          </div>

          <div style={{ padding: '20px', background: '#edf2f7', borderRadius: '8px', borderTop: '3px solid #3182ce' }}>
            <h3 style={{ color: '#2c5282', marginTop: 0 }}>✍️ Published Author</h3>
            <p style={{ color: '#718096', marginBottom: '10px' }}>Multiple Publications | 2019-2023</p>
            <p style={{ lineHeight: '1.8' }}>Articles published in "English Journal" and "Teaching English in the 21st Century".</p>
          </div>

          <div style={{ padding: '20px', background: '#edf2f7', borderRadius: '8px', borderTop: '3px solid #3182ce' }}>
            <h3 style={{ color: '#2c5282', marginTop: 0 }}>🎓 National Board Certification</h3>
            <p style={{ color: '#718096', marginBottom: '10px' }}>NBCT | 2020</p>
            <p style={{ lineHeight: '1.8' }}>Achieved National Board Certification in Early Adolescence through Young Adulthood English Language Arts.</p>
          </div>

          <div style={{ padding: '20px', background: '#edf2f7', borderRadius: '8px', borderTop: '3px solid #3182ce' }}>
            <h3 style={{ color: '#2c5282', marginTop: 0 }}>💡 Innovation Grant</h3>
            <p style={{ color: '#718096', marginBottom: '10px' }}>District Technology Grant | 2019</p>
            <p style={{ lineHeight: '1.8' }}>Received $15,000 grant to implement digital reading platforms in the classroom.</p>
          </div>

          <div style={{ padding: '20px', background: '#edf2f7', borderRadius: '8px', borderTop: '3px solid #3182ce' }}>
            <h3 style={{ color: '#2c5282', marginTop: 0 }}>🌟 Student Choice Award</h3>
            <p style={{ color: '#718096', marginBottom: '10px' }}>Annually | 2018-2023</p>
            <p style={{ lineHeight: '1.8' }}>Voted "Favorite Teacher" by students for five consecutive years.</p>
          </div>
        </div>
      </div>
    ),
    philosophy: (
      <div>
        <h2 style={{ color: '#2c5282', marginBottom: '30px' }}>Teaching Philosophy</h2>

        <div style={{ padding: '30px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '12px', marginBottom: '30px' }}>
          <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: '1.8', margin: 0, textAlign: 'center' }}>
            "Every student has a unique story to tell and deserves the tools to tell it with confidence and clarity."
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#2c5282' }}>Core Beliefs</h3>
          <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
            <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#2c5282', marginTop: 0 }}>Student-Centered Learning</h4>
              <p style={{ lineHeight: '1.8' }}>
                I believe that students learn best when they are active participants in their education. My classroom is a space where student voices are heard, valued, and celebrated. I design lessons that connect literature to students' lives, making reading and writing meaningful and relevant.
              </p>
            </div>

            <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#2c5282', marginTop: 0 }}>Differentiated Instruction</h4>
              <p style={{ lineHeight: '1.8' }}>
                Every student learns differently. I employ various teaching strategies to accommodate diverse learning styles, abilities, and backgrounds. Whether through visual aids, collaborative projects, or independent study, I ensure that all students can access and engage with the material.
              </p>
            </div>

            <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#2c5282', marginTop: 0 }}>Critical Thinking & Analysis</h4>
              <p style={{ lineHeight: '1.8' }}>
                Reading is more than decoding words—it's about understanding context, questioning assumptions, and forming independent opinions. I teach students to think critically about texts, to analyze author's choices, and to articulate their interpretations with evidence and clarity.
              </p>
            </div>

            <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#2c5282', marginTop: 0 }}>Growth Mindset</h4>
              <p style={{ lineHeight: '1.8' }}>
                Mistakes are opportunities for learning. I foster a classroom culture where students feel safe to take risks, ask questions, and learn from their errors. I emphasize effort and improvement over perfection, helping students develop resilience and confidence.
              </p>
            </div>

            <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#2c5282', marginTop: 0 }}>Technology Integration</h4>
              <p style={{ lineHeight: '1.8' }}>
                In our digital age, literacy extends beyond traditional texts. I integrate technology thoughtfully, teaching students to navigate digital resources, evaluate online information critically, and use digital tools to enhance their writing and communication skills.
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: '25px', background: '#fffbeb', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
          <h3 style={{ color: '#92400e', marginTop: 0 }}>My Commitment</h3>
          <p style={{ lineHeight: '1.8', color: '#78350f' }}>
            I am committed to creating an inclusive, supportive classroom where all students—regardless of their background, ability, or prior experiences with English—can thrive. I work tirelessly to build relationships with my students, understanding their individual needs and helping them discover their potential as readers, writers, and thinkers.
          </p>
        </div>
      </div>
    ),
    contact: (
      <div>
        <h2 style={{ color: '#2c5282', marginBottom: '30px' }}>Get in Touch</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div>
            <h3 style={{ color: '#2c5282' }}>Contact Information</h3>
            <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px', lineHeight: '2' }}>
              <p><strong>📧 Email:</strong> sarah.mitchell@lincolnhs.edu</p>
              <p><strong>📞 Phone:</strong> (555) 123-4567</p>
              <p><strong>🏫 School:</strong> Lincoln High School</p>
              <p><strong>📍 Location:</strong> Springfield, CA 94102</p>
              <p><strong>🕐 Office Hours:</strong> Mon-Fri, 3:00-4:00 PM</p>
            </div>

            <div style={{ marginTop: '20px', padding: '20px', background: '#edf2f7', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0, color: '#2c5282' }}>Connect Online</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#" style={{ color: '#3182ce', textDecoration: 'none' }}>🔗 LinkedIn Profile</a>
                <a href="#" style={{ color: '#3182ce', textDecoration: 'none' }}>🐦 Twitter @TeacherSarahM</a>
                <a href="#" style={{ color: '#3182ce', textDecoration: 'none' }}>📚 Classroom Blog</a>
                <a href="#" style={{ color: '#3182ce', textDecoration: 'none' }}>📖 Goodreads Profile</a>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#2c5282' }}>Professional Inquiries</h3>
            <div style={{ padding: '20px', background: '#f0fdf4', borderRadius: '8px', lineHeight: '1.8' }}>
              <p style={{ marginTop: 0 }}>
                I welcome inquiries regarding:
              </p>
              <ul style={{ lineHeight: '2' }}>
                <li>Professional development workshops</li>
                <li>Curriculum consultation</li>
                <li>Speaking engagements</li>
                <li>Collaborative projects</li>
                <li>Teacher mentorship programs</li>
                <li>Educational article contributions</li>
              </ul>
            </div>

            <div style={{ marginTop: '20px', padding: '20px', background: '#fef3c7', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0, color: '#92400e' }}>Parents & Students</h4>
              <p style={{ lineHeight: '1.8', color: '#78350f' }}>
                Parents and students are encouraged to reach out via email or schedule a meeting during office hours. I typically respond to emails within 24 hours during the school week.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '30px', padding: '25px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h3 style={{ marginTop: 0 }}>Let's Collaborate!</h3>
          <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
            Whether you're a fellow educator, parent, or student, I'd love to hear from you. Together, we can inspire the next generation of readers and writers.
          </p>
        </div>
      </div>
    ),
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f7fafc, #edf2f7)' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px 20px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '3em', fontWeight: 'bold' }}>Sarah Mitchell</h1>
          <p style={{ margin: '0', fontSize: '1.3em', opacity: '0.95' }}>High School English Teacher | Department Chair | Educational Leader</p>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        background: 'white',
        padding: '0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              style={{
                padding: '20px 25px',
                border: 'none',
                background: activeSection === section ? '#667eea' : 'transparent',
                color: activeSection === section ? 'white' : '#4a5568',
                cursor: 'pointer',
                fontSize: '1em',
                fontWeight: activeSection === section ? 'bold' : 'normal',
                transition: 'all 0.3s',
                textTransform: 'capitalize',
                borderBottom: activeSection === section ? '3px solid #764ba2' : '3px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== section) {
                  e.target.style.background = '#edf2f7';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        minHeight: '500px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          animation: 'fadeIn 0.5s'
        }}>
          {sections[activeSection]}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#2d3748',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: '0 0 10px 0' }}>© 2024 Sarah Mitchell. All rights reserved.</p>
          <p style={{ margin: '0', opacity: '0.8', fontSize: '0.9em' }}>
            Inspiring students to discover the power of literature and effective communication.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
