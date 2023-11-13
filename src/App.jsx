import { BrowserRouter as Main, Routes, Route } from 'react-router-dom'
import '../src/styling/global.css'
import Home from "./pages/Home";
import Login from './pages/Login';
import Chat from './pages/Chat';
import Details from './pages/Details';
import Docs from './pages/Docs';
import Downloads from './pages/Downloads';
import EditProfile from './pages/EditProfile';
import EventDetails from './pages/EventDetails';
import History from './pages/History';
import Profile from './pages/Profile';
import ScheduleMeet from './pages/ScheduleMeet';

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/details' element={<Details />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/downloads' element={<Downloads />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/eventdetails' element={<EventDetails />} />
          <Route path='/history' element={<History />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/schedulemeet' element={<ScheduleMeet />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
