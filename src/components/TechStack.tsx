import Title from "./Title";
import TechStackCard from "./TechStackCard";

// Language
import CPP from "../assets/c++.png";
import C from "../assets/c.svg";
import JAVASCRIPT from "../assets/javascript.svg";
import TYPESCRIPT from "../assets/typescript.png";
import PYTHON from "../assets/python.svg";

// frontend
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import VITE from "../assets/vite.svg";
import TAILWIND from "../assets/tailwindcss.svg";
import BOOTSTRAP from "../assets/bootstrap-5.svg";
import REDUX from "../assets/redux.svg";
import REACT from "../assets/react.svg";

// backend
import NODEJS from "../assets/nodejs.svg";
import MONGODB from "../assets/mongodb.svg";
import EXPRESS from "../assets/expressjs.svg";

// tools
import GIT from "../assets/git.png";
import GITHUB from "../assets/github.svg";
import POSTMAN from "../assets/postman.png";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title title="Tech Stack" />
      <div className="flex size-full gap-5">
        <TechStackCard
          title={"Language"}
          images={[C, CPP, JAVASCRIPT, TYPESCRIPT, PYTHON]}
        />

        <TechStackCard
          title={"Frontend"}
          images={[HTML, CSS, BOOTSTRAP, TAILWIND, VITE, REACT, REDUX]}
        />

        <TechStackCard title={"Backend"} images={[NODEJS, EXPRESS, MONGODB]} />

        <TechStackCard title={"Tools"} images={[GIT, GITHUB, POSTMAN]} />
      </div>
    </div>
  );
};

export default TechStack;
