import Navbar from "./Conponent/Navbar";
import Search from "./Conponent/Search";
import Contacts from "./Conponent/Contacts";
import Chat from "./Conponent/Chat";
// import ChatMobile from "./Conponent/ChatMobile";
// import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="md:flex lg:h-screen md:h-screen">
        <div className="">
          {/* NAVABR */}
          <Navbar />
          {/* SEARCH */}
          <Search />
          {/* CONTACT */}
          <Contacts />
        </div>
        {/* CHAT */}
        <Chat />
      </div>
      {/* <Routes>
        <Route path='/chat' element={<ChatMobile />} />
      </Routes> */}
    </div>
  );
}

export default App
