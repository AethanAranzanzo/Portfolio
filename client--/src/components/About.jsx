import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-tertiary rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Aethan Aranzanzo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<p class="text-gray-500 text-lg">Your Photo Here</p>'
                  }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a <span className="text-accent font-semibold">Magna Cum Laude</span> graduate 
                in Computer Engineering from Pamantasan ng Lungsod ng Maynila, with strong foundations 
                in full-stack web development, software development, data analysis, and UI/UX design.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Skilled in multiple programming languages and technologies including{' '}
                <span className="text-accent">React</span>, <span className="text-accent">Node.js</span>,{' '}
                <span className="text-accent">Express.js</span>, <span className="text-accent">MongoDB</span>,{' '}
                <span className="text-accent">SQL</span>, and more.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I have proven abilities in project management, leadership, and effective collaboration. 
                Currently seeking to apply technical expertise and problem-solving skills in dynamic IT 
                and engineering environments.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    Location: Manila, Philippines
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    Degree: BS Computer Engineering
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    Graduated: October 2025 (Magna Cum Laude)
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    Interests: Photography, Videography, Graphic Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About