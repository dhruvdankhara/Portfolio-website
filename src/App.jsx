import Card from "./components/Card";
import LinkCard from "./components/Cards/LinkCard";
import linkedin from "./assets/linedin.png";
import x from "./assets/x.jpg";
import Leetcode from "./assets/leetcode.png";
import gdg from "./assets/gfg.png";
import hashnode from "./assets/hashnode.png";
import hackerRank from "./assets/HackerRank.png";
import readcv from "./assets/readcv.png";
import copy from "./assets/copy.svg";
import readcvimage from "./assets/readcvimage.png";
import HeaderCard from "./components/Cards/HeaderCard";
import LinkCardWithImage from "./components/Cards/LinkCardWithImage";
import EmailCard from "./components/Cards/EmailCard";
// import github from "./assets/github.com";

function App() {
  return (
    <div className="mx-auto size-full max-w-3xl p-10">
      <div className="flex size-full flex-col space-y-5">
        <HeaderCard />

        <Card>
          <p className="text-2xl font-semibold">Hey!! 👋🏼</p>
        </Card>

        <Card>
          <div className="flex size-full flex-col space-y-4">
            <h2 className="text-xl font-bold">About Me</h2>
            <p className="text-wrap">
              I am a MERN stack developer with a passion for learning and
              implementing new technologies. I have experience in building
              full-stack web applications using React, Node.js, Express, and
              MongoDB.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <LinkCardWithImage
            image={readcv}
            link={"https://read.cv/dhruvdankhara"}
            sideImage={readcvimage}
            smallText={"read.cv/dhruvdankhara"}
            title={"Read CV"}
          />

          <div className="grid grid-cols-2 gap-4">
            <LinkCard
              image={hackerRank}
              link={"https://www.github.com/dhruvdankhara/"}
              smallText={"github.com"}
              title={"Github"}
            />
            <LinkCard
              image={linkedin}
              link={"https://www.linkedin.com/in/dhruv-dankhara/"}
              smallText={"linkedin.com"}
              title={"Linkedin"}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <EmailCard email={"dhruvdankhara09@gmail.com"} />

          <div className="grid grid-cols-2 gap-4">
            <LinkCard
              image={x}
              link={"https://x.com/dhruvvdankhara"}
              smallText={"x.com"}
              title={"X (Twitter)"}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 justify-center gap-4 md:grid-cols-4 md:grid-rows-1">
          <LinkCard
            image={Leetcode}
            link={"https://leetcode.com/u/dhruvdankhara/"}
            smallText={"leetcode.com"}
            title={"Leetcode"}
          />
          <LinkCard
            image={gdg}
            link={"https://www.geeksforgeeks.org/user/dhruvdankhara/"}
            smallText={"geeksforgeeks.org"}
            title={"GeeksforGeeks"}
          />
          <LinkCard
            image={hackerRank}
            link={"https://www.hackerrank.com/profile/dhruvdankhara"}
            smallText={"hackerrank.com"}
            title={"HackerRank"}
          />
          <LinkCard
            image={hashnode}
            link={"https://hashnode.com/@Dhruvdankhara"}
            smallText={"hashnode.com"}
            title={"Hashnode"}
          />
        </div>

        <Card>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Skills</h2>

            {[
              {
                title: "Frontend",
                skill: ["React", "Tailwind", "Redux", "Bootstrap"],
              },
              {
                title: "Backend",
                skill: ["Node.js", "Express", "MongoDB", "Firebase"],
              },
              {
                title: "Tools",
                skill: ["Git", "GitHub", "VS Code", "Postman"],
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col space-y-2">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <div className="flex flex-wrap space-x-2">
                  {item.skill.map((name) => (
                    <span
                      key={name}
                      className="rounded-full bg-gray-100 px-2 py-1"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex flex-col justify-center space-x-4 md:flex-row">
            <p className="text-gray-500">Made with ❤️ by Dhruv Dankhara</p>

            <a
              href="https://www.linkedin.com/in/dhruv-dankhara/"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/dhruvdankhara"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://x.com/dhruvvdankhara"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>

            <a
              href="https://read.cv/dhruvdankhara"
              className="text-blue-500 hover:underline"
            >
              Resume
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
