import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section bg-primary">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <FiBriefcase className="text-2xl text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">IT Intern</h3>
                  <p className="text-accent mb-2">St. Joseph School of Gagalangin</p>
                  <p className="text-gray-400 mb-4">January – March 2025 | Manila, Philippines</p>
                  
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-accent mr-2">▹</span>
                      Maintained IT systems and provided troubleshooting support for faculty and staff
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-accent mr-2">▹</span>
                      Collaborated with staff to enhance technology integration and improve user experience
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-accent mr-2">▹</span>
                      Supported documentation and technical reporting tasks to ensure smooth IT operations
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience