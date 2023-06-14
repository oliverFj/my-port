import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function DesignAndArtPage(props) {
  useEffect(() => {
    props.dispatch({ 
      type: 'SET_PAGE', 
      payload: {
        headline: "Design & Art",
        sidebar: (
          <div className="flex flex-col space-y-0">
            {/* These links can be used to filter the gallery based on category */}
            <Link to="/design-art/3d-characters" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                3D Characters
              </div>
            </Link>

            <Link to="/design-art/art" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Art
              </div>
            </Link>

            <Link to="/design-art/product-design" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Product Design
              </div>
            </Link>

            <Link to="/" className="block hover:bg-gray-200">
              <div className="flex items-center h-12 text-center border-b-2 border-black text-black font-bold px-2 cursor-pointer">
                Back
              </div>
            </Link>


          </div>
        ),
        main: (
          <div className="space-y-4">

            
            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4 p-4">
              {/* Replace these placeholders with actual data from your database */}
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="border-2 p-2 border-black">
                  <img src={`/thumbnails/${i}.jpg`} alt={`Artwork ${i}`} className="w-full h-48 object-cover" />
                  <h3 className="mt-2 text-center font-bold">Artwork {i}</h3>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-4">
              {/* Replace these placeholders with actual page numbers */}
              {Array.from({ length: 5 }, (_, i) => (
                <Link key={i} to={`/design-art?page=${i+1}`} className="block w-8 h-8 border text-center line-height[32px] hover:bg-gray-200">
                  {i + 1}
                </Link>
              ))}
            </div>
          </div>
        ),
      } 
    });
  }, []);

  return null; // The actual rendering is handled by the App component
}

export default DesignAndArtPage;