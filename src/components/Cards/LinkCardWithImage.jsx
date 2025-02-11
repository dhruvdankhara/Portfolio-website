import Card from "../Card";

const LinkCardWithImage = ({ title, link, image, smallText, sideImage }) => {
  return (
    <Card
      className={
        "col-span-1 aspect-[40/19] transition-all duration-300 hover:scale-105"
      }
    >
      <a className="size-full" target="_blank" href={link}>
        <div className="grid size-full grid-cols-2 gap-2">
          <div className="flex size-full flex-col space-y-1">
            <p>
              <img
                className="size-10 rounded-lg p-1 shadow-md"
                src={image}
                alt={`${title} logo`}
              />
            </p>
            <p className="text-base font-semibold">{title}</p>
            <p className="truncate text-gray-500">{smallText}</p>
          </div>
          <div className="size-full">
            <img
              src={sideImage}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </a>
    </Card>
  );
};

export default LinkCardWithImage;
