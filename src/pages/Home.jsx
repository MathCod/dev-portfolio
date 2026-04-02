import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="w-full py-20">
        <Banner />
        <div className="flex pt-10 text-center md:col-span-2">
        <p className="w-full text-2xl leading-relaxed">
              Développeur Front-end passionné par la création d'expériences numériques 
              uniques et performantes. Basé dans les Landes.
            </p>
        </div>
    </div>
  );
}

export default Home;