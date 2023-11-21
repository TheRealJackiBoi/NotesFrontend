import axios from "axios";
import { BASE_URL } from "../env";

export async function getUserTodoGroups(id) {
  //TODO: Check id
  try {
    const response = await axios.get(`/users/${id}/todo-groups`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function login(email, password) {
  console.log(email, password);
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

    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
