import Card from "./Card";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p
          id="logo"
          className="cursor-pointer text-4xl font-black tracking-widest"
        >
          DHRUV
        </p>
      </div>

      <Card className="size-fit rounded-full p-1 md:p-1">
        <div className="flex items-center justify-between gap-1">
          <div className="cursor-pointer rounded-full bg-slate-700/30 px-3.5 py-1.5 transition-all duration-200 hover:bg-slate-600/30">
            Home
          </div>
          <div className="cursor-pointer rounded-full px-3.5 py-1.5 transition-all duration-200 hover:bg-slate-600/30">
            Blogs
          </div>
        </div>
      </Card>

      <div className="cursor-pointer text-base">Contact</div>
    </div>
  );
};

export default Navbar;
