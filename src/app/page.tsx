import Search from "@/components/home/Search";
import ImageGrid from "@/components/home/ImageGrid";
export default function Home() {
  return (
    <main>
      <Search />
      <p className="mt-4 text-4xl text-white font-semibold font-mono text-center">
        FlexGallery Where Every Pixel Tells a Story!
      </p>
      <ImageGrid />
    </main>
  );
}
