import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import AOS from "aos";
import ErrorPages from "./pages/ErrorPages";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ServicesTwo from "./pages/ServicesTwo";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Team from "./pages/Team";
import TeamMemberDetails from "./pages/TeamMemberDetails";
import Testimonials from "./pages/Testimonial";
import Gallery from "./pages/Gallery";
import Appointment from "./pages/Appointment";
import Pricing from "./pages/Pricing";
import CommingSoon from "./pages/CommingSoon";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import SingleService from "./pages/SingleService";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/service-two" element={<ServicesTwo />}></Route>
        <Route
          path="/service-single/:serviceId"
          element={<SingleService />}
        ></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog-single/:blogId" element={<SingleBlog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-member/:teamId" element={<TeamMemberDetails />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comming-soon" element={<CommingSoon />} />
      </Route>
      <Route path="/*" element={<ErrorPages />}></Route>
    </Routes>
  );
}
