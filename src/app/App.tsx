import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LibraryProvider } from "../entities/library/model/LibraryContext.tsx";

import Header from "../widgets/Header/Header.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserLibrary from "../pages/UserLibrary.tsx";
import GamePage from "../pages/GamePage.tsx";

function App() {
  return (
    <LibraryProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<UserLibrary />}/>
            <Route path="/game/:id" element={<GamePage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </LibraryProvider>
  );
}

export default App;
