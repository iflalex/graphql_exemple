import {Routes, Route} from 'react-router-dom';
// Components
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';

function App() {
  return (
  
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<CharactersList/>}
        />
        <Route
          path="/:id"
          element={<Character/>}
        />
      {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
