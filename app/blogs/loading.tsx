const BlogsLoading = () => {
  return (
    <main className="flex-grow">
      {/* Header Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 border-b-2 border-black">
        {/* Title Section - Teal */}
        <div className="bg-pop-teal p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-black animate-pulse" />
            <div className="h-5 w-12 bg-black/30 animate-pulse" />
          </div>
          <div className="h-12 w-48 bg-black/20 animate-pulse mb-4" />
          <div className="h-5 w-full bg-black/10 animate-pulse" />
        </div>

        {/* Stats Section - Pink */}
        <div className="bg-pop-pink p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex items-center">
          <div>
            <div className="h-5 w-24 bg-black/20 animate-pulse mb-2" />
            <div className="h-16 w-16 bg-black/30 animate-pulse mb-2" />
            <div className="h-4 w-32 bg-black/10 animate-pulse" />
          </div>
        </div>

        {/* Subscribe CTA - Yellow */}
        <div className="bg-pop-yellow p-8 md:p-12 flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 w-10 mx-auto mb-4 bg-black/20 animate-pulse" />
            <div className="h-6 w-28 mx-auto mb-2 bg-black/20 animate-pulse" />
            <div className="h-4 w-36 mx-auto bg-black/10 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="border-b-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`bg-white p-6 flex flex-col border-b-2 border-black ${
                index % 3 !== 2 ? "lg:border-r-2" : ""
              } ${index % 2 !== 1 ? "md:border-r-2 lg:border-r-0" : ""} ${
                index % 3 !== 2 ? "lg:border-r-2" : ""
              }`}
            >
              {/* Image skeleton */}
              <div className="w-full aspect-video bg-gray-200 mb-4 border-2 border-black animate-pulse" />

              {/* Category and read time */}
              <div className="flex items-center justify-between mb-3">
                <div className="h-6 w-20 bg-pop-teal/30 border-2 border-black animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 animate-pulse" />
              </div>

              {/* Title */}
              <div className="h-6 bg-gray-200 w-3/4 mb-2 animate-pulse" />

              {/* Excerpt */}
              <div className="space-y-2 mb-4 flex-grow">
                <div className="h-4 bg-gray-200 w-full animate-pulse" />
                <div className="h-4 bg-gray-200 w-5/6 animate-pulse" />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-black">
                <div className="h-4 bg-gray-200 w-24 animate-pulse" />
                <div className="h-4 w-20 bg-gray-200 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogsLoading;
