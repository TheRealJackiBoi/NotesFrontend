import axios from "axios";
import { BASE_URL } from "../env";

export async function getUserTodoGroupsTodos(
  userEmail,
  userToken,
  todoGroupId
) {
  try {
    const response = await axios.get(
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

export async function createUserTodoGroupsTodos(
  userEmail,
  userToken,
  todoGroupId,
  todo
) {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/${userEmail}/note_groups/${todoGroupId}/notes`,
      todo,
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

export async function removeUserTodoGroupTodo(
  userEmail,
  userToken,
  todoGroupId,
  todoId
) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/users/${userEmail}/note_groups/${todoGroupId}/notes/${todoId}`,
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
