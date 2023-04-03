import { Route, Router, Routes } from "react-router-dom";
import ShowPage from "../../pages/ShowPage";
import AddPage from "../../pages/AddPage";
import Nav from "../Nav";


function App() {
  return (
    <div >
      <Nav/>
      <Routes>
        <Route path='/' element={<AddPage/>}/>
        <Route path='/show' element={<ShowPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
