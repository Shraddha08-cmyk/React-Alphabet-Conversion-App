import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Textarea from './components/TextArea';
// import State from './State';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
    <Textarea heading="Enter the text to coversion"/>
    {/* <State /> */}
    </div>
    </>
  );
}

export default App;
