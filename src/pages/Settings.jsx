import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export const Settings = () => {
  const [user, setUser] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.length > 0 ? users[0] : null;
    setUser(loggedInUser);
  }, []);

  const handlePasswordChange = () => {
    if (!user) return;

    if (oldPassword !== user.password) {
      setMessage("Old password is incorrect.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, password: newPassword } : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Password updated successfully!");
    setOldPassword("");
    setNewPassword("");
  };

  const handleDeleteAccount = () => {
    if (!user) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.filter((u) => u.email !== user.email);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Account deleted successfully!");

    setTimeout(() => navigate("/register"), 1500);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-100">
        <p className="text-red-600">No account found. Please register.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-100 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-white hover:shadow-xl hover:shadow-black rounded-2xl p-4 sm:p-6 space-y-6  ">
        <h1 className="text-2xl font-bold text-red-600 text-center">
          Settings
        </h1>

        <div className="space-y-1">
          <p className="hover:text-red-700">
            <span className="font-semibold text-red-500">Name:</span>{" "}
            {user.name}
          </p>
          <p className="hover:text-red-700">
            <span className="font-semibold text-red-500">Email:</span>{" "}
            {user.email}
          </p>
          <p className="hover:text-red-700">
            <span className="font-semibold text-red-500">Phone:</span>{" "}
            {user.phone}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-green-600 mb-2">
            Change Password
          </h2>
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 rounded-lg border"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 rounded-lg border"
            />
            <Button onClick={handlePasswordChange} text=" Update Password" />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-red-600 mb-2">
            Delete Account
          </h2>
          <Button onClick={handleDeleteAccount} text=" Delete Account" />
        </div>

        {message && (
          <p className="text-center text-red-600 font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
};
