import { FilteredUser, UserResponse } from "../types";
import { handleResponse } from "./utils";


const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";


export async function apiRegisterUser(
  credentials: string
): Promise<FilteredUser> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<UserResponse>(response).then((data) => data.data.user);
}


export async function apiGetAuthUser(token?: string): Promise<FilteredUser> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(`${SERVER_ENDPOINT}/api/users/me`, {
    method: "GET",
    credentials: "include",
    headers,
  });

  return handleResponse<UserResponse>(response).then((data) => data.data.user);
}
