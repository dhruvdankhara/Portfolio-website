const Card = ({ children, className }) => {
  return (
    <div
      className={`flex w-full rounded-3xl border-2 border-gray-500/30 bg-white p-5 text-black md:p-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
