const Icon = ({ icon }) => {
  return (
    <p className="rounded-full">
      <img
        className="size-10 rounded-lg shadow-md md:w-[35%]"
        src={icon}
        alt=""
      />
    </p>
  );
};

export default Icon;
