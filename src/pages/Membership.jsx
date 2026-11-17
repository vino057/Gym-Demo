
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Dumbbell, Crown, Zap } from 'lucide-react';
import '../styles/membership.css';

const plans = [
  {
    name: 'BASIC',
    price: '999',
    duration: 'PER MONTH',
    description: 'A great starting point for your fitness journey.',
    icon: <Dumbbell size={25} />,
    features: [
      'Gym access',
      'Standard equipment access',
      'Locker facility',
      'Basic workout guidance'
    ],
    popular: false
  },
  {
    name: 'STANDARD',
    price: '1,499',
    duration: 'PER MONTH',
    description: 'More support to help you reach your goals.',
    icon: <Zap size={25} />,
    features: [
      'Everything in Basic',
      'Group training sessions',
      'Personal workout plan',
      'Progress tracking',
      'Priority equipment access'
    ],
    popular: true
  },
  {
    name: 'PREMIUM',
    price: '2,499',
    duration: 'PER MONTH',
    description: 'A more personalized fitness experience.',
    icon: <Crown size={25} />,
    features: [
      'Everything in Standard',
      'Personal training sessions',
      'Customized fitness guidance',
      'Nutrition guidance',
      'Priority trainer support'
    ],
    popular: false
  }
];

function Membership() {
  return (
    <main className="membership-page">

      <section className="membership-hero">
        <div className="container membership-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">INVEST IN YOURSELF</p>
            <h1>CHOOSE YOUR <span>MEMBERSHIP.</span></h1>
            <p>
              Find a membership that matches your goals.
              Start building a stronger and healthier lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="membership-plans section-padding">
        <div className="container">

          <div className="membership-heading">
            <p className="section-label">SIMPLE MEMBERSHIP OPTIONS</p>
            <h2>FIND YOUR <span>FIT.</span></h2>
            <p>Choose your plan and take the next step.</p>
          </div>

          <div className="membership-grid">
            {plans.map((plan, index) => (
              <motion.article
                className={`membership-card ${plan.popular ? 'popular-plan' : ''}`}
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                {plan.popular && (
                  <div className="popular-label">MOST POPULAR</div>
                )}

                <div className="membership-icon">{plan.icon}</div>

                <p className="membership-plan-name">{plan.name} PLAN</p>
                <p className="membership-description">{plan.description}</p>

                <div className="membership-price">
                  <span>₹</span>{plan.price}
                </div>
                <p className="membership-duration">{plan.duration}</p>

                <div className="membership-divider"></div>

                <h3>PLAN FEATURES</h3>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={17} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="membership-btn">
                  JOIN THIS PLAN <ArrowUpRight size={17} />
                </a>
              </motion.article>
            ))}
          </div>

          <p className="membership-note">
            Contact our team to confirm availability, pricing and membership terms.
          </p>

        </div>
      </section>

      <section className="membership-cta">
        <div className="container">
          <p className="section-label">YOUR FITNESS JOURNEY STARTS HERE</p>
          <h2>DON'T WAIT FOR <span>MONDAY.</span></h2>
          <p>Take the first step towards your fitness goals today.</p>
          <a href="/contact" className="primary-btn">
            CONTACT US <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default Membership;
