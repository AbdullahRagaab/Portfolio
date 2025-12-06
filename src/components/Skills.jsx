import { motion } from 'framer-motion';

const Skills = () => {

const skills = [

  // New Frontend Skills
  { name: 'HTML5', icon: '📄', color: 'bg-orange-600' },
  { name: 'CSS3', icon: '🎨', color: 'bg-blue-600' },
  { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-500' },
  { name: 'TypeScript', icon: '🔷', color: 'bg-blue-500' },
  { name: 'React', icon: '⚛️', color: 'bg-cyan-500' },
  { name: 'React Query', icon: '🔺', color: 'bg-red-500' },
  { name: 'Redux', icon: '🟣', color: 'bg-purple-600' },
  { name: 'Zustand', icon: '🐻', color: 'bg-yellow-600' },
  { name: 'Supabase', icon: '🟩', color: 'bg-emerald-600' },
  { name: 'Tailwind CSS', icon: '💨', color: 'bg-teal-500' },
  { name: 'Flexbox', icon: '📦', color: 'bg-indigo-500' },
  { name: 'Grid', icon: '🔲', color: 'bg-purple-500' },
  { name: 'Styled Components', icon: '💅', color: 'bg-pink-500' },

  // Backend Skills
  { name: 'Node.js', icon: '🟢', color: 'bg-green-600' },
  { name: 'MongoDB', icon: '🍃', color: 'bg-green-500' },
  { name: 'Express.js', icon: '🚏', color: 'bg-gray-700' },
];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-primary-600 dark:text-primary-400">Skills</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-4 text-center">{skill.icon}</div>
            <h3 className="text-center font-semibold text-lg text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

