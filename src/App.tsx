import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Blogs from "@/pages/Blogs";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";
import HomeLayout from "@/Layout/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
