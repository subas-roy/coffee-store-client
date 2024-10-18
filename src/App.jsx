import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Links from './components/Links';
import { Helmet } from 'react-helmet';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='px-24 py-2'>
    <Helmet>
      <title>Home | Coffee Store</title>
    </Helmet>
      <Links/>
      <h1 className='text-6xl text-purple-600 my-8 text-center'>Hot Hot cold coffees: {Array.isArray(coffees) && coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees?.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}/>)
        }
      </div>
    </div>
  )
}

export default App
