import Card from "./Card";

const Title = ({ title }: { title: string }) => {
  return <Card className="text-2xl font-bold md:py-4">{title}</Card>;
};

export default Title;
