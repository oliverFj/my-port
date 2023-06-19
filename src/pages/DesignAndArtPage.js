import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import db from '../firebase'; // adjust the path to your firebase file
import Menu from '../components/menu';
import Gallery from '../components/gallery';

import { useContext } from 'react';
import Layout from '../Layout'; // adjust the path to your Layout file
import { AppContext } from '../App'; // adjust the path to your App file

function DesignAndArtPage(props) {
  const { state, dispatch } = useContext(AppContext);

  const menuItems = [
    { link: '/design/3d-characters', label: '3D Characters' },
    { link: '/design/art', label: 'Art' },
    { link: '/design/product-design', label: 'Product Design' },
    { link: '/', label: 'Back' },
  ];

  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    // Fetch data from Realtime Database
    const dbRef = ref(db, 'art');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const items = [];
      for (let id in data) {
        items.push({ image: data[id].imageThumbnail, alt: data[id].name, title: data[id].name });
      }
      console.log("Mapped items:", items);
      setGalleryItems(items);
    });
  }, []);

  useEffect(() => {
    dispatch({ 
      type: 'SET_PAGE', 
      payload: {
        headline: "Design & Art",
        sidebar: <Menu items={menuItems} />,
        main: <Gallery items={galleryItems} page={1} totalPages={5} />,
      } 
    });
  }, [galleryItems]);

  return (
    <Layout headline={state.headline} sidebar={state.sidebar} main={state.main} />
  );
}

export default DesignAndArtPage;