const Loading = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        {/* Brutalist loading animation */}
        <div className="flex gap-2 justify-center mb-6">
          <div
            className="w-6 h-6 bg-pop-pink border-2 border-black animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-6 h-6 bg-pop-yellow border-2 border-black animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-6 h-6 bg-pop-teal border-2 border-black animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
        <p className="text-xl font-black tracking-tight text-black">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
