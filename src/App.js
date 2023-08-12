import thumbnail1 from "./assets/img/thumbnail1.jpg";
import thumbnail2 from "./assets/img/thumbnail2.jpg";
import thumbnail3 from "./assets/img/thumbnail3.jpg";
import contactPhoto from "./assets/img/contactRighBg.png";
import { useState, useEffect, useCallback } from "react";

const thumbList = [
  {
    name: thumbnail1,
    link: "https://www.youtube.com/embed/KNYcYd5y78c?si=X_tOwBlwShisFwfK",
  },
  {
    name: thumbnail2,
    link: "https://www.youtube.com/embed/oRUy7y00nRc?si=gkBpKLuNl07uheWi",
  },
  {
    name: thumbnail3,
    link: "https://www.youtube.com/embed/Gk_qbXGdfNM?si=EMMkg5nPpvWXz5w2",
  },
];

function App() {
  return (
    <div className="app">
      <Landing />
      <Category />
      <Portfolio />
      <ContactSection />
    </div>
  );
}

const Landing = () => {
  return (
    <div className="landing">
      <div className="logo">
        <h1>Jakub Szwed</h1>
        <h2>FILMMAKER</h2>
        <div className="description">
          <h3>EDITING </h3>

          <h3> CINEMATOGRAPHY </h3>

          <h3> MUSIC VIDEO</h3>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="category">
      <h1>Portfolio</h1>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      {thumbList.map((item) => (
        <ImageGallery thumb={item.name} link={item.link} />
      ))}
    </div>
  );
};

const ImageGallery = ({ thumb, link }) => {
  const [displayModal, setDisplayModal] = useState(false);

  const changeModalDisplay = useCallback(() => {
    setDisplayModal((modal) => !modal);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Escape" && displayModal) {
        changeModalDisplay();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [changeModalDisplay, displayModal]);

  return (
    <>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${thumb})` }}
      >
        <i
          className="fa-solid fa-play fa-4x"
          onClick={() => changeModalDisplay()}
        ></i>
      </div>
      {displayModal ? (
        <Modal closeModal={changeModalDisplay} link={link} />
      ) : (
        ""
      )}
    </>
  );
};

const Modal = ({ closeModal, link }) => {
  return (
    <div className="modal">
      <i class="fa-solid fa-x fa-3x" onClick={() => closeModal()}></i>
      <Player link={link} />
    </div>
  );
};

const Player = ({ link }) => {
  return (
    <iframe
      src={link}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowfullscreen
    ></iframe>
  );
};

const ContactSection = () => {
  return (
    <div className="contact-section">
      <Contact />
      <img src={contactPhoto} alt="contact information camera "></img>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-information">
      <h1>Contact information</h1>

      <p>
        <i class="fa-solid fa-phone"></i>
        +48 784 114 958
      </p>
      <p>
        <i class="fa-solid fa-envelope"></i>
        jsz.2002@gmail.com
      </p>
      <p>
        <i class="fa-solid fa-location-dot"></i>
        Poland, Wrocław 50-433
      </p>
      <div className="icons">
        <i class="fa-brands fa-facebook fa-3x"></i>
        <i class="fa-brands fa-instagram fa-3x"></i>
        <i class="fa-brands fa-vimeo fa-3x"></i>
      </div>
    </div>
  );
};

export default App;
