import Card from "../Card";
import copy from "../../assets/copy.svg";

const EmailCard = ({ email }) => {
  return (
    <Card className="col-span-1 aspect-[40/19] transition-all duration-300 hover:scale-105">
      <a className="size-full" href={`mailto:${email}`}>
        <div className="flex size-full h-28 w-full flex-col">
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
          <p className="text-gray-500">{email}</p>
          <div className="flex cursor-pointer items-center space-x-1 self-end rounded-full border border-gray-300 px-2.5 py-1">
            <img src={copy} />
            <p className="text-sm text-gray-500">Copy</p>
          </div>
        </div>
      </a>
    </Card>
  );
};

export default EmailCard;
