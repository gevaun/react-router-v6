import { useState, useId } from "react";
import { Link, useLoaderData, useNavigate, Form } from "react-router-dom";
import { loginUser } from "../utils/api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  loginUser({ email, password })
  const data = await loginUser({ email, password });
  console.log(data);
  return null;
}

export default function Login() {
  const message = useLoaderData();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const id = useId();

  return (
    <div className="flex flex-col items-center h-screen ">
      <div>
        <h1 className="text-3xl font-bold">Sign in to your account</h1>
        <div className="h-12 p-4"></div>
        {message && <p className="opacity-75">{message}</p>}
        {error && <p className="opacity-75">{error.message}</p>}
      </div>
      <div>
        <Form method="post" className="flex flex-col space-y-4 mt-4">
          <label htmlFor={`${id}-email`}>Email</label>
          <input
            type="email"
            placeholder="Email Address"
            id={`${id}-email`}
            name="email"
            className="dark:text-black border border-gray-300 rounded-md px-2 py-1"
          />
          <label htmlFor={`${id}-password`}>Password</label>
          <input
            type="password"
            placeholder="Password"
            id={`${id}-password`}
            name="password"
            className="dark:text-black border border-gray-300 rounded-md px-2 py-1"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 disabled:opacity-75"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Logging in" : "Log in"}
          </button>
        </Form>
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
