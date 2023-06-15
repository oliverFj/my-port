import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import text1 from '../texts/text1';
import db from '../firebase'; // Replace with the path to your Firebase file
import { onValue, ref } from "firebase/database";
import { AppContext } from '../App'; // path to your App file

// Import other text files...

function BlogAndWritingsPage(props) {
  const { state } = useContext(AppContext);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
        const writings = Object.values(snap.val());
        // Only update the state if the main content is currently set to display the list of writings
        if (state.main.type === 'div' && state.main.props.className.includes('space-y-4 text-center')) {
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
                </div>
              ),
              main: (
                /* This is a Card */
                <div className="space-y-4 text-center">
                  {writings.map((writing, index) => (
                    <div
                      key={index}
                      className="border-2 border-black m-2 p-2 text-left cursor-pointer"
                      onClick={() => {
                        // When the card is clicked, update the main state to display the full text of the writing
                        {writings.map((writing, index) => (
                          <Link key={index} to={`/blog/${index}`}>
                            <div className="border-2 border-black m-2 p-2 text-left">
                              <h3 className="text-xl font-bold">{writing.title}</h3>
                              <p>{writing.type}</p>
                            </div>
                          </Link>
                        ))}
                      }}
                    >
                      <h3 className="text-xl font-bold">{writing.title}</h3>
                      <p>{writing.type}</p>
                    </div>
                  ))}
                </div>
              ),
            }
          });
        }
      }
    }

    const dbRef = ref(db, 'Writings');
    const unsubscribe = onValue(dbRef, handleData, error => console.error(error));

    // Clean up function
    return () => unsubscribe();
  }, [state.sidebar]);  // Add state.sidebar as a dependency so that the effect reruns when it changes

  return null; // The actual rendering is handled by the App component
}

export default BlogAndWritingsPage;