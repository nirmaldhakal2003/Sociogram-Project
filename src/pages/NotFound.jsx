import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <Link to="/home">
        <Button
          text="Go to Home "
        />
      </Link>
    </div>
  );
};

export default NotFound;
