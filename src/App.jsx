import { Routes,Route } from "react-router-dom"
import HomePages from "./pages/HomePages"
import KontakPges from "./pages/KontakPges"
import NavbarCompo from "./components/NavbarCompo"
import SemuaGambar from "./pages/SemuaGambar"




function App() {

  return (

    <div>

<NavbarCompo />

<Routes>
  <Route path="/" Component={HomePages}/>
  <Route path="/Kontak" Component={KontakPges}/>
  <Route path="/SemuaGambar" Component={SemuaGambar}/>

</Routes>
    </div>
  )
}

export default App
