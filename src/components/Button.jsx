
const Button = ({ text, onClick, type = "submit" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-4 px-4 py-2 text-white rounded-lg bg-blue-500 hover:bg-red-600 transition"
    >
      {text}
    </button>
  );
};

export default Button;
