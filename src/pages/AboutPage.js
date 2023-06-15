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
                Who I Am
              </div>
            </Link>

            <Link to="/design-and-art" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Prototyping/CAD
              </div>
            </Link>

            <Link to="/design-and-art" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Web Design/Concept development
              </div>
            </Link>

            <Link to="/design-and-art" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                3D Modeling/Game development
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
          <div className="space-y-4 text-left">
            <h2 className="text-2xl font-bold p-2 ">Who am I?</h2>
            <p className="text-lg p-2">I'm like a person or something</p>

            <p className="text-lg justify- p-2">
              Who am I, you ask? Quite simply, I'm a connoisseur of life's most intricate mysteries, a tireless explorer of the human condition. Some might just say I'm "like a person or something". But let's face it, aren't we all a little more than "something"? 
              <img src="/AndetBillede.jpg" alt="A picture of me" className="w-1/2 float-right m-3 border-2 border-black " />
               Dive into the depths of my thoughts, explorations, and musings, and perhaps you'll find that you and I, we're not just "somethings", we're someones navigating this wild ride of existence. Welcome to my world.
            </p>
          </div>
        ),
      }
    });
  }, []);

  return null; // The actual rendering is handled by the App component
}

export default AboutPage;