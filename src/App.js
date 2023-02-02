
import './App.css';
import Address from './Componant/Profile/Address';
import FullName from './Componant/Profile/FullName';
import ProfilePhoto from './Componant/Profile/ProfilePhoto';


function App() {
  return (
    <div className='container'>
   <ProfilePhoto/>
   <FullName/>
   <Address/>
    </div>
  );
}

export default App;
