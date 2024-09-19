import { redirect, Navigate } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedin")
    
    if (!isLoggedIn) {
        console.log("Not logged in")
        // Snippet from https://github.com/scrimba/learn-react-router-6?tab=readme-ov-file#april-21-2023
        const response = redirect("/login?message=You must be logged in to view this page")
        response.body = true  // It's silly, but it works
        return response
    }
    return null
}