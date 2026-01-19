import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { Card } from './components/Card';
import CardTwo from './components/CardTwo';
import Counter from './components/Counter';
import FruitList from './components/FruitList';
import OrderForm from './components/OrderForm';
const menu = [
    { id: 1, name: "Apple", price: 294 },
    { id: 2, name: "Guava", price: 3 },
    { id: 3, name: "Orange", price: 29 },
];
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Card, { name: "Headphones", price: 5000 }), _jsx(Card, { name: "iPhone", price: 80000 })] }), _jsx("div", { children: _jsx(Counter, {}) }), _jsx("div", { children: _jsx(FruitList, { items: menu }) }), _jsx("div", { children: _jsx(OrderForm, { onSubmit: (order) => {
                        console.log(`Ordered ${order.cups} ${order.name}`);
                    } }) }), _jsx("div", { children: _jsx(CardTwo, { title: "Parth", footer: _jsx("button", { children: "Order Now" }) }) })] }));
}
export default App;
//# sourceMappingURL=App.js.map