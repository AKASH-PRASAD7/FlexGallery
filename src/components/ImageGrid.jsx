import ImageCard from "./ImageCard";
import Loader from "./home/Loader";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageGrid = ({ images, loading = false }) => {
  return (
    <>
      <section className=" mx-4 mt-12 min-h-screen ">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {loading ? (
              <></>
            ) : (
              images?.map((image) => <ImageCard key={image.id} image={image} />)
            )}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </>
  );
};

export default ImageGrid;
