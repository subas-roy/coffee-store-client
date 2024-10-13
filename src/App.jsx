import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Links from './components/Links';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <h1 className='text-6xl text-purple-600 my-16 text-center'>Hot Hot cold coffees: {coffees.length}</h1>
      <Links/>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}/>)
        }
      </div>
    </>
  )
}

export default App
