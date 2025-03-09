import Card from "./Card";

const Navbar = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-between gap-5 md:mt-6 md:flex-row md:gap-0">
      <div>
        <p
          id="logo"
          className="cursor-pointer text-4xl font-black tracking-widest"
        >
          DHRUV
        </p>
      </div>

      <div>
        <Card className="size-fit rounded-full bg-transparent p-1 md:p-1">
          <div className="flex items-center justify-between gap-1">
            {[
              { name: "Home", isActive: true },
              { name: "About", isActive: false },
              { name: "Blogs", isActive: false },
              { name: "Projects", isActive: false },
            ].map((item) => (
              <div
                className={`cursor-pointer rounded-full ${item.isActive && "bg-[#21262c]"} px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 hover:bg-slate-600/30`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="hidden cursor-pointer text-base md:block">Contact</div>
    </div>
  );
};

export default Navbar;
