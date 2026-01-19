import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
function OrderForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [cups, setCups] = useState(0);
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ name, cups });
    }
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { htmlFor: "name", children: "Fruit Name :" }), _jsx("input", { type: "text", id: "name", value: name, onChange: (e) => {
                    setName(e.target.value);
                } }), _jsx("label", { htmlFor: "cups", children: "Cups" }), _jsx("input", { type: "number", id: "cups", value: cups, onChange: (e) => {
                    setCups(Number(e.target.value));
                } }), _jsx("button", { type: "submit", children: "Place Order" })] }));
}
export default OrderForm;
//# sourceMappingURL=OrderForm.js.map