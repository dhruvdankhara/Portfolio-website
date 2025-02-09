import Card from "./Card";

const LinkCard = ({ title, link, image, smallText }) => {
  return (
    <Card className={"col-span-2 md:col-span-1"}>
      <a
        href={link}
        className="flex h-28 w-full flex-col justify-between"
        target="_blank"
        rel="noreferrer"
      >
        <div className="space-y-1">
          <p className="size-9 rounded-lg">
            <img className="rounded-sm" src={image} alt="" />
          </p>
          <p className="text-base font-semibold">{title}</p>
          <p className="truncate text-gray-500">{smallText}</p>
        </div>
      </a>
    </Card>
  );
};

export default LinkCard;
