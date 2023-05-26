import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'


function App() {
  const [food, setFood] = useState<string>('apple')
  const [result, setResult] = useState({})
  
  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${food}`, {
        headers: {
          'x-app-id': `${import.meta.env.VITE_APP_ID}`,
          'x-app-key': `${import.meta.env.VITE_APP_KEY}`
        },
      })
      const data = await res.json()
      console.log(data)
      setResult(data)
    }
    getData()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/info' element={<Info />}/>
    </Routes>
  )
}

export default App
