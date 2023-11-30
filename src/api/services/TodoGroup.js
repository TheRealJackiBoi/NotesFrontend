import axios from "axios";
import { BASE_URL } from "../env";

export async function getUserTodoGroups(userEmail, userToken) {
  try {
    const response = await axios.get(
      `${BASE_URL}/users/${userEmail}/note_groups`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return await response.data;
  } catch (e) {
    console.error(e);
  }
}

export async function createUserTodoGroups(userEmail, userToken, todoGroup) {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/${userEmail}/note_groups`,
      todoGroup,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return await response.data;
  } catch (e) {
    console.error(e);
  }
}

export async function removeUserTodoGroup(userEmail, userToken, todoGroupId) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/users/${userEmail}/note_groups/${todoGroupId}`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return await response.data;
  } catch (e) {
    console.error(e);
  }
}

export async function removeUserTodoGroupTodos(
  userEmail,
  userToken,
  todoGroupId
) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/users/${userEmail}/note_groups/${todoGroupId}/notes`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return await response.data;
  } catch (e) {
    console.error(e);
  }
}
