import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import text1 from '../texts/text1';
import text2 from '../texts/text2';
import text3 from '../texts/text3';
import text4 from '../texts/text4';
// Import other text files...

function BlogAndWritingsPage(props) {
  const texts = [text1, text2, text3, text4]; // Include other text files...

  useEffect(() => {
    props.dispatch({
      type: 'SET_PAGE',
      payload: {
        headline: "Blog and Writings",
        sidebar: (
          <div className="flex flex-col space-y-0">
            <Link to="/blog/blog" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Blog
              </div>
            </Link>

            <Link to="/blog/essay" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Essay
              </div>
            </Link>

            <Link to="/blog/poems" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Poems
              </div>
            </Link>

            <Link to="/" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Back
              </div>
            </Link>

            {/* Add more tabs here */}
          </div>
        ),
        main: (
          <div className="space-y-4 text-center">
            
            {texts.slice(0, 4).map((text, index) => (
              <div key={index} className="border-2 border-black m-2 p-2 text-left">
                <h3>{text.title}</h3>
                <p>{text.description}</p>
              </div>
            ))}
            {/* Add pagination here */}
          </div>
        ),
      }
    });
  }, []);

  return null; // The actual rendering is handled by the App component
}

export default BlogAndWritingsPage;