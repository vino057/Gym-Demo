
import { motion } from 'framer-motion';
import { ArrowUpRight, Dumbbell, Flame, HeartPulse, Target, Activity, Trophy } from 'lucide-react';
import '../styles/programs.css';

const programs = [
  {
    number: '01',
    title: 'STRENGTH TRAINING',
    category: 'BUILD YOUR POWER',
    description: 'Develop strength, improve performance and build a solid foundation with structured resistance training.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85',
    icon: <Dumbbell size={24} />
  },
  {
    number: '02',
    title: 'WEIGHT LOSS',
    category: 'TRANSFORM YOURSELF',
    description: 'Combine effective workouts and consistent training habits to support your fitness goals.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=85',
    icon: <Flame size={24} />
  },
  {
    number: '03',
    title: 'MUSCLE BUILDING',
    category: 'BUILD YOUR PHYSIQUE',
    description: 'Focus on progressive resistance training to develop muscle and improve overall strength.',
    image: 'https://images.unsplash.com/photo-1534368270820-9de3d8053204?auto=format&fit=crop&w=900&q=85',
    icon: <Trophy size={24} />
  },
  {
    number: '04',
    title: 'PERSONAL TRAINING',
    category: 'TRAIN WITH GUIDANCE',
    description: 'Get structured guidance and workout support based on your individual fitness goals.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85',
    icon: <Target size={24} />
  },
  {
    number: '05',
    title: 'CARDIO & ENDURANCE',
    category: 'PUSH YOUR LIMITS',
    description: 'Improve cardiovascular fitness, stamina and endurance through challenging sessions.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85',
    icon: <HeartPulse size={24} />
  },
  {
    number: '06',
    title: 'FUNCTIONAL FITNESS',
    category: 'MOVE BETTER',
    description: 'Improve balance, mobility, coordination and everyday movement with functional exercises.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85',
    icon: <Activity size={24} />
  }
];

function Programs() {
  return (
    <main className="programs-page">

      <section className="programs-hero">
        <div className="programs-hero-content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">WHAT WE OFFER</p>
            <h1>TRAIN HARDER.<br /><span>GET STRONGER.</span></h1>
            <p>
              Find the right training program for your goals.
              Every session is another opportunity to improve.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="programs-list section-padding">
        <div className="container">

          <div className="programs-heading">
            <div>
              <p className="section-label">OUR TRAINING PROGRAMS</p>
              <h2>CHOOSE YOUR <span>CHALLENGE.</span></h2>
            </div>
            <p>
              Different goals. Different training styles.
              One commitment to becoming stronger.
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program, index) => (
              <motion.article
                className="program-card"
                key={program.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
              >
                <div className="program-image">
                  <img src={program.image} alt={program.title} loading="lazy" />
                  <span className="program-number">{program.number}</span>
                  <div className="program-icon">{program.icon}</div>
                </div>

                <div className="program-card-content">
                  <p className="program-category">{program.category}</p>
                  <h3>{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  <a href="/contact" className="program-link">
                    ENQUIRE NOW <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      <section className="programs-cta">
        <div className="container">
          <p className="section-label">YOUR NEXT CHAPTER STARTS NOW</p>
          <h2>READY TO <span>LEVEL UP?</span></h2>
          <p>Choose your goal. Commit to the process. Start today.</p>
          <a href="/membership" className="primary-btn">
            EXPLORE MEMBERSHIP <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default Programs;
