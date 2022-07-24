import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid w-screen place-items-center">
      <div className='grid grid-cols-3 gap-3 mb-3 justify-center'>
        <a href="https://vitejs.dev" className='flex justify-center' target="_blank">
          <img src="/vite.svg" className="logo w-15" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" className='flex justify-center' target="_blank">
          <img src={reactLogo} className="logo react w-15" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com"className='flex justify-center' target="_blank">
          <img src={tailwindLogo} className="logo w-14" alt="React logo" />
        </a>
      </div>
      
      <h1 className='text-center'>Vite + React + TailWind</h1>
      <div className="card grid place-items-center">
        <button className='my-3' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-lg'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
