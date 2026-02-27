import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'BlogSpace – Full-Stack Blog Platform',
      description: 'A production-ready, feature-rich blog platform built with Next.js 14 and TypeScript. Complete user authentication, rich text editing, image uploads, social features, and advanced search capabilities.',
      technologies: ['Next.js 14', 'TypeScript', 'MongoDB', 'Prisma', 'Tailwind CSS', 'Cloudinary', 'JWT'],
      features: [
        'Secure authentication with email verification and JWT sessions',
        'Rich text editor (TipTap) with image uploads via Cloudinary',
        'Full CRUD for posts with visibility control (Public/Private/Draft)',
        'Social features: likes, comments, and user profiles',
        'Advanced search with real-time filtering by category and sorting',
        'Responsive design with blue-to-purple gradient UI',
      ],
      image: '/blogspace-screenshot.png',
      github: 'https://github.com/AethanAranzanzo/BlogSpace',
      demo: 'https://blogspace-rho.vercel.app/',
    },
    {
      title: 'Dynamic Church Website & Information Hub',
      description: 'Full-stack informational website for a church using the MERN stack to provide event details, organizational information, and enhance community engagement.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
      features: [
        'RESTful API for contact form submissions',
        'Gemini-powered AI Chatbot for 24/7 assistance',
        'MongoDB for dynamic content management',
        'Responsive design with social media feeds',
      ],
      image: '/church-screenshot.png',
      github: '#',
      demo: '#',
    },
    {
      title: 'ARise: AR Glasses Training',
      description: 'Capstone/Thesis project designed for children with ADHD aged 7-15 to use AR-supported games that improve motor skills, hand-eye coordination, attention, and cognitive engagement.',
      technologies: ['Unity3D', 'C#', 'AR Foundation', 'SPSS', 'Firebase'],
      features: [
        'Interactive AR modules with body movement tracking',
        'Real-time rendering and immersive gameplay',
        'Data collection and statistical analysis',
        'Multi-disciplinary team collaboration',
      ],
      image: null,
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="card group"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className={`order-2 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2 text-accent">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-gray-400 flex items-start">
                            <span className="text-accent mr-2">▹</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300"
                        >
                          <FiGithub /> GitHub
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300"
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={`order-1 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="w-full h-64 bg-tertiary rounded-lg flex items-center justify-center overflow-hidden group-hover:border-2 group-hover:border-accent transition-all duration-300">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.innerHTML = '<p class="text-gray-500 text-lg">Screenshot Coming Soon</p>'
                          }}
                        />
                      ) : (
                        <div className="text-center p-8">
                          <p className="text-gray-500 text-lg mb-2">AR/VR Project</p>
                          <p className="text-gray-600 text-sm">Interactive experience - screenshot not available</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects