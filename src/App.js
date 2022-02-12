import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar/SideBar";
import './App.css'
 

function App() {
  return (
    <div className="App">
			 <Navbar />
      <div className="container">
				<SideBar />
       <div className="other"> 
			  	<p>center</p>
			 </div>
			</div>
    </div>
  );
}

export default App;
