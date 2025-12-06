import { motion } from 'framer-motion';
import profilePic from '../../public/abdullahPic.jpg';


const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Abdullah_Ragab_CV.pdf';
    link.download = 'Abdullah_Ragab_CV.pdf';
    link.click();
  };
  
  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-container pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Hi, I'm{' '}
            <span className="text-primary-600 dark:text-primary-400">
              Abdullah
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-600 dark:text-gray-400"
          >
            Web Developer (MERN)
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Hi, I’m a MERN Stack Web Developer specializing in building modern, responsive, and user-friendly web applications. I turn ideas into functional digital solutions using MongoDB, Express, React, and Node.js, with clean, efficient code and attention to detail. I’m passionate about creating seamless user experiences and scalable applications that make an impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              onClick={handleHireMe}
              className="btn-primary"
            >
              Hire Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="btn-secondary"
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400 shadow-2xl"
            >
              <img src={profilePic}   alt="Abdullah Ragab" className="w-full h-full object-cover"/>
            </motion.div>
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary-300 dark:border-primary-600 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-primary-400 dark:border-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

