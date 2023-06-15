import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage(props) {
  useEffect(() => {
    props.dispatch({
      type: 'SET_PAGE',
      payload: {
        headline: "Oliver Fjordside",
        sidebar: (
          <div className="flex flex-col space-y-0">

            <Link to="/design" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Design & Art
              </div>
            </Link>

            <Link to="/blog" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Blog and writings
              </div>
            </Link>

            <Link to="/about" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                About me
              </div>
            </Link>

            <Link to="/input" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Input
              </div>
            </Link>


            {/* Add more tabs here */}
          </div>
        ),
        main: (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold pt-4 ">Welcome to my portfolio and my blog</h2>
            <p className="text-lg ">I am a writer, designer, developer and artist. Here you can find examples of my work.</p>


            <img src="/Profilbillede.jpg" alt="Descriptive text" className="w-1/2 mx-auto rounded-full border-2 border-black" />
          </div>
        ),
      }
    });
  }, []);

  return null; // The actual rendering is handled by the App component
}

export default HomePage;