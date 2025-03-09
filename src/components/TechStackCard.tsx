import React from "react";
import Card from "./Card";

const TechStackCard = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  return (
    <Card className="flex aspect-square h-full flex-col gap-5">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex size-full items-start justify-center">
        <div className="flex w-full flex-wrap items-start justify-center gap-4">
          {images.map((item) => (
            <img
              className="aspect-square size-14 shadow-sm transition-all duration-200 hover:scale-110"
              src={item}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TechStackCard;
