const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error("Http error" + response.status);
        }
        const data = await response.json();
    }
    catch (error) {
    }
};
fetchData();
export {};
//# sourceMappingURL=fetch.js.map