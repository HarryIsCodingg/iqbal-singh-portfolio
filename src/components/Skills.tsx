import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Cloud, Database, Network, Server, Shield, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS (ECS, EC2, VPC)", "Azure Virtual Networks", "Cloud Architecture"]
  },
  {
    icon: Server,
    title: "Containerization",
    skills: ["Docker", "Docker Hub", "Container Orchestration"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "SQL", "Database Design", "Query Optimization"]
  },
  {
    icon: Network,
    title: "Networking",
    skills: ["Cisco Routing", "CIDR", "Network Segmentation", "NSG Configuration"]
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Zero-Trust Architecture", "WinRM/LDAP", "Access Control", "Network Security"]
  },
  {
    icon: Code,
    title: "Development & Automation",
    skills: ["GitHub Actions", "CI/CD", "Bash", "PowerShell", "Linux", "Windows"]
  }
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
