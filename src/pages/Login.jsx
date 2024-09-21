import { useState, useId } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  Form,
  redirect,
  useActionData,
  useNavigation
} from "react-router-dom";
import { loginUser } from "../utils/api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  loginUser({ email, password });
  await sleep(1000);
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    const response = redirect("/host");
    response.body = true; // It's silly, but it works
    return response;
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();
  const id = useId();

  return (
    <div className="flex flex-col items-center h-screen ">
      <div>
        <h1 className="text-3xl font-bold">Sign in to your account</h1>
        <div className="h-12 p-4"></div>
        {errorMessage ? 
            <p className="opacity-75 flex justify-center">{errorMessage}</p>
          :
          message &&
            (
          <p className="opacity-75 flex justify-center text-red-700 font-medium">
            {message}
          </p>
        )}
      </div>
      <div>
        <Form method="post" className="flex flex-col space-y-4 mt-4" replace>
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
            className={`bg-orange-500 text-white px-4 py-2 rounded-md disabled:opacity-75 ${navigation.state === 'submitting' ? 'disabled' : 'hover:bg-orange-600'}`}
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === 'submitting' ? 'Logging in..' : 'Log in'}
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
