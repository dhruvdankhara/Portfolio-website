import Card from "../Card";
import profile from "../../assets/pofile.jpg";

const HeaderCard = () => {
  return (
    <Card>
      <div className="flex size-full flex-col items-center justify-center">
        <img
          src={profile}
          className="aspect-square size-24 rounded-full"
          alt="profile image"
        />
        <h1 className="mt-5 text-2xl font-bold">Dhruv Dankhara</h1>
        <p className="text-gray-500">MERN Stack Developer</p>
      </div>
    </Card>
  );
};

export default HeaderCard;
