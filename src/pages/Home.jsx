import { motion } from 'framer-motion';
import {
  ArrowRight,
  Dumbbell,
  HeartPulse,
  Flame,
  CheckCircle2
} from 'lucide-react';

import '../styles/home.css';

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build strength and muscle with professional equipment.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800'
  },
  {
    icon: HeartPulse,
    title: 'Cardio Fitness',
    description: 'Improve stamina and overall cardiovascular fitness.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800'
  },
  {
    icon: Flame,
    title: 'Weight Loss',
    description: 'Follow structured workouts to achieve your fitness goals.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800'
  }
];

function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-label">
              WELCOME TO IRON CORE FITNESS
            </p>

            <h1>
              BUILD YOUR
              <br />
              <span>STRONGER</span>
              <br />
              SELF.
            </h1>

            <p className="hero-description">
              Transform your body. Strengthen your mind.
              Discover what you are truly capable of.
            </p>

            <div className="hero-buttons">
              <a href="/membership" className="primary-btn">
                START YOUR JOURNEY <ArrowRight size={18} />
              </a>

              <a href="/programs" className="outline-btn">
                EXPLORE PROGRAMS
              </a>
            </div>

            <div className="hero-trust">
              <CheckCircle2 size={18} />
              PROFESSIONAL TRAINERS
              <span>•</span>
              PREMIUM EQUIPMENT
            </div>
          </motion.div>
        </div>

        <div className="hero-side-text">PUSH YOUR LIMITS</div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {[
            ['500+', 'Happy Members'],
            ['15+', 'Expert Trainers'],
            ['10+', 'Years Experience'],
            ['25+', 'Training Programs']
          ].map(([number, label]) => (
            <div className="stat-item" key={label}>
              <h2>{number}</h2>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section section-padding" id="about">
        <div className="container about-grid">

          <div className="about-images">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000"
              alt="Modern gym interior"
            />

            <div className="experience-box">
              <h2>10+</h2>
              <p>YEARS OF EXCELLENCE</p>
            </div>
          </div>

          <div className="about-content">
            <p className="section-label">ABOUT OUR GYM</p>

            <h2 className="section-heading">
              MORE THAN A
              <br />
              <span className="gold-text">WORKOUT.</span>
            </h2>

            <p>
              At Iron Core Fitness, we believe fitness is a lifestyle.
              Our goal is to create an environment where everyone can
              challenge themselves, build confidence and achieve their goals.
            </p>

            <div className="about-points">
              {[
                'Premium fitness equipment',
                'Certified personal trainers',
                'Personalized training programs',
                'Supportive fitness community'
              ].map(item => (
                <div key={item}>
                  <CheckCircle2 size={19} />
                  {item}
                </div>
              ))}
            </div>

            <a href="/about" className="primary-btn">
              DISCOVER MORE <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="program-section section-padding" id="programs">
        <div className="container">

          <div className="section-top">
            <div>
              <p className="section-label">WHAT WE OFFER</p>
              <h2 className="section-heading">
                OUR TRAINING <span className="gold-text">PROGRAMS</span>
              </h2>
            </div>

            <a href="/programs" className="outline-btn">
              ALL PROGRAMS <ArrowRight size={17} />
            </a>
          </div>

          <div className="program-grid">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.article
                  className="program-card"
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="program-image">
                    <img src={program.image} alt={program.title} />
                  </div>

                  <div className="program-content">
                    <div className="program-icon">
                      <Icon size={28} />
                    </div>

                    <h3>{program.title}</h3>
                    <p>{program.description}</p>

                    <a href="/programs">
                      EXPLORE PROGRAM <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="section-label">YOUR TIME IS NOW</p>

          <h2>
            DON'T WISH FOR IT.
            <br />
            <span className="gold-text">WORK FOR IT.</span>
          </h2>

          <p>
            Your transformation starts with one decision.
            Take the first step today.
          </p>

          <a href="/membership" className="primary-btn">
            JOIN IRON CORE <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;