import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  
  return (
   <main>
      
      <Navbar/>

      <div className="flex mt-18">
        <Sidebar/>
        <Feed/>

      </div>

   </main>
  )
}

export default App
