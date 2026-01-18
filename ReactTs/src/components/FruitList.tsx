import type { Fruit } from '../types';
import { Card } from './Card';

interface FruitListProps {
  items: Fruit[]
}

function FruitList( { items }: FruitListProps ) {
  return (
    <div>
      Fruit List <br />
      { items.map((item) => (
        <Card
        key={item.id}
        name={item.name}
        price={item.price}
        isSpecial={item.price >= 30}
        />
      )) }
    </div>
  )
}

export default FruitList;
