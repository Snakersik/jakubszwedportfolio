import thumbnail1 from "./assets/img/thumbnail1.jpg";
import thumbnail2 from "./assets/img/thumbnail2.jpg";
import thumbnail3 from "./assets/img/thumbnail3.jpg";
import thumbnail4 from "./assets/img/thumbnail4.jpg";
import thumbnail5 from "./assets/img/thumbnail5.jpg";
import thumbnail6 from "./assets/img/thumbnail6.jpg";
import thumbnail7 from "./assets/img/thumbnail7.jpg";
import thumbnail8 from "./assets/img/thumbnail8.jpg";
// here going import just copy line and change number to +1
//and in folder assets/img put photo with name thumnbail + next letter(etc. thumnbail6 for next photfo)

import { useState, useCallback } from "react";

// thumnbail and embeded link for adding item. IF  you want to add new item just import thumnail photo and paste link
const thumbList = [
  {
    name: thumbnail8,
    link: "https://www.youtube.com/watch?v=WtpQOYR57ko",
  },
  {
    name: thumbnail7,
    link: "https://www.youtube.com/embed/Iw_8CK1icrw?si=E31ZE_rHsZHwQgjM",
  },
  {
    name: thumbnail5,
    link: "https://www.youtube.com/watch?v=t90qstGG_qA",
  },
  {
    name: thumbnail6,
    link: "https://www.youtube.com/embed/y3Jn0mdA3fQ?si=Yq57A9xRpuqkGenI",
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
    name: thumbnail1,
    link: "https://www.youtube.com/embed/KNYcYd5y78c?si=X_tOwBlwShisFwfK",
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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${thumb})` }}
      >
        <i
          className="fa-solid fa-play fa-4x"
          onClick={() => {
            if (link && link !== "" && thumb === thumbList[0].name) {
              openInNewTab(link);
            } else {
              changeModalDisplay();
            }
          }}
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
