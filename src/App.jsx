import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo&pretty=true`
      );
      const data = await res.json();
      setImages(data.hits);
      setLoading(false);
    };

    fetchData();
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      <div className="flex flex-row flex-wrap justify-center">
        {
          !loading && images.length === 0 && <h1 className="text-center text-6xl mt-32">No images found</h1>
        }
        {
          loading ? <h1 className="text-center text-6xl mt-32">Loading....</h1> : images.map((img) => {
            return <ImageCard key={img.id} image={img} />;
          })}
      </div>
    </div>
  );
}

export default App;
