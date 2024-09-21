import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

// Import images (assuming you're keeping the same images)
import Hero1 from '../../../public/assets/HeroImg/Final.png';
import Beta from '../../../public/assets/Beta/Beta1.png';
import img1 from '../../../public/assets/UpComingFeatures/Image1.png';
import img2 from '../../../public/assets/UpComingFeatures/Image2.png';
import img3 from '../../../public/assets/UpComingFeatures/Image3.png';
import img4 from '../../../public/assets/UpComingFeatures/Image4.png';
import img5 from '../../../public/assets/UpComingFeatures/Image5.png';

const milestones = [
  { image: img1, title: "Feature 1", description: "Brief description of Feature 1" },
  { image: img2, title: "Feature 2", description: "Brief description of Feature 2" },
  { image: img3, title: "Feature 3", description: "Brief description of Feature 3" },
  { image: img4, title: "Feature 4", description: "Brief description of Feature 4" },
  { image: img5, title: "Feature 5", description: "Brief description of Feature 5" },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Home - CUPE';
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Placement</span> Insights
          </h1>
          <h2 className={styles.heroSubtitle}>Experience Every Interview</h2>
          <p className={styles.heroText}>
            Navigate college interviews and technical rounds with confidence. Our user-friendly platform provides comprehensive access to upcoming campus interviews, empowering students with invaluable insights.
          </p>
          <Link to="/Experience" className={styles.ctaButton}>
            Get Insight
          </Link>
        </div>
        <div className={styles.heroImage}>
          <img src={Hero1} alt="Hero illustration" className={styles.floatingImage} />
        </div>
      </section>

      <section className={styles.beta}>
        <h2 className={styles.sectionTitle}>Join Our Beta</h2>
        <img src={Beta} alt="Beta version features" className={styles.betaImage} />
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Upcoming Features</h2>
        <div className={styles.milestoneMap}>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.milestone}>
              <div className={styles.milestoneContent}>
                <img src={milestone.image} alt={milestone.title} />
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
              {index < milestones.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 CUPE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;