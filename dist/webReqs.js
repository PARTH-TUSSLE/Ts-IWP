import axios, {} from "axios";
const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data.title);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.cause);
            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
};
fetchData();
//# sourceMappingURL=webReqs.js.map