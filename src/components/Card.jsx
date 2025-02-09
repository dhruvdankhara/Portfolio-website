const Card = ({ children, className }) => {
  return (
    <div
      className={`flex flex-row items-center rounded-2xl border border-gray-300 bg-white p-6 text-black ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
