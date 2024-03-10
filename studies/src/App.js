import { RegularList } from "./RegularList"
import { SmallPersonListItem } from "./people/SmallPersonListItem"
import { LargePersonListItem } from "./people/LargePersonListItem"
import { SmallProductListItem } from "./products/SmallProductListItem"
import { LargeProductListItem } from "./products/LargeProductListItem"
import { NumberedList } from "./NumberedList"

const people = [{ 
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: [ 'gym', 'bicycling', 'video games' ],
}, {
  name: 'Maria Hill',
  age: 32,
  hairColor: 'black',
  hobbies: [ 'shot', 'fight' ],
}, {
  name: 'Alice Smith',
  age: 28,
  hairColor: 'blonde',
  hobbies: ['reading', 'hiking', 'coding'],
},
{
  name: 'Bob Johnson',
  age: 45,
  hairColor: 'red',
  hobbies: ['gardening', 'painting', 'swimming'],
},
{
  name: 'Charlie Davis',
  age: 37,
  hairColor: 'black',
  hobbies: ['cooking', 'traveling', 'photography'],
},
{
  name: 'Diana Brooks',
  age: 29,
  hairColor: 'brown',
  hobbies: ['yoga', 'blogging', 'chess'],
},
]

const products = [{
    name: 'TV',
    price: '$900',
    description: '27 pounds',
    rating: 3.6,
  }, {
    name: 'Smartphone',
    price: '$600',
    description: '5.8 inch screen, 12MP camera',
    rating: 4.5,
  },
  {
    name: 'Laptop',
    price: '$1200',
    description: '15 inch screen, 256GB SSD, 8GB RAM',
    rating: 4.7,
  },
  {
    name: 'Headphones',
    price: '$150',
    description: 'Noise cancelling, over-ear, wireless',
    rating: 4.3,
  },
  {
    name: 'Coffee Maker',
    price: '$99',
    description: '12 cup capacity, programmable',
    rating: 4.0,
  },
]

function App(){
  return <>
    <RegularList
      items={people}
      resourceName='person'
      itemComponent={SmallPersonListItem}
    />
    <NumberedList
      items={people}
      resourceName='person'
      itemComponent={LargePersonListItem}
    />
    <RegularList
      items={products}
      resourceName='product'
      itemComponent={SmallProductListItem}
    />
    <NumberedList
      items={products}
      resourceName='product'
      itemComponent={LargeProductListItem}
    />
  </> 
}

export default App;