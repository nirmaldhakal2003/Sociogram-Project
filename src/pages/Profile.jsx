import { useEffect, useState } from "react";
import { Profilecard } from "../components/ProfileCard";
import { UserData } from "../API/ApiData";
import Button from "../components/Button";

export const Profile = () => {
  const [userCards, setUserCards] = useState([]);
  const [profileUser, setProfileUser] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false); 

  
  useEffect(() => {
    UserData().then((user) => setUserCards(user));
  }, []);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUser");
    const loggedInUser = users.find((u) => u.email === loggedInEmail) || users[0];

    if (loggedInUser) {
      setProfileUser(loggedInUser);
      setProfileImage(loggedInUser.profileImage || "profile.jpg");
      setCoverImage(loggedInUser.coverImage || "cover.jpg");
      setBio(loggedInUser.bio || "Web Designer | Backend Developer | UI/UX Enthusiast");
    }
  }, []);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === "profile") setProfileImage(reader.result);
      if (type === "cover") setCoverImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProfile = () => {
    if (!profileUser) return;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === profileUser.email
        ? { ...u, profileImage, coverImage, bio }
        : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Profile updated successfully!");
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    setUserCards((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="mr-5 ml-5 h-160 md:ml-10 md:mt-10 md:mb-10 w-full md:w-1/4 bg-amber-400 md:rounded-3xl p-5 shadow-2xl shadow-black">
        <div className="relative h-32 w-full mb-12">
          {coverImage ? (
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-full object-cover rounded-t-3xl"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-t-3xl"></div>
          )}
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-red-500 absolute left-1/2 transform -translate-x-1/2 -bottom-12 object-cover"
          />
        </div>

        <div className="text-center mt-2">
          {!isEditing ? (
            <Button
              onClick={() => setIsEditing(true)}
            
             text="Edit Profile"
            />
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "cover")}
                className="w-full mb-2"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "profile")}
                className="w-full mb-2"
              />
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full mt-2 p-1 rounded border text-center"
              />
              <div>
              <Button
                onClick={handleSaveProfile}              
                text="Save Changes"
              /></div>
              
              <Button
                onClick={() => setIsEditing(false)}
              
               text="Cancel"
              />
            </>
          )}
        </div>

        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">{profileUser?.name}</h2>
          <p>{bio}</p>

          <div className="mt-4 text-sm">
            <p className="font-semibold">B.Sc. CSIT</p>
            <p>Bhairahawa Multiple Campus</p>
          </div>

          <div className="mt-2 text-sm">
            <p className="font-semibold">Palpa, Nepal</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-wrap gap-10 justify-center p-5 md:p-10">
        {userCards.length > 0 ? (
          userCards.map((userItem, index) => (
            <Profilecard
              key={index}
              id={userItem.id}
              name={userItem.name}
              bio={userItem.bio}
              image={userItem.image}
              address={userItem.address}
              education={userItem.education}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-center text-xl font-semibold">
            Loading or No data found
          </p>
        )}
      </div>
    </div>
  );
};
