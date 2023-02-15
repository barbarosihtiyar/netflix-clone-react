
import React, { useState } from "react";
import netflixLogo from "../images/netflix.png";
import "../sass/register.css";
import { Link } from "react-router-dom";
import Television from "../images/tv.png";
import NetflixExampleMovie from "../images/netflixExampleMovie.jpg";
import Computer from "../images/computer.png";
import KidsMovie from "../images/kidsMovie.png";
import { AiOutlinePlus } from "react-icons/ai";

function Login() {
  const [vis,setVis] = useState(true);

  const changeVis = () => {
    setVis(!vis);
  }
  return (
    <section>
      <section className="sectionRegister">
        <div className="registerContainer">
          <div className="registerWrapper">
            <div className="registerHeader">
              <img src={netflixLogo} alt="" />
            </div>
            <div className="register">
              <div className="registerTitle">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h6>Watch anywhere. Cancel anytime.</h6>
                <span>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </span>
                <div className="registerInput">
                  <form>
                    <input type="email" placeholder="Email adress" />
                    <button type="button">Get Started</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="infoContainer">
          <div className="infoWrapper">
            <div className="part partInfoFirst">
              <div className="text">
                <h1>Enjoy on your TV.</h1>
                <h6>
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </h6>
              </div>
              <div className="image">
                <img src={Television} alt="" />
                <div className="video">
                  <video alt="" autoPlay playsinline muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="infoContainer">
          <div className="infoWrapper">
            <div className="part partInfoSecond">
              <div className="text">
                <h1>Download your shows to watch offline.</h1>
                <h6>
                  Save your favorites easily and always have something to watch.
                </h6>
              </div>
              <div className="image">
                <img src={NetflixExampleMovie} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="infoContainer">
          <div className="infoWrapper">
            <div className="part partInfoThird">
              <div className="text">
                <h1>Watch everywhere.</h1>
                <h6>
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV without paying more.
                </h6>
              </div>
              <div className="image">
                <img src={Computer} alt="" />
                <div className="video">
                  <video alt="" autoPlay playsinline muted loop>
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="infoContainer">
          <div className="infoWrapper">
            <div className="part partInfoSecond">
              <div className="text">
                <h1>Create profiles for kids.</h1>
                <h6>
                  Send kids on adventures with their favorite characters in a
                  space made just for them—free with your membership.
                </h6>
              </div>
              <div className="image">
                <img src={KidsMovie} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="infoContainer">
          <div className="infoWrapper"> 
            <div className="askedQuestions">
              <h1>Frequently Asked Questions</h1>
              <div className="asked askedFirst">
                <button onClick={changeVis} className="askedButton">
                  <span>What is Netflix?</span>
                  <AiOutlinePlus className={vis ? "plusIcon " : "plusIcon rotate  "} />
                </button>
                <div className={vis ? "answer answerFirst" : "block answerFirst"}>
                  <p className={vis ? "" : "collapse"}>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                  </p>
                  <p className={vis ? "" : "collapse"}>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </div>
              </div>
              <div className="asked askedFirst">
                <button className="askedButton">
                  <span> How much does Netflix cost?</span>
                  <AiOutlinePlus className="plusIcon" />
                </button>
              </div>

              <div className="asked askedFirst">
                <button className="askedButton">
                  <span> Where can I watch?</span>

                  <AiOutlinePlus className="plusIcon" />
                </button>
              </div>
              <div className="asked askedFirst">
                <button className="askedButton">
                  <span> How do I cancel?</span>
                  <AiOutlinePlus className="plusIcon" />
                </button>
              </div>
              <div className="asked askedFirst">
                <button className="askedButton">
                  <span> What can I watch on Netflix?</span>
                  <AiOutlinePlus className="plusIcon" />
                </button>
              </div>
              <div className="asked askedFirst">
                <button className="askedButton">
                  <span> Is Netflix good for kids?</span>
                  <AiOutlinePlus className="plusIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Login;
