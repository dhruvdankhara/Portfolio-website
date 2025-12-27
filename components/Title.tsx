const Title = ({ text }: { text: string }) => {
  return (
    <div className="text-4xl font-black py-8 px-6 md:px-12 md:py-8 border-b-2 border-black bg-black text-white">
      {text}
    </div>
  );
};

export default Title;
