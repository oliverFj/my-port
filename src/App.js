import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer, createContext } from 'react';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogAndWritingsPage from "./pages/BlogAndWritingsPage";
import DesignAndArtPage from "./pages/DesignAndArtPage";
import FirebaseInput from "./pages/FirebaseInput";
import BlogDetailPage from "./pages/BlogDetailPage";
import Layout from "./Layout";

export const AppContext = createContext();

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
  const [state, dispatch] = useReducer(appReducer, {
    headline: '',
    sidebar: '',
    main: '',
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout headline={state.headline} sidebar={state.sidebar} main={state.main}>
              <HomePage dispatch={dispatch} />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout headline={state.headline} sidebar={state.sidebar} main={state.main}>
              <AboutPage dispatch={dispatch} />
            </Layout>
          } />
          <Route path="/blog" element={
            <Layout headline={state.headline} sidebar={state.sidebar} main={state.main}>
              <BlogAndWritingsPage dispatch={dispatch} />
            </Layout>
          } />
          <Route path="/design" element={<DesignAndArtPage />} />
          <Route path="/input" element={
            <Layout headline={state.headline} sidebar={state.sidebar} main={state.main}>
              <FirebaseInput dispatch={dispatch} />
            </Layout>
          } />
          <Route path="/blog/:id" element={
            <Layout headline={state.headline} sidebar={state.sidebar} main={state.main}>
              <BlogDetailPage />
            </Layout>
          } />
          {/* // Other routes... */}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;