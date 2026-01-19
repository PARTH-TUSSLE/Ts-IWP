import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsxs("p", { children: ["No. of orders = ", counter] }), _jsx("button", { onClick: () => setCounter((prevcounter) => prevcounter + 1), children: "Order one more" })] }) }));
}
//# sourceMappingURL=Counter.js.map