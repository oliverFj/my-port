import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useReducer, useEffect, createContext } from 'react';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogAndWritingsPage from "./pages/BlogAndWritingsPage";
import DesignAndArtPage from "./pages/DesignAndArtPage";
import FirebaseInput from "./pages/FirebaseInput";
import BlogDetailPage from "./pages/BlogDetailPage";


// Define your context and provide a default value for your reducer
export const AppContext = createContext();

// Define your reducer function
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
  // Initialize your reducer and state with the default value and function returned from useReducer
  const [state, dispatch] = useReducer(appReducer, {
    headline: '',
    sidebar: '',
    main: '',
  });

  return (
    // Wrap your app in the provider and pass the current state and dispatch function to the value prop of the provider object
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage dispatch={dispatch} />} />
          <Route path="/about" element={<AboutPage dispatch={dispatch} />} />
          <Route path="/blog" element={<BlogAndWritingsPage dispatch={dispatch} />} />
          <Route path="/design" element={<DesignAndArtPage dispatch={dispatch} />} />
          <Route path="/input" element={<FirebaseInput dispatch={dispatch} />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
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

                {/*  Other menu items... */}
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

// Export your App component
// This is what will be imported into index.js

export default App;