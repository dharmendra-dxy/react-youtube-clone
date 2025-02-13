import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import WatchVideo from "./components/WatchVideo"
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  
  return (
   <> 
    <BrowserRouter>

      <Navbar/>

      <div className="flex mt-18">
        <Sidebar/>

        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/watch" element={<WatchVideo/>}/>
        </Routes>
      </div>

      </BrowserRouter>

   </>
  )
}

export default App
