const Title = ({ text }: { text: string }) => {
  return (
    <div className="bento-card px-6 py-4 mb-6 rounded-full">
      <h2 className="text-3xl font-bold text-gradient">{text}</h2>
    </div>
  );
};

export default Title;
