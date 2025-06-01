import myImage from "@/assets/admin.jpg";
import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";

const Hero = () => {
  return (
    <section id="home" className=" ">
      <div className="container mx-auto px-6">
        <div className="bento-card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 aspect-square bg-bento-hover rounded-xl animate-pulse-slow flex items-center justify-center">
              <img src={myImage} alt="" className="rounded-lg" />
            </div>

            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
                Dhruv Dankhara
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gradient-purple">
                MERN Stack Developer
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl">
                Passionate developer specializing in creating robust web
                applications with MongoDB, Express, React, and Node.js. I build
                elegant, responsive solutions that deliver exceptional user
                experiences.
              </p>

              <div className="flex items-center gap-6">
                <button className="bg-bento-accent hover:bg-bento-accent/90 text-white rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2">
                  Download Resume
                </button>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/dhruvdankhara"
                    className="w-10 h-10 rounded-full bg-bento-hover flex items-center justify-center p-1.5"
                  >
                    <img src={github} alt="" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dhruv-dankhara/"
                    className="w-10 h-10 rounded-full bg-bento-hover flex items-center justify-center"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
