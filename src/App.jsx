import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <h1 className='text-6xl text-purple-600 my-20 text-center'>Hot Hot cold coffees: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}/>)
        }
      </div>
    </>
  )
}

export default App
