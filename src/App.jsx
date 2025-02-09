import profile from "./assets/pofile.jpg";
import Card from "./components/Card";
import LinkCard from "./components/LinkCard";
import linkedin from "./assets/linedin.png";
import x from "./assets/x.jpg";
import Leetcode from "./assets/leetcode.png";
import gdg from "./assets/gfg.png";
import hashnode from "./assets/hashnode.png";
import hackerRank from "./assets/HackerRank.png";

function App() {
  return (
    <div className="mx-auto h-full w-full max-w-3xl p-10">
      <div className="flex flex-col space-y-5">
        <Card>
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src={profile}
              className="relative flex aspect-square size-20 shrink-0 overflow-hidden rounded-full"
              alt=""
            />
            <h1 className="mt-5 text-2xl font-bold">Dhruv Dankhara</h1>
            <p className="text-gray-500">MERN Stack Developer</p>
          </div>
        </Card>

        <Card>
          <p className="text-2xl font-semibold">Hey!! 👋🏼</p>
        </Card>
        <Card>
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold">About Me</h2>
            <p>
              I am a MERN stack developer with a passion for learning and
              implementing new technologies. I have experience in building
              full-stack web applications using React, Node.js, Express, and
              MongoDB.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-4 gap-4">
          <Card className={"col-span-4 md:col-span-2"}></Card>
          <Card className={"col-span-4 md:col-span-2"}></Card>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Card className={"col-span-4 md:col-span-2"}>
            <div className="flex h-28 w-full flex-col">
              <p className="w-10 rounded-lg border-2 border-gray-300 p-1.5 text-gray-500">
                <svg
                  className="fill-current"
                  pointerEvents="none"
                  width="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                  ></path>
                </svg>
              </p>
              <p className="text-base font-semibold">Email</p>
              <a
                href="mailto:dhruvdankhara09@gmail.com"
                className="text-gray-500"
              >
                dhruvdankhara09@gmail.com
              </a>
              <div className="flex items-center space-x-1 self-end rounded-full border border-gray-300 px-2.5 py-1">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33398 3.05664V1.86523C3.33398 1.33789 3.46745 0.939128 3.73438 0.668945C4.0013 0.395508 4.39681 0.258789 4.9209 0.258789H6.75684C7.04004 0.258789 7.29232 0.299479 7.51367 0.380859C7.73828 0.458984 7.94173 0.592448 8.12402 0.78125L10.5557 3.25684C10.7477 3.4554 10.8828 3.66699 10.9609 3.8916C11.0391 4.11296 11.0781 4.38477 11.0781 4.70703V8.57422C11.0781 9.10156 10.943 9.50033 10.6729 9.77051C10.4059 10.0407 10.012 10.1758 9.49121 10.1758H8.49023V9.21875H9.40332C9.64095 9.21875 9.81836 9.15853 9.93555 9.03809C10.056 8.91439 10.1162 8.74023 10.1162 8.51562V4.47266H7.96777C7.66504 4.47266 7.43555 4.39616 7.2793 4.24316C7.12305 4.08691 7.04492 3.85742 7.04492 3.55469V1.2207H4.99902C4.76465 1.2207 4.58724 1.28092 4.4668 1.40137C4.34961 1.52181 4.29102 1.69596 4.29102 1.92383V3.05664H3.33398ZM7.8457 3.43262C7.8457 3.51725 7.86361 3.5791 7.89941 3.61816C7.93848 3.65397 7.9987 3.67188 8.08008 3.67188H9.86719L7.8457 1.62109V3.43262ZM0.916992 11.0791V4.37012C0.916992 3.84277 1.05046 3.44401 1.31738 3.17383C1.58431 2.90039 1.97982 2.76367 2.50391 2.76367H4.20312C4.49935 2.76367 4.74349 2.79622 4.93555 2.86133C5.13086 2.92318 5.32617 3.05501 5.52148 3.25684L8.16797 5.94238C8.30469 6.08236 8.40885 6.21582 8.48047 6.34277C8.55208 6.46973 8.59928 6.61133 8.62207 6.76758C8.64811 6.92057 8.66113 7.10612 8.66113 7.32422V11.0791C8.66113 11.6064 8.52767 12.0052 8.26074 12.2754C7.99382 12.5456 7.59831 12.6807 7.07422 12.6807H2.50391C1.97982 12.6807 1.58431 12.5456 1.31738 12.2754C1.05046 12.0085 0.916992 11.6097 0.916992 11.0791ZM1.87891 11.0205C1.87891 11.2484 1.9375 11.4225 2.05469 11.543C2.17188 11.6634 2.34766 11.7236 2.58203 11.7236H6.99121C7.22559 11.7236 7.40137 11.6634 7.51855 11.543C7.639 11.4225 7.69922 11.2484 7.69922 11.0205V7.43652H5.12109C4.77604 7.43652 4.51725 7.35189 4.34473 7.18262C4.1722 7.01009 4.08594 6.74805 4.08594 6.39648V3.72559H2.58691C2.34928 3.72559 2.17188 3.78581 2.05469 3.90625C1.9375 4.02669 1.87891 4.19922 1.87891 4.42383V11.0205ZM5.21875 6.5918H7.56738L4.93066 3.91113V6.30371C4.93066 6.40462 4.95345 6.47786 4.99902 6.52344C5.0446 6.56901 5.11784 6.5918 5.21875 6.5918Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-sm text-gray-500">Copy</p>
              </div>
            </div>
          </Card>
          <Card className={"col-span-2 md:col-span-1"}>
            <div className="flex h-28 w-full flex-col justify-between">
              <div className="space-y-1">
                <p className="size-9 rounded-lg">
                  <img className="rounded-sm" src={linkedin} alt="" />
                </p>
                <p className="text-base font-semibold">Linkedin</p>
              </div>
              <div>
                <button className="flex items-center space-x-2 rounded-full border border-gray-300 px-3 py-1.5 font-semibold">
                  Connect
                </button>
              </div>
            </div>
          </Card>
          <Card className={"col-span-2 md:col-span-1"}>
            <div className="flex h-28 w-full flex-col justify-between">
              <div className="space-y-1">
                <p className="size-9 rounded-lg">
                  <img className="rounded-sm" src={x} alt="" />
                </p>
                <p className="text-base font-semibold">X (Twitter)</p>
              </div>
              <div>
                <button className="flex items-center space-x-2 rounded-full border border-gray-300 px-3 py-1.5 font-semibold">
                  Follow
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-4 gap-4">
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
            image={hashnode}
            link={"https://hashnode.com/@Dhruvdankhara"}
            smallText={"hashnode.com"}
            title={"Hashnode"}
          />
          <LinkCard
            image={hackerRank}
            link={"https://www.hackerrank.com/profile/dhruvdankhara"}
            smallText={"hackerrank.com"}
            title={"HackerRank"}
          />
        </div>

        <Card>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold">Frontend</h2>
              <div className="flex flex-wrap space-x-2">
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  React
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  Redux
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  Tailwind
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  Bootstrap
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold">Backend</h2>
              <div className="flex flex-wrap space-x-2">
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  Node.js
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  Express
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  MongoDB
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  Firebase
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold">Tools</h2>
              <div className="flex flex-wrap space-x-2">
                <span className="rounded-full bg-gray-100 px-2 py-1">Git</span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  GitHub
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  VS Code
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1">
                  Postman
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex justify-center space-x-4">
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
