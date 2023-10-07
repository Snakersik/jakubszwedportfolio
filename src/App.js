import thumbnail1 from "./assets/img/thumbnail1.jpg";
import thumbnail2 from "./assets/img/thumbnail2.jpg";
import thumbnail3 from "./assets/img/thumbnail3.jpg";
import thumbnail4 from "./assets/img/thumbnail4.jpg";
import thumbnail5 from "./assets/img/thumbnail5.jpg";

import { useState, useEffect, useCallback } from "react";

// thumnbail and embeded link for adding item. IF  you want to add new item just import thumnail photo and paste link
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
  {
    name: thumbnail4,
    link: "https://www.youtube.com/embed/TuZNcEucbgs?si=Hgkhg2ZcIjBJiYMF",
  },
  {
    name: thumbnail5,
    link: "https://www.youtube.com/embed/t90qstGG_qA?si=hD9eh7NvaU52dD1_",
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
    <div className="logo">
      <h1>Jakub Szwed</h1>
      <h2>FILMMAKER</h2>
      <div className="description">
        <h3>EDITING </h3>

        <h3> CINEMATOGRAPHY </h3>

        <h3> MUSIC VIDEO</h3>
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
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-information">
      <h1>Contact information</h1>
      <div className="contact-legend">
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
          <a
            href="https://www.facebook.com/jakub.szwed.942/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-facebook fa-3x"></i>
          </a>
          <a
            href="https://instagram.com/kubus.alkthr?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram fa-3x"></i>
          </a>
          <a
            href="https://www.youtube.com/@jakubszwedfilms/featured"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-youtube fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
