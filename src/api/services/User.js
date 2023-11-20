import axios from 'axios';

export async function getUserTodoGroups(id) {
    //TODO: Check id
    try {
        const response = await axios.get(`/users/${id}/todo-groups`);
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}