import { motion } from "motion/react";
import { Mail, Phone, Cloud } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
    const isMobile = window.innerWidth <= 768;

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-12" />

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative Cloud */}
            <motion.div
              className="absolute -top-10 -right-10 opacity-10"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Cloud className="w-48 h-48 text-blue-400" />
            </motion.div>

            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in discussing new opportunities, projects, or collaborations in cloud infrastructure and IT.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.a
                href="mailto:Singhiqbal491@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
              >

                  <div className='flex gap-3 items-center'>
                      <Mail className="w-5 h-5" />
                      {!isMobile &&<span>Email </span>}
                  </div>
                  <p>Singhiqbal4901@gmail.com</p>
              </motion.a>

              <motion.a
                href="tel:+15147129837"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" />
                  {!isMobile && <span>Call</span>}
                  <span>(514)-712-9837</span>
              </motion.a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                © 2025 Iqbal Singh. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
