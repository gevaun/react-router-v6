import { useState, useId } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { loginUser } from "../utils/api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function Login() {
  const message = useLoaderData();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(formData)
      .then((data) => console.log(data))
      .catch(err => setError(err))
      .finally(() => setStatus("idle"));
  }

  const id = useId();

  return (
    <div className="flex flex-col items-center h-screen ">
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      <div className="h-12 p-4">
        {message && <p className="opacity-75">{message}</p>}
        {error && <p className="opacity-75">{error.message}</p>}
      </div>
      <div>
        <form className="flex flex-col space-y-4 mt-4" onSubmit={handleSubmit}>
          <label htmlFor={`${id}-email`}>Email</label>
          <input
            type="email"
            placeholder="Email Address"
            id={`${id}-email`}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-2 py-1"
          />
          <label htmlFor={`${id}-password`}>Password</label>
          <input
            type="password"
            placeholder="Password"
            id={`${id}-password`}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-2 py-1"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 disabled:opacity-75"
            disabled={status === "submitting"}
          >
            {status === 'submitting' ? "Logging in" : "Log in"}
          </button>
        </form>
      </div>
      <div className="p-4">
        Do not have an account?
        <Link to="" className="font-medium text-orange-600">
          {" "}
          Create one now
        </Link>
      </div>
    </div>
  );
}
