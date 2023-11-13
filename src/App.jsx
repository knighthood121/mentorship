import {BrowserRouter as Main,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import Header from './components/Header';
import person from "./assets/person.jpeg";
import logo from "./assets/logo.svg";
import arow from "./assets/arow.svg";

function App() {
  return (
    <>
     <Main>
      <Routes>
         <Route path='/home' element={<Home person={person} logo={logo} arow={arow}/>} /> 
         <Route path='/profile' element={<Profile logo={logo} person={person} />} /> 
         {/* <Route path='/' element={<Log_in/>} />  */}
         <Route path='/chats' element={<Chats/>} /> 
      </Routes>
     </Main>
     <Header/>
     
    </>
  );
}

export default App;
