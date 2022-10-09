import logo from './logo.svg';
import User from './User'
import './App.css';
import HomeContainers from './containers/HomeContainers';
function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      {/* <User data={{ name:'pinaki sasmal',age:'25' }} /> */}
      <HomeContainers />
    </div>
  );
}

export default App;
