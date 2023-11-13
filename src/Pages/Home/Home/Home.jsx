import BistroBossHero from "../BistroBossHero/BistroBossHero";
import Category from "../Category/Category";
import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBossHero></BistroBossHero>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;