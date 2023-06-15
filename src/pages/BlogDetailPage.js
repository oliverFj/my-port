import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App';  // Adjust this path according to your project structure
import db from '../firebase'; // Replace with the path to your Firebase file
import { onValue, ref } from "firebase/database";

function BlogDetailPage() {
  const { id } = useParams();
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const dbRef = ref(db, `Writings/${id}`);
    const unsubscribe = onValue(dbRef, snap => {
      if (snap.val()) {
        const writing = snap.val();
        dispatch({
          type: 'SET_PAGE',
          payload: {
            headline: writing.title,
            main: (
              <div className="m-2 p-2 text-left">
                <h3 className="text-xl font-bold">{writing.title}</h3>
                <p>{writing.text}</p>
              </div>
            ),
          }
        });
      }
    }, error => console.error(error));

    // Clean up function
    return () => unsubscribe();
  }, [id, dispatch]);

  return null;
}

export default BlogDetailPage;