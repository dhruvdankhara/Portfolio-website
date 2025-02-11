import Card from "../Card";
import Icon from "../Icon";

const LinkCard = ({ title, link, image, smallText }) => {
  return (
    <a
      href={link}
      className="flex aspect-square h-full flex-col justify-between"
      target="_blank"
      rel="noreferrer"
    >
      <Card
        className={
          "flex aspect-square h-full flex-col justify-between transition-all duration-300 hover:scale-110"
        }
      >
        <div className="flex aspect-square h-full flex-col justify-start space-y-1">
          <Icon icon={image} />
          <p className="truncate text-base font-semibold">{title}</p>
          <p className="truncate text-sm text-gray-500">{smallText}</p>
        </div>
      </Card>
    </a>
  );
};

export default LinkCard;
