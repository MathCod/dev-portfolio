import About from "../components/About";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="w-full pt-10 pb-5 bg-slate-800">
        <Banner />
        <About />
    </div>
  );
}

export default Home;