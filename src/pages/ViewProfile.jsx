
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserData } from "../API/ApiData"; 
import Button from "../components/Button";

export const ViewProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserData().then((users) => {
      const singleUser = users.find((u) => u.id === parseInt(id));
      setUser(singleUser);
    });
  }, [id]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        user doesnot fould in Api
      </div>
    );
  }

  return (
    <>
    <div className="flex flex-wrap justify-center mt-10">
        <h1 className="font-bold text-red-500">You are watching Profle of <span className="text-black">{user.name}</span> </h1>
    </div>
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg hover:shadow-black rounded-2xl p-6 w-80 text-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 mx-auto rounded-full border-4 border-red-500"
        />
        <h2 className="mt-3 text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-600 mt-2">{user.bio}</p>
        <p className="mt-2 font-medium">{user.education}</p>
        <p className="mt-1 text-sm">{user.address}</p>

        <Button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        
         text=" Go Back"
        />
      </div>
    </div>

    </>
  );
};
