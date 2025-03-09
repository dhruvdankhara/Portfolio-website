import Card from "./Card";
import Title from "./Title";
import budgetlink from "../assets/budgetlink.png";

const Project = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title title="Project" />
      <div className="flex gap-5">
        <Card className="flex aspect-square flex-col items-start gap-4">
          <img
            className="rounded-2xl transition-all duration-300"
            src={budgetlink}
            alt=""
          />

          <h3 className="text-2xl font-bold">
            Budget Link - Expense Management with Role-Based Access
          </h3>

          <div>
            <p>
              Tech Stack: React, Redux, Tailwind CSS, Shadcn UI, Node.js,
              Express.js, MongoDB, JWT, etc…
            </p>
            <p>
              Built an expense tracker web app with role-based access for
              managing family budgets.
            </p>
          </div>

          <button className="rounded-full bg-purple-600 px-4 py-2 font-semibold tracking-widest text-white transition duration-300 hover:bg-purple-700">
            <a href="">View LIVE</a>
          </button>
        </Card>
        <Card className="flex aspect-square flex-col items-start gap-4">
          <img
            className="rounded-2xl transition-all duration-300"
            src={budgetlink}
            alt=""
          />

          <h3 className="text-2xl font-bold">
            Budget Link - Expense Management with Role-Based Access
          </h3>

          <div>
            <p>
              Tech Stack: React, Redux, Tailwind CSS, Shadcn UI, Node.js,
              Express.js, MongoDB, JWT, etc…
            </p>
            <p>
              Built an expense tracker web app with role-based access for
              managing family budgets.
            </p>
          </div>

          <button className="rounded-full bg-purple-600 px-4 py-2 font-semibold tracking-widest text-white transition duration-300 hover:bg-purple-700">
            <a href="">View LIVE</a>
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Project;
