import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center md:text-left">
            I'm a passionate <strong className="text-primary-600 dark:text-primary-400">MERN Stack Developer</strong> with a strong focus on frontend development using React. 
            I have extensive experience building modern, responsive web applications that deliver exceptional user experiences.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center md:text-left">
            I studied <strong className="text-primary-600 dark:text-primary-400">Full-Stack Web Development (MERN)</strong> at <strong className="text-primary-600 dark:text-primary-400">Route Academy</strong> for 9 months, where I gained strong hands-on experience and practical skills across both frontend and backend technologies. Throughout my training, I worked on multiple real projects that helped me build a solid understanding of React, Node.js, Express, and MongoDB. This journey has allowed me to develop efficient, scalable applications and sharpen my problem-solving abilities as a MERN stack developer.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
Outside of coding, I am committed to continuous growth as a developer. I regularly explore new technologies, work on side projects to sharpen my skills, and stay updated with the latest trends in the MERN ecosystem. I’m passionate about improving my craft and always strive to deliver clean, scalable, and well-structured solutions in every project I build.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

