import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from './Card';
function FruitList({ items }) {
    return (_jsxs("div", { children: ["Fruit List ", _jsx("br", {}), items.map((item) => (_jsx(Card, { name: item.name, price: item.price, isSpecial: item.price >= 30 }, item.id)))] }));
}
export default FruitList;
//# sourceMappingURL=FruitList.js.map