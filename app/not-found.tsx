import Link from "next/link";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="pop-card text-center p-12">
        <h1 className="text-8xl font-black tracking-tighter mb-4 text-black">404</h1>
        <p className="text-xl text-black/70 mb-8 font-bold">Oops! Page not found</p>
        <Link 
          href="/" 
          className="pop-btn-primary inline-flex items-center gap-2"
        >
          <Home className="h-4 w-4" strokeWidth={2.5} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
