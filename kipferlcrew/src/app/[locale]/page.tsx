import Navbar from "../navbar/components/Navbar";
import Parallax from "../spotlight/components/Parallax";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Parallax />
    </div>
  );
}
