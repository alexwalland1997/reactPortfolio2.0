import Header from "../header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    dots: false,
    lazyLoad: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
  };
  return (
    <section id="projects">
      <Header heading={"My Projects"} />
      <div id="Projects">
        <div className="slider-container">
          <Slider {...settings}>
            <div id="container">
              <img src="https://raw.githubusercontent.com/alexwalland1997/wordleclone/refs/heads/master/image/wordle.png" />
              <h3>Wordle Clone</h3>
              <a href="https://alexwalland1997.github.io/wordleclone/" target="blank">
              <button className="link">Live Link</button>
              </a>
              <br />
              <a href="https://github.com/alexwalland1997/wordleclone" target="blank">
              <button className="link">Repo Link</button>
              </a>
            </div>
            <div id="container">
              <img src="https://raw.githubusercontent.com/porlowska/career-keys/main/public/screenshots/landing_page.png" />
              <h3>Career Keys</h3>
              <a href="https://career-keys.netlify.app/" target="blank">
              <button className="link">Live Link</button>
              </a>
              <br />
              <a href="https://github.com/porlowska/career-keys" target="blank">
              <button className="link">Repo Link</button>
              </a>
            </div>
            <div id="container">
              <img src="https://raw.githubusercontent.com/CodrinCarpovici/trimtutor/main/assets/images/trimtutor.png" />
              <h3>Trim Tutor</h3>
              <a href="https://codrincarpovici.github.io/trimtutor/" target="blank">
              <button className="link">Live Link</button>
              </a>
              <br />
              <a href="https://github.com/CodrinCarpovici/trimtutor" target="blank">
              <button className="link">Repo Link</button>
              </a>
            </div>
            <div id="container">
              <img src="https://github.com/alexwalland1997/password-generator/raw/main/images/example.png" />
              <h3>Password Generator</h3>
              <a href="https://alexwalland1997.github.io/password-generator" target="blank">
              <button className="link">Live Link</button>
              </a>
              <br />
              <a href="https://github.com/alexwalland1997/password-generator" target="blank">
              <button className="link">Repo Link</button>
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
