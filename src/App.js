import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useReducer, useEffect, createContext } from 'react';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogAndWritingsPage from "./pages/BlogAndWritingsPage";
import DesignAndArtPage from "./pages/DesignAndArtPage";

// Import other page components...

// Define your context
export const AppContext = createContext();

// Define your reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        headline: action.payload.headline,
        sidebar: action.payload.sidebar,
        main: action.payload.main,
      };
    default:
      return state;
  }
}

function App() {
  // Initialize your reducer
  const [state, dispatch] = useReducer(appReducer, {
    headline: '',
    sidebar: '',
    main: '',
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage dispatch={dispatch} />} />
          <Route path="/about" element={<AboutPage dispatch={dispatch} />} />
          <Route path="/blog" element={<BlogAndWritingsPage dispatch={dispatch} />} />
          <Route path="/design" element={<DesignAndArtPage dispatch={dispatch} />} />
          {/* // Other routes... */}
        </Routes>

        <div className="flex items-center min-h-screen justify-center">
          <div className="w-[1000px] h-[750px] flex flex-col border-black">
            <header className="flex items-center w-full h-12 bg-orange-200 border-2 border-black">
              <h1 className="text-black text-xl text-left font-bold px-2">{state.headline}</h1>
            </header>

            <div className="flex flex-row flex-grow border-l-2 border-r-2 border-black">
              <aside className="w-1/3 border-r-2 border-black flex flex-col">

                {state.sidebar}

                {/* // Other menu items... */}
              </aside>

              <main className="w-2/3">
                {state.main}
              </main>
            </div>

              <footer className="w-full h-24 border-t-2 border-black">
                <Link to="/">
                  <img src="/FjordsideLogo.png" alt="Descriptive text" className="w-52 mx-auto float-right mt-1" />
                </Link>
              </footer>

          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;