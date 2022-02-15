import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import './App.css'
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
			 <Navbar />
      <div className="container">
				<SideBar />
        <Home /> 
			</div>
    </div>
  );
}

export default App;
