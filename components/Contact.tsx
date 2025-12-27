import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Teal section */}
        <div className="bg-pop-teal text-white p-8 md:p-12 lg:p-16 border-r-2 border-black">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/80 font-medium mb-8 max-w-md">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something amazing.
          </p>

          {/* Contact info cards */}
          <div className="space-y-4">
            <div className="bg-white text-black p-4 border-2 border-black flex items-center gap-4 hover:shadow-pop hover:-translate-y-0.5 transition-all">
              <div className="w-12 h-12 bg-pop-pink border-2 border-black flex items-center justify-center">
                <Mail className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <a
                  href="mailto:dhruvdankhara09@gmail.com"
                  className="text-sm text-black/70 hover:text-pop-teal"
                >
                  dhruvdankhara09@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white text-black p-4 border-2 border-black flex items-center gap-4 hover:shadow-pop hover:-translate-y-0.5 transition-all">
              <div className="w-12 h-12 bg-pop-yellow border-2 border-black flex items-center justify-center">
                <Phone className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <span className="text-sm text-black/70">+91 90164 34583</span>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-8 pt-8 border-t-2 border-white/30">
            <a
              href="https://www.linkedin.com/in/dhruv-dankhara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white text-black border-2 border-black flex items-center justify-center hover:bg-pop-pink transition-colors"
            >
              <Linkedin className="h-6 w-6" strokeWidth={2.5} />
            </a>
            <a
              href="https://github.com/dhruvdankhara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-black text-white border-2 border-black flex items-center justify-center hover:bg-pop-yellow hover:text-black transition-colors"
            >
              <Github className="h-6 w-6" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Right - Pink section with CTA */}
        <div className="bg-pop-pink p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
            <h3 className="text-2xl font-black mb-4">
              Looking to collaborate?
            </h3>
            <p className="text-black/70 font-medium mb-6">
              Whether you have a project in mind or just want to chat, I&apos;d
              love to hear from you.
            </p>

            <a
              href="mailto:dhruvdankhara09@gmail.com"
              className="pop-btn-primary w-full inline-flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" strokeWidth={2.5} />
              Send Message
            </a>

            <div className="mt-6 pt-6 border-t-2 border-black">
              <p className="text-sm font-bold text-black/50">Response time</p>
              <p className="text-lg font-black">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
