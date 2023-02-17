import './App.css';
import Meals from "../src/Components/Meals/Meals"
import { useState } from 'react';


// load images

import pizzaIMG from './img/pizza.jpg';
import pastaIMG from './img/alfredo.jpg';
import noodleIMG from './img/banmian.jpg';
import cheeseCakeIMG from './img/cheesecake.jpg';
import chickenIMG from './img/kung-pao-chicken.jpg';
import ramenIMG from './img/ramen.jpg';
import wrapIMG from './img/chickenWrap.jpg'

// local data
const Data = [
  {
    id:'1',
    title:'Classic Pizza',
    description:'Hand-tossed original crust and signature pizza sauce topped with premium pepperoni and cheese.',
    image: pizzaIMG,
    price:20
  },
  {
    id:'2',
    title:'Alfredo Pasta',
    image:pastaIMG,
    description:'Fettuccini in a Parmeasan white wine Alfredo sauce with fresh spinach and gree papers. Finished with parmesan and a zest of lime.',
    price:20
  },
  {
    id:'3',
    title:'Classic Beef Noodles',
    description:'Hand-made classic noodles and a boiled egg in spicy beef soup.',
    image: noodleIMG,
    price:20
  },
  {
    id:'4',
    title:'Cheese Cake',
    description:'A sweet dessert consisting of multiple more layers. The main layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.',
    image: cheeseCakeIMG,
    price:20
  },
  {
    id:'5',
    title:'Kung Pao Chicken',
    description:'',
    image: chickenIMG,
    price:20
  },
  {
    id:'6',
    title:'Reman',
    description:'',
    image: ramenIMG,
    price:20
  },
  {
    id:'7',
    title:'Chicken Wrap',
    description:'',
    image: wrapIMG,
    price:20
  },
];


function App() {

  const [localData, setLocalData] = useState(Data);


  return (
    <>
      <Meals mealData = {localData}/>
    </>
  );
}

export default App;
