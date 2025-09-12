import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Button from "../components/Button";
import { registerSchema } from "../validation/registerSchema";

const Register = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  return (
    <div className="h-auto bg-orange-100 flex items-center justify-center">
      <div className="bg-gray-200 p-10 rounded-xl shadow-lg w-full max-w-md mt-10 mb-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={toFormikValidationSchema(registerSchema)}
          onSubmit={(values, { resetForm }) => {
            const existingUsers =
              JSON.parse(localStorage.getItem("users")) || [];

            const emailExists = existingUsers.some(
              (user) => user.email === values.email
            );

            if (emailExists) {
              setErrorMsg("Email already registered. Please login.");
              setSuccessMsg("");
              return;
            }

            existingUsers.push(values);
            localStorage.setItem("users", JSON.stringify(existingUsers));

            setSuccessMsg("You are registered successfully!");
            setErrorMsg("");
            resetForm();

            setTimeout(() => navigate("/"), 2000);
          }}
        >
          {() => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-600 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter full name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Phone No
                </label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-600 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-600 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-600 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full border border-gray-600 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Re-enter your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {errorMsg && (
                <p className="text-red-600 text-center font-semibold">
                  {errorMsg}
                </p>
              )}
              {successMsg && (
                <p className="text-green-600 text-center font-semibold">
                  {successMsg}
                </p>
              )}

              <Button text="Register" type="submit" />
            </Form>
          )}
        </Formik>

        <p className="mt-3 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
