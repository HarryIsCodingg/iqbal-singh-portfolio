import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl"
        >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am an enthusiastic IT and cloud-infrastructure learner with a strong passion for building secure, scalable systems.
                Currently studying Computer Science at St. Laurence College, I am actively seeking a CO-OP opportunity where I can contribute, learn, and grow.
                I enjoy solving real-world IT challenges, supporting users, and exploring modern cloud technologies.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am hands-on and self-driven, with foundational experience in AWS (EC2, ECS), Docker containerization, MySQL databases,
                Azure Virtual Networks, CI/CD pipelines, and basic Cisco networking. I continuously learn through labs, deployments, and
                infrastructure simulations, and I am especially motivated by roles that strengthen IT support, networking, and cloud security.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-6">
                I may be early in my IT journey, but I bring high energy, commitment, and curiosity.
                I adapt quickly, ask thoughtful questions, and stay persistently focused on improvement.
                My goal is to support teams in delivering stable, secure, and well-automated IT environments while developing my skills in production systems.
            </p>

        </motion.div>
      </div>
    </section>
  );
}
