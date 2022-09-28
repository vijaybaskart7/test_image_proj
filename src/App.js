import './App.css';
import logo from './sample.jpg';

function App() {
  return (
    <div className="container">
      <div className="header">HEADER</div>
      <div className="content">
        <img className="img" src={logo} alt="logo" />
        <div class="overlay">This is a image overlay!
          <b><button onClick={() => alert("This is Alert!")}>Click me@</button></b>
        </div>
      </div>
      <div className="footer">FOOTER</div>
    </div>
  );
}

export default App;
