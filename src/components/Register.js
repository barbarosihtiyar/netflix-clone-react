import React, { useState } from "react";
import netflixLogo from "../images/netflix.png";
import "../sass/register.css";
import { Link } from "react-router-dom";
import Television from "../images/tv.png";
import NetflixExampleMovie from "../images/netflixExampleMovie.jpg";
import Computer from "../images/computer.png";
import KidsMovie from "../images/kidsMovie.png";
import { AiOutlinePlus } from "react-icons/ai";

function Register() {
  const [firstVis, setFirstVis] = useState(true);
  const [secondVis, setSecondVis] = useState(true);
  const [thirdVis, setThirdVis] = useState(true);
  const [fourthVis, setFourthVis] = useState(true);
  const [fivethVis, setFivethVis] = useState(true);
  const [sixthVis, setSixthVis] = useState(true);

  
  const changesVisFirst = () => {
   setFirstVis(!firstVis);
   setSecondVis(true);
   setThirdVis(true);
   setFourthVis(true);
   setFivethVis(true);
   setSixthVis(true);
  }
  const changesVisSecond = () => {
    setSecondVis(!secondVis);
    setFirstVis(true);
    setThirdVis(true);
    setFourthVis(true);
    setFivethVis(true);
    setSixthVis(true);
   }
   const changesVisThird = () => {
    setThirdVis(!thirdVis);
    setSecondVis(true);
    setFirstVis(true);
    setFourthVis(true);
    setFivethVis(true);
    setSixthVis(true);
   }
   const changesVisFourth = () => {
    setFourthVis(!fourthVis);
    setSecondVis(true);
    setThirdVis(true);
    setFirstVis(true);
    setFivethVis(true);
    setSixthVis(true);
   }
   const changesVisFiveth = () => {
    setFivethVis(!fivethVis);
    setSecondVis(true);
    setThirdVis(true);
    setFourthVis(true);
    setFirstVis(true);
    setSixthVis(true);
   }
   const changesVisSixth = () => {
    setSixthVis(!sixthVis);
    setSecondVis(true);
    setThirdVis(true);
    setFourthVis(true);
    setFivethVis(true);
    setFirstVis(true);
   }     

  return (
    <main>
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
                    <input id="inputInfo" type="text" placeholder="Email adress" />
                    <button type="submit" style={{cursor:"pointer"}}>Get Started</button>
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
                <button  className="askedButton askedButtonFirst" onClick={changesVisFirst}>
                  <span>What is Netflix?</span>
                  <AiOutlinePlus
                    className={firstVis ? "plusIcon " : "plusIcon rotate  "}
                  />
                </button>
                <div
                  className={firstVis ? "answer answerFirst" : "block answerFirst"}
                >
                  <p className={firstVis ? "" : "collapse"}>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                  <br/>
                  <br/>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </div>
              </div>
              <div className="asked askedFirst">
                <button onClick={changesVisSecond} className="askedButton">
                  <span>How much does Netflix cost?</span>
                  <AiOutlinePlus
                    className={secondVis ? "plusIcon " : "plusIcon rotate  "}
                  />
                </button>
                <div
                  className={secondVis ? "answer answerFirst" : "block answerFirst"}
                >
                  <p className={secondVis ? "" : "collapse"}>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from 63.99 TL to 130.99 TL a month. No extra costs, no
                    contracts.
                    </p>
                </div>
              </div>
              <div className="asked askedFirst">
                <button  className="askedButton"  onClick={changesVisThird}>
                  <span>Where can I watch?</span>
                  <AiOutlinePlus
                    className={thirdVis ? "plusIcon " : "plusIcon rotate  "}
                  />
                </button>
                <div
                  className={thirdVis ? "answer answerFirst" : "block answerFirst"}
                >
                  <p className={thirdVis ? "" : "collapse"}>
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles.
                    <br/>
                  <br/>
                    You can also download your favorite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you're on the go and without an internet connection. Take
                    Netflix with you anywhere.
                  </p>
                </div>
              </div>
              <div className="asked askedFirst">
                <button  className="askedButton" onClick={changesVisFourth}>
                  <span>How do I cancel?</span>
                  <AiOutlinePlus
                    className={fourthVis ? "plusIcon " : "plusIcon rotate  "}
                  />
                </button>
                <div
                  className={fourthVis ? "answer answerFirst" : "block answerFirst"}
                >
                  <p className={fourthVis ? "" : "collapse"}>
                    Netflix is flexible. There are no pesky contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </p>
                </div>
              </div>
              <div className="asked askedFirst">
                <button  className="askedButton" onClick={changesVisFiveth}>
                  <span>What can I watch on Netflix?</span>
                  <AiOutlinePlus
                    className={fivethVis ? "plusIcon " : "plusIcon rotate  "}
                  />
                </button>
                <div
                  className={fivethVis ? "answer answerFirst" : "block answerFirst"}
                >
                  <p className={fivethVis ? "" : "collapse"}>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </div>
              </div>
              <div className="asked askedFirst">
                <button  className="askedButton" onClick={changesVisSixth}>
                  <span>Is Netflix good for kids?</span>
                  <AiOutlinePlus
                    className={sixthVis ? "plusIcon " : "plusIcon rotate  "}
                  />
                </button>
                <div
                  className={sixthVis ? "answer answerFirst" : "block answerFirst"}
                >
                  <p className={sixthVis ? "" : "collapse"}>
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and movies in their own space.
                  <br/>
                  <br/>
                    Kids profiles come with PIN-protected parental controls that
                    let you restrict the maturity rating of content kids can
                    watch and block specific titles you don’t want kids to see.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
