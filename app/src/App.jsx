/*
The App component serves as the top-level component
or "root" component. It establishes the entire
web application's routing structure.
*/

/* eslint-disable no-unused-vars */
import BotSpecsPage from './pages/BotSpecsPage'
import NotFoundPage from './pages/NotFoundPage'
import BotPage from './pages/BotPage'
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import {
  useState,
  useEffect
} from 'react';

// DONE: import Routes and Route

const App = () => {
  // DONE: Render Routes with a Route for:
  // - BotPage when the URL matches "/"
  // - BotSpecsPage when the URL matches "/robots/:id"
  // - NotFoundPage when the URL doesn't match either of the above URLs


  return (
      <div className="App">
          {/* <BotPage /> */}
          <Routes>
            <Route path='/' element={<BotPage />} />
            <Route path='/robots/:id' element={<BotSpecsPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
      </div>
  );
}

export default App;
