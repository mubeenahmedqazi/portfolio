"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Responsive Design"]
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "Python", "API Integration", "Middleware"]
  },
  {
    category: "Databases & Storage",
    skills: ["MongoDB", "PostgreSQL", "Database Design", "Firebase", "Data Modeling", "SQL/NoSQL"]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Supervised Learning", 
      "Unsupervised Learning", 
      "KNN Algorithm", 
      "K-Means Clustering", 
      "Random Forest", 
      "Neural Networks"
    ]
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "Mobile App Development", "Cross-Platform", "Firebase Integration", "App Deployment"]
  },
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "OOP Concepts", "Data Structures", "Algorithms"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code"]
  }
];

export default function ExpertiseCard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-gray-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack development, AI/ML, and comprehensive technical capabilities
          </p>
        </motion.div>

        {/* 3x3 Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              {/* Category Card */}
              <div className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                {/* Category Header */}
                <div className="mb-4 pb-3 border-b border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {category.category}
                  </h3>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * skillIndex }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderColor: "rgba(59, 130, 246, 0.3)"
                      }}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 cursor-default transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill Count */}
                <div className="mt-4 pt-3 border-t border-gray-800">
                  <span className="text-gray-500 text-xs">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-2xl pointer-events-none transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Focus Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Capabilities */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">AI & Machine Learning Expertise</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <p className="text-white font-medium text-sm mb-2">Supervised Learning</p>
                    <p className="text-gray-400 text-xs">Classification & Regression models</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <p className="text-white font-medium text-sm mb-2">Unsupervised Learning</p>
                    <p className="text-gray-400 text-xs">Clustering & Dimensionality reduction</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <p className="text-white font-medium text-sm mb-2">Algorithms</p>
                    <p className="text-gray-400 text-xs">KNN, K-Means, Random Forest</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}