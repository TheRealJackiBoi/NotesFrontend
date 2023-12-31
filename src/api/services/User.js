import axios from "axios";
import { BASE_URL } from "../env";

export async function login(email, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        "user_email": email,
        "password": password,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function register(email, password) {
  console.log(email, password);
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/register`,
      {
        "user_email": email,
        "password": password,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
