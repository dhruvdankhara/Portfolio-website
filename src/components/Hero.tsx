import Card from "./Card";
import avtar from "../assets/avtar.jpg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Card className="aspect-square overflow-hidden p-0 md:p-0">
        <img src={avtar} alt={"image"} />
      </Card>
      <Card className="col-span-2 md:px-12">
        <div className="flex flex-col justify-center gap-2">
          <p className="text-4xl font-black tracking-wide">Dhruv Dankhara</p>
          <p className="text-slate-300">MERN Stack Developer</p>
          <p>
            I'm a passionate MERN Stack Developer who turns ideas into reality
            with cutting-edge technologies and a problem-solving mindset.
          </p>
          <div className="flex items-center gap-4">
            <button
              className="rounded-full bg-purple-600 px-4 py-2 font-semibold tracking-widest text-white transition duration-300 hover:bg-purple-700"
              style={{ fontFamily: '"Lilita One", serif' }}
            >
              RESUME
            </button>
            <a href="#">
              <img
                className="size-7 transition-all duration-200 hover:scale-110"
                src={github}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="size-7 transition-all duration-200 hover:scale-110"
                src={linkedin}
                alt=""
              />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
