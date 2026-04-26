import { useState, useEffect } from "react";
import axios from "axios";
import './Gallery.css'

const Gallery = () => {
    const [gallery, setGallery] = useState(null);
    const [loading, setLoading] = useState(true);

    const GALLERY_API = "55596091-b120d129102fc655260990f7e";

  const fetchGallery = async () => {
    try {
      const response = await axios.get(
        "https://pixabay.com/api/",
        {
          params: {
            q: "nature",
            language: "en",
            key: GALLERY_API,
          },
        }
      );

      setGallery(response.data.hits.slice(0, 3));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
        <h2 className="gallery-title">Beautiful nature</h2>
        <div className="gallery">
            
            {gallery.map((item) => (
                <img
                    className="gallery-image"
                    key={item.id}
                    src={item.webformatURL}
                    alt={item.tags}
                />
            ))}
        </div>
    </>
  );
}

export default Gallery;