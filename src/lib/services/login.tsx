import { UserLoginResponse  } from "../types";
import { handleResponse } from "./utils"

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";


export async function apiLoginUser(credentials: string): Promise<string> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<UserLoginResponse>(response).then((data) => data.token);
}

export async function apiLogoutUser(): Promise<void> {
    const response = await fetch(`${SERVER_ENDPOINT}/api/auth/logout`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return handleResponse<void>(response);
  }