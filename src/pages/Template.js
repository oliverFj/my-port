import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function GenericPage(props) {
  useEffect(() => {
    props.dispatch({ 
      type: 'SET_PAGE', 
      payload: {
        headline: "{PAGE_TITLE}", // Replace with the page's title
        sidebar: (
          <div className="flex flex-col space-y-0">
            {/* Add your own links here, each should follow the pattern below */}
            <Link to="{LINK_PATH}" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                {LINK_TEXT} // Replace with the text for the link
              </div>
            </Link>
            {/* Add more links as needed */}
          </div>
        ),
        main: (
          <div className="space-y-4 text-center">
            {/* Customize the main content area with your own HTML */}
            <h2 className="text-2xl font-bold p-2 ">{MAIN_HEADING}</h2>
            <p className="text-lg p-2">{MAIN_PARAGRAPH}</p>
            
            <img src="{IMAGE_SRC}" alt="{IMAGE_ALT}" className="w-1/2 mx-auto rounded-full" />
          </div>
        ),
      } 
    });
  }, []);

  return null; // The actual rendering is handled by the App component
}

export default GenericPage;
