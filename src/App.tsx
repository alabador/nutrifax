import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'

export interface Common {
  common_type: any,
  food_name: string,
  locale: string,
  photo: {
    thumb: string,
  }
  serving_qty: number,
  serving_unity: string,
  tag_id: string,
  tag_name: string,
}


function App() {
  
  const [food, setFood] = useState<string>('apple')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('test')
    event.target.value.trim().length !== 0 
      ? setFood(event.target.value)
      : setFood("a")
      //figure out how to conditionally render placeholder if empty input
  }

  const [common, setCommon] = useState<Common[]>([])
  const [branded, setBranded] = useState([])
  
  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${food}`, {
        headers: {
          'x-app-id': `${import.meta.env.VITE_APP_ID}`,
          'x-app-key': `${import.meta.env.VITE_APP_KEY}`
        },
      })
      const data = await res.json()
      setCommon(data.common)
      setBranded(data.branded)
    }
    setTimeout(() => {
      getData()
    }, 1000)
  }, [food])



  return (
    <Routes>
      <Route path='/' element={<Home common={common} handleChange={handleChange} food={food}/>}/>
      <Route path='/info' element={<Info />}/>
    </Routes>
  )
}

export default App
