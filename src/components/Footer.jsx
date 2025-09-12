import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-orange-300 text-black py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around gap-10 px-6 w-full">
          
          <div className="flex-1">
            <h1 className="text-white font-bold text-3xl">SocioGram</h1>
            <p className="mt-3 text-justify w-full lg:w-80 ">
              A SocioGram website is an online platform that allows people to
              post and see posts or services over the internet. It enables
              businesses to reach a wide audience, display their posts, and
              manage posts effectively.
            </p>
          </div>

         
          <div className="flex-1 ">
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-3 ">
              <Link to="/" className="block hover:text-red-700">Home</Link>
              <Link to="/Profile" className="block hover:text-red-700">Profile</Link>
              <Link to="/Bookmark" className="block hover:text-red-700">BookMark</Link>
              <Link to="/Post" className="block hover:text-red-700">Post</Link>
              <Link to="/Setting" className="block hover:text-red-700">Setting</Link>
            </div>
          </div>

         
          <div className="flex-1">
            <h3 className="font-bold">Customer Care</h3>
            <div className="mt-3 ">
              <Link to="" className="block hover:text-red-700">Help Center</Link>
              <Link to="" className="block hover:text-red-700">How to Buy</Link>
              <Link to="" className="block hover:text-red-700">Return and Refunds</Link>
              <Link to="" className="block hover:text-red-700">Contact Us</Link>
            </div>
          </div>
        </div>

       
        <div className="border-t border-black mt-8 pt-4 text-center text-sm text-black">
          © {new Date().getFullYear()} SocioGram. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;