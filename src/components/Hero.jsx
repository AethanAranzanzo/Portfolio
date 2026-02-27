import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiPhone, FiDownload } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="section bg-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Aethan Aranzanzo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-4"
          >
            Computer Engineer | Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
          >
            Magna Cum Laude graduate specializing in full-stack web development, 
            software development, and UI/UX design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-outline inline-flex items-center gap-2">
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              download="Aethan_Aranzanzo_Resume.pdf"
              className="btn-outline inline-flex items-center gap-2"
            >
              <FiDownload /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/AethanAranzanzo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent text-2xl transition-colors duration-300"
            >
              <FiGithub />
            </a>
            <a
              href="mailto:aranzanzo.aethan@gmail.com"
              className="text-gray-400 hover:text-accent text-2xl transition-colors duration-300"
            >
              <FiMail />
            </a>
            <a
              href="tel:+639928203847"
              className="text-gray-400 hover:text-accent text-2xl transition-colors duration-300"
            >
              <FiPhone />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero