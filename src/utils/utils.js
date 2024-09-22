import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    // Snippet from https://github.com/scrimba/learn-react-router-6?tab=readme-ov-file#april-21-2023
    const response = redirect(
      `/login?message=You must be logged in to view this page&redirectTo=${pathname}`
    );
    response.body = true; // It's silly, but it works
    return response;
  }
  return null;
}
