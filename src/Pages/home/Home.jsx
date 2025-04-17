// import { Profiler } from "react";
import Profile from "../../assets/yashwanth.jpeg";
import { Link } from "react-router";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import './home.css';

const Home = () => {
    return (
      <section className="home-container grid">
        <img src={Profile} alt="" className="home-img"/>    
        <div className="home-content">
          <h1 className="home-title"><span>- I'm Yashwanth A</span> <br /> Full Stack Developer</h1>
          <p className="home-description">​As I'm a Java Full Stack Developer, I specialize in creating dynamic, end-to-end web applications by integrating robust backend systems with intuitive frontend interfaces. Proficient in Java, Spring Boot, React, I ensure seamless user experiences across platforms.</p>                                                                     

          <Link to='/about' className="button">More About Me
            <span className="button-icon">
             <RiArrowRightDoubleFill />
            </span>
          </Link>
        </div>

        <div className="color-block">

        </div>
      </section>
    );
  };
  
  export default Home