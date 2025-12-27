import Image from "next/image";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left side - White background */}
      <div className="bg-white p-8 md:p-12 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2 text-black">
          Build <span className="italic">better.</span>
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-black">
          Build <span className="italic">faster.</span>
        </h1>
        <p className="text-black/70 mb-8 max-w-lg font-medium text-lg">
          Passionate Data Analyst and MERN Stack developer specializing in
          transforming data into actionable insights and building robust web
          applications. I deliver data-driven solutions with exceptional user
          experiences.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            className="pop-btn-primary inline-flex items-center gap-2"
            download
          >
            <Download className="h-4 w-4" strokeWidth={2.5} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="pop-btn-secondary inline-flex items-center gap-2"
          >
            Contact Me
          </a>
        </div>

        {/* Social icons row */}
        <div className="flex gap-3 mt-8 pt-8 border-t-2 border-black">
          <a
            href="https://github.com/dhruvdankhara"
            className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center hover:-translate-y-1 hover:bg-pop-pink hover:text-black transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" strokeWidth={2.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-dankhara/"
            className="w-12 h-12 bg-pop-teal text-white border-2 border-black flex items-center justify-center hover:-translate-y-1 hover:shadow-pop transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Right side - Pink background with image */}
      <div className="bg-pop-pink p-8 md:p-12 lg:p-16 flex items-center justify-center">
        <div className="relative">
          {/* Profile image */}
          <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden bg-white">
            <Image
              src="/hero/admin.jpg"
              alt="Dhruv Dankhara"
              width={400}
              height={400}
              priority
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>

          {/* Floating name card */}
          <div className="absolute -bottom-4 -right-4 bg-pop-yellow border-2 border-black px-4 py-2 shadow-pop">
            <p className="font-black text-lg">Dhruv Dankhara</p>
            <p className="font-bold text-sm">Data Analyst / MERN Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
