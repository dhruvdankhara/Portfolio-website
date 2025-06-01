import Title from "./Title";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-20">
      <div className="container mx-auto px-6 ">
        <Title text={"Contact Me"} />
        <div className="bento-card p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect!
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something amazing. Feel free to
                reach out if you have any questions or just want to say hi!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" size={20} />
                <a
                  href="mailto:your.email@example.com"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  dhruvdankhara09@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-primary" size={18} />
                <span className="text-white/80">+91 90164 34583</span>
              </div>

              <div className="flex space-x-6 pt-4">
                <a
                  href="https://www.linkedin.com/in/dhruv-dankhara"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://github.com/dhruvdankhara"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
