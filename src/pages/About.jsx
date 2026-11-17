
import { motion } from 'framer-motion';
import { Dumbbell, Target, HeartPulse, Trophy, CheckCircle2 } from 'lucide-react';
import '../styles/about.css';

function About() {
  const features = [
    {
      icon: <Dumbbell size={25} />,
      title: 'Modern Equipment',
      description: 'Train with quality equipment designed for effective workouts.'
    },
    {
      icon: <Target size={25} />,
      title: 'Personalized Training',
      description: 'Follow structured workout plans that support your fitness goals.'
    },
    {
      icon: <HeartPulse size={25} />,
      title: 'Healthy Lifestyle',
      description: 'Build sustainable fitness habits and improve your overall wellbeing.'
    },
    {
      icon: <Trophy size={25} />,
      title: 'Goal Focused',
      description: 'Stay motivated, track your progress and celebrate every achievement.'
    }
  ];

  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <motion.div
          className="container about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">OUR STORY</p>
          <h1>MORE THAN A <span>GYM.</span></h1>
          <p>
            A place where discipline meets determination and
            every workout takes you one step closer to your goals.
          </p>
        </motion.div>
      </section>

      <section className="about-intro section-padding">
        <div className="container about-intro-grid">

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
              alt="Modern gym interior"
            />
            <div className="about-image-label">
              <span>IRON CORE</span>
              <p>BUILT THROUGH DISCIPLINE</p>
            </div>
          </motion.div>

          <motion.div
            className="about-intro-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">WHO WE ARE</p>
            <h2>YOUR FITNESS JOURNEY <span>STARTS HERE.</span></h2>

            <p>
              IRON CORE FITNESS is built around one simple belief:
              progress comes from consistency, commitment and hard work.
            </p>

            <p>
              Whether you are beginning your fitness journey or
              looking to improve your performance, our goal is to
              provide an environment where you can train with confidence.
            </p>

            <div className="about-check-list">
              <p><CheckCircle2 /> Supportive training environment</p>
              <p><CheckCircle2 /> Structured fitness programs</p>
              <p><CheckCircle2 /> Focus on strength and wellbeing</p>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="about-features section-padding">
        <div className="container">
          <div className="about-section-heading">
            <p className="section-label">WHY CHOOSE US</p>
            <h2>TRAIN WITH <span>PURPOSE.</span></h2>
            <p>Everything you need to keep moving forward.</p>
          </div>

          <div className="about-feature-grid">
            {features.map((feature, index) => (
              <motion.div
                className="about-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="about-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-quote">
        <div className="container">
          <p>“THE ONLY BAD WORKOUT IS THE ONE THAT DIDN'T HAPPEN.”</p>
          <span>SHOW UP. PUT IN THE WORK. GET STRONGER.</span>
        </div>
      </section>

    </main>
  );
}

export default About;
