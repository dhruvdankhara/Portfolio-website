const BlogPostLoading = () => {
  return (
    <main className="flex-grow">
      {/* Header Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 border-b-2 border-black">
        {/* Back Button - White */}
        <div className="bg-white p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex items-center">
          <div className="h-10 w-40 bg-gray-200 border-2 border-black animate-pulse" />
        </div>

        {/* Category & Meta - Pink */}
        <div className="bg-pop-pink p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <div className="h-6 w-24 bg-pop-teal/50 border-2 border-black mb-3 animate-pulse" />
          <div className="flex items-center gap-2">
            <div className="h-4 w-20 bg-black/20 animate-pulse" />
            <div className="h-4 w-16 bg-black/20 animate-pulse" />
          </div>
        </div>

        {/* Author Info - Teal */}
        <div className="bg-pop-teal p-6 flex items-center">
          <div className="w-12 h-12 bg-black/30 border-2 border-black mr-3 animate-pulse" />
          <div>
            <div className="h-5 w-32 bg-black/30 mb-1 animate-pulse" />
            <div className="h-4 w-24 bg-black/20 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="bg-pop-yellow p-8 md:p-12 border-b-2 border-black">
        <div className="h-10 md:h-12 bg-black/20 w-3/4 max-w-4xl animate-pulse" />
      </section>

      {/* Featured Image */}
      <section className="border-b-2 border-black">
        <div className="w-full aspect-video bg-gray-200 animate-pulse" />
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 w-full animate-pulse" />
            <div className="h-4 bg-gray-200 w-full animate-pulse" />
            <div className="h-4 bg-gray-200 w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-200 w-3/4 animate-pulse" />
            <br />
            <div className="h-4 bg-gray-200 w-full animate-pulse" />
            <div className="h-4 bg-gray-200 w-4/6 animate-pulse" />
            <div className="h-4 bg-gray-200 w-full animate-pulse" />
            <div className="h-4 bg-gray-200 w-5/6 animate-pulse" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-gray-50 p-8">
          <div className="h-6 w-16 bg-gray-300 mb-4 border-b-2 border-black pb-2 animate-pulse" />
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-16 bg-pop-pink/30 border-2 border-black animate-pulse" />
            <div className="h-6 w-20 bg-pop-pink/30 border-2 border-black animate-pulse" />
            <div className="h-6 w-14 bg-pop-pink/30 border-2 border-black animate-pulse" />
          </div>

          <div className="mt-8">
            <div className="h-12 w-full bg-black/20 border-2 border-black animate-pulse" />
          </div>

          <div className="mt-3">
            <div className="h-12 w-full bg-gray-200 border-2 border-black animate-pulse" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostLoading;
