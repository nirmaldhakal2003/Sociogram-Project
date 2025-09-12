import Button from "./Button";
import { useNavigate } from "react-router-dom";

export const Profilecard = ({
  id,
  image,
  name,
  bio,
  address,
  education,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md shadow-black rounded-xl p-4 w-64 text-center hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full border-2 border-red-500"
      />

      <h2 className="mt-3 text-lg font-bold text-gray-800">{name}</h2>

      <p className="text-gray-600 text-sm mt-1">{bio}</p>

      <p className=" text-sm mt-2">{address}</p>

      <p className=" text-sm">{education}</p>

      <div className="flex gap-x-2 justify-center mt-3">
        <Button text="View" onClick={() => navigate(`/ViewProfile/${id}`)} />

        <Button text="Remove" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};
