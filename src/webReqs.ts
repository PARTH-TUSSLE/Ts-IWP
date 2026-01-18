import axios, {type AxiosResponse} from "axios";

interface Todo {
  userID: number,
  id: number,
  title: string,
  completed: boolean
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(response.data.title);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(error.cause);
      if (error.response) {
        console.log(error.response.status)
      }
    }
  }
}

fetchData();
