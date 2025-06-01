const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-6">
        <div className="bento-card rounded-full flex items-center justify-between text-center">
          <p className="text-white/50 text-sm">
            Designed and built with ❤️ by Dhruv Dankhara
          </p>
          <p className="text-white/70">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
