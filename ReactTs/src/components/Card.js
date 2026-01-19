import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function Card({ name, price, isSpecial = false }) {
    return (_jsx(_Fragment, { children: _jsxs("article", { children: [_jsxs("h2", { children: [name, " ", isSpecial && _jsx("span", { children: "\u2B50" })] }), _jsx("p", { children: price })] }) }));
}
//# sourceMappingURL=Card.js.map