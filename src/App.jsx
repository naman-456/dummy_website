import { NavBar } from "./components/NavBar"
import { useEffect } from "react"
import router from "./routes"
import { RouterProvider } from "react-router-dom"
function App() {
  useEffect(() => {
     const headerEl = document.querySelector('.web-header')
     const headerHeight = headerEl.offsetHeight
     console.log('headerHeight ==>', headerHeight)
     document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
  }, [])

  return (
       <>
         <NavBar />
         <RouterProvider router={router} />
         
       </>
      )
}

export default App
