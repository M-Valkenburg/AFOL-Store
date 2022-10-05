import { Link } from "react-router-dom";
import "./home.scss";
import shipping from "../../assets/icons/shipping.svg";
import castle10305 from "../../assets/promotion/10305-promo.webp";
import castle6080 from "../../assets/promotion/6080.webp";
import knights from "../../assets/promotion/10305-minifigs.webp";
import space10497 from "../../assets/promotion/10497-promo.webp";
import space497 from "../../assets/promotion/497.webp";
import space918 from "../../assets/promotion/918.webp";
import space924 from "../../assets/promotion/924.webp";
import spaceFig from "../../assets/promotion/10497-minifig.webp";
import ferrari from "../../assets/promotion/42143-promo.webp";
import ferrariLogo from "../../assets/promotion/ferrari.webp";

const Home = () => {
    return (
        <div className="home">
            <section className="free-shipping">
                <p>FREE shipping with all orders over €150 <img src={shipping} alt="shipping" /></p>
            </section>
            <section className="promo-10305">
                <div className="castle-container">
                    <img className="promo lkc" src={castle10305} alt="10305 Lion Knights' Castle"/>
                    <img className="kk" src={castle6080} alt="6080 King's Castle"/>
                </div>
                <div className="desc-container">
                    <div className="text-container">
                        <h3>Go back in time, again!</h3>
                        <p>
                            Celebrate 90 years of LEGO® history with the new Lion Knights' Castle, an ode to the original castle set from 1984.
                            The impressive new Lion Knights' Castle reimagines the memorable medieval theme first introduced in the late 1970s.
                        </p>
                        <Link to="/product/10305"><button>Buy now &#10140;</button></Link>
                    </div>
                    <img src={knights} alt="Lion knights"></img>
                </div>
            </section>
            <section className="promo-10497">
                <div className="space-container">
                    <div className="classic-sets">
                        <img src={space924} alt="918 Space Transporter"/>
                        <img src={space497} alt="497 Galaxy Explorer"/>
                        <img src={space918} alt="924 Space Transport"/>
                    </div>
                    <img className="promo ge" src={space10497} alt="Galaxy Explorer"/>
                </div>
                <div className="desc-container">
                    <div className="text-container">
                        <h3>A 1970s classic - reimagined</h3>
                        <p>Celebrate 90 years of LEGO® creations as you build this scaled-up anniversary tribute to the Classic 497 Galaxy Explorer set.</p>
                        <p>
                            Alternitively, you can build the reimagined versions of the 918 Space Transport or the 924 Space Transporter.
                            Instructions for the reimagined versions are not included in the set. They can be downloaded 
                            from <a href="https://www.lego.com/en-us/service/buildinginstructions/10497" target="_blank" rel="noreferrer">Lego.com</a>
                        </p>
                        <Link to="/product/10497"><button>Buy now &#10140;</button></Link>
                    </div>
                    <img src={spaceFig} alt="Classic space minifigure"/>
                </div>
            </section>
            <section className="promo-42143">
                <img className="fd" src={ferrari} alt="42143 Ferrari Daytona SP3"/>
                <div className="desc-container">
                    <div className="text-container">
                        <h3>Take the scenic route</h3>
                        <p>Enter a zone of complete mindfulness with the impressive new LEGO® Technic Ferrari Daytona SP3.</p>
                        <p>This 1:8 scale model has 3,778 pieces, making it one of the biggest Technic vehicles ever.</p>
                        <Link to="/product/42143"><button>Buy now &#10140;</button></Link>
                    </div>
                    <img src={ferrariLogo} alt="Ferrari logo"/>
                </div>
            </section>
        </div>
    )
};

export default Home;