import './App.css'
import { Card } from './components/Card'
import CardTwo from './components/CardTwo';
import Counter from './components/Counter';
import FruitList from './components/FruitList';
import OrderForm from './components/OrderForm';
import type { Fruit } from './types';

const menu: Fruit[] = [
  { id: 1, name: "Apple", price: 294 },
  { id: 2, name: "Guava", price: 3 },
  { id: 3, name: "Orange", price: 29 },
];

function App() {

  return (
    <>
      <div>
        <Card name={"Headphones"} price={5000} />
        <Card name={"iPhone"} price={80000} />
      </div>
      <div>
        <Counter/> 
      </div>
      <div>
        <FruitList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={ ( order ) => {
            console.log(`Ordered ${order.cups} ${order.name}`);
          } }
        />
      </div>
      <div>
        <CardTwo title={"Parth"} footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App
