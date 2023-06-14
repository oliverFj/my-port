import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AboutPage(props) {
  useEffect(() => {
    props.dispatch({ 
      type: 'SET_PAGE', 
      payload: {
        headline: "About",
        sidebar: (
          <div className="flex flex-col space-y-0">
            <Link to="/blog" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Blog
              </div>
            </Link>

            <Link to="/design-and-art" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Design & Art
              </div>
            </Link>

            <Link to="/" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Back
              </div>
            </Link>

            {/* Add more links as needed */}
          </div>
        ),
        main: (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold p-2 ">About Me</h2>
            <p className="text-lg p-2">I'm a writer, designer, developer, and artist. I love creating beautiful and functional designs, and I'm passionate about coding and digital art.</p>
            
            {/* Assuming you have an image named "AboutImage.jpg" in your public directory */}
            <img src="/AboutImage.jpg" alt="A picture of me" className="w-1/2 mx-auto rounded-full" />
          </div>
        ),
      } 
    });
  }, []);

  return null; // The actual rendering is handled by the App component
}

export default AboutPage;