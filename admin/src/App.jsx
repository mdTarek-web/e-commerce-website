import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  const [token, setToken ] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  return (
    <main>
      <Navbar token={token} setToken={setToken}/>
      <div>
        <Sidebar/>
      </div>
    </main>
  )
}

export default App
