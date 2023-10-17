//import { useState } from 'react'

import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import router from "@/router"

function App() {
  //const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <>

      <Suspense fallback={<div>Loading...</div>}>
      {outlet}
      </Suspense>
      
    </>
  )
}

export default App
