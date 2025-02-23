import Navbar from '../Components/navbar';
import './App.css';
import Content from '../Components/content';

function App() {

  return (
    <>
     <div>
  <Navbar />
  {/* <h1 className="text-3xl font-bold underline text-center pt-10 hover:text-blue-500">
    Hello world!
  </h1> */}
  <Content />
     </div>
    </>
  )
}

export default App
