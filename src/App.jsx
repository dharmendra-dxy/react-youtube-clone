import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  
  return (
   <main>
      
      <Navbar/>

      <div className="flex mt-14">
        <Sidebar/>

      </div>

   </main>
  )
}

export default App
