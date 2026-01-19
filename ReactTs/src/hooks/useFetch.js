import { useEffect, useState } from "react";
export function useFetch(url) {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    // useEffect to make the fetch request
    return state;
}
//# sourceMappingURL=useFetch.js.map