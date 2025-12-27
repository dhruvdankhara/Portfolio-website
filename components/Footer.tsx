import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-b-2 border-black">
      {/* Footer grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Logo section */}
        <div className="bg-black text-white p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
          <Link href="/" className="text-2xl font-black tracking-tight">
            DHRUV
          </Link>
          <p className="text-white/60 text-sm mt-2 font-medium">
            Building the web, one component at a time.
          </p>
        </div>

        {/* Quick links */}
        <div className="bg-white p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
          <h4 className="font-bold mb-3">Quick Links</h4>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#skills"
              className="text-sm text-black/70 hover:text-pop-teal font-medium"
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="text-sm text-black/70 hover:text-pop-teal font-medium"
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="text-sm text-black/70 hover:text-pop-teal font-medium"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-black/70 hover:text-pop-teal font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-pop-teal text-white p-6 md:p-8">
          <p className="font-bold">© {new Date().getFullYear()}</p>
          <p className="text-white/80 text-sm font-medium">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
