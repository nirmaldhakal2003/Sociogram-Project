import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";
import Button from "../components/Button";
import { loginSchema } from "../validation/loginSchema.js";

const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-200 flex items-center justify-center">
      <div className="bg-gray-200 p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={toFormikValidationSchema(loginSchema)}
          onSubmit={(values, { resetForm }) => {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const user = users.find((user) => user.email === values.email);

            if (!user) {
              setErrorMessage("You do not exist, please register first");
            } else if (user.password !== values.password) {
              setErrorMessage("Password is incorrect");
            } else {
              localStorage.setItem("loggedInUser", JSON.stringify(user));
              setErrorMessage("");
              resetForm();
              navigate("/home");
            }
          }}
        >
          {() => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {errorMessage && (
                <p className="text-red-600 text-center font-semibold">
                  {errorMessage}
                </p>
              )}

              <Button type="submit" text="Log In" />
            </Form>
          )}
        </Formik>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
