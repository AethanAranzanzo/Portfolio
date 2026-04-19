import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, FaNodeJs, FaJs, FaPython, FaJava, 
  FaHtml5, FaCss3Alt, FaGitAlt, FaUnity 
} from 'react-icons/fa'
import { 
  SiExpress, SiMongodb, SiMysql, SiTailwindcss, 
  SiCplusplus, SiFirebase, SiTypescript, SiNextdotjs,
  SiPrisma, SiZod, SiVercel, SiVite
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React (v18/19)', icon: <FaReact className="text-4xl text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-white" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-[#3178C6]" /> },
        { name: 'JavaScript', icon: <FaJs className="text-4xl text-[#F7DF1E]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-4xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-[#47A248]" /> },
        { name: 'Prisma ORM', icon: <SiPrisma className="text-4xl text-white" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-4xl text-[#FFCA28]" /> },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-[#3178C6]" /> },
        { name: 'Python', icon: <FaPython className="text-4xl text-[#3776AB]" /> },
        { name: 'C++', icon: <SiCplusplus className="text-4xl text-[#00599C]" /> },
        { name: 'Java', icon: <FaJava className="text-4xl text-[#007396]" /> },
        { name: 'C#', icon: <TbBrandCSharp className="text-4xl text-[#239120]" /> },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-[#F05032]" /> },
        { name: 'Zod Validator', icon: <SiZod className="text-4xl text-[#3068b7]" /> },
        { name: 'Vite', icon: <SiVite className="text-4xl text-[#646CFF]" /> },
        { name: 'Vercel', icon: <SiVercel className="text-4xl text-white" /> },
        { name: 'Unity3D', icon: <FaUnity className="text-4xl" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="section" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-6 text-accent">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-tertiary/70 transition-all duration-300"
                      style={{ backgroundColor: '#1a1a1a' }}
                    >
                      {skill.icon}
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills