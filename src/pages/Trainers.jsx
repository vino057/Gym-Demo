
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Dumbbell } from 'lucide-react';
import '../styles/trainers.css';

const trainers = [
  {
    name: 'ALEX MORGAN',
    role: 'HEAD FITNESS COACH',
    experience: '8+ YEARS EXPERIENCE',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'JAMES CARTER',
    role: 'STRENGTH TRAINER',
    experience: '6+ YEARS EXPERIENCE',
    specialty: 'Muscle Building',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'SARAH WILLIAMS',
    role: 'FITNESS COACH',
    experience: '5+ YEARS EXPERIENCE',
    specialty: 'Weight Management',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'DAVID MILLER',
    role: 'PERSONAL TRAINER',
    experience: '7+ YEARS EXPERIENCE',
    specialty: 'Functional Fitness',
    image: 'https://images.unsplash.com/photo-1534368270820-9de3d8053204?auto=format&fit=crop&w=800&q=85'
  }
];

function Trainers() {
  return (
    <main className="trainers-page">

      <section className="trainers-hero">
        <div className="container trainers-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">MEET THE TEAM</p>
            <h1>TRAIN WITH THE <span>BEST.</span></h1>
            <p>
              Great results start with the right guidance.
              Meet the team that will help you push your limits.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="trainers-section section-padding">
        <div className="container">

          <div className="trainers-heading">
            <div>
              <p className="section-label">OUR PROFESSIONAL TEAM</p>
              <h2>MEET YOUR <span>TRAINERS.</span></h2>
            </div>
            <p>
              Experienced guidance, focused training and
              motivation to help you move forward.
            </p>
          </div>

          <div className="trainers-grid">
            {trainers.map((trainer, index) => (
              <motion.article
                className="trainer-card"
                key={trainer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="trainer-image">
                  <img src={trainer.image} alt={trainer.name} loading="lazy" />
                  <span className="trainer-experience">
                    <Award size={14} /> {trainer.experience}
                  </span>
                  <a href="/contact" className="trainer-arrow" aria-label={`Enquire about ${trainer.name}`}>
                    <ArrowUpRight size={22} />
                  </a>
                </div>

                <div className="trainer-info">
                  <p className="trainer-role">{trainer.role}</p>
                  <h3>{trainer.name}</h3>
                  <div className="trainer-specialty">
                    <Dumbbell size={15} />
                    <span>{trainer.specialty}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      <section className="trainers-cta">
        <div className="container">
          <p className="section-label">YOUR GOALS. OUR GUIDANCE.</p>
          <h2>LET'S BUILD YOUR <span>STRONGER SELF.</span></h2>
          <p>Take the first step towards a better version of yourself.</p>
          <a href="/contact" className="primary-btn">
            CONTACT OUR TEAM <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default Trainers;
