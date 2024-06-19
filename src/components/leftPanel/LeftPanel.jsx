import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

import "./leftPanel.css";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="container">
        <header>
          <FontAwesomeIcon icon={faXTwitter} />
        </header>
        <nav>
          <NavLink to="/">
            <span>Anasayfa</span>{" "}
          </NavLink>
          <NavLink to="/kesfet">
            <span>Keşfet</span>
          </NavLink>
          <NavLink to="/bildirimler">
            <span>Bildirimler</span>{" "}
          </NavLink>
          <NavLink to="/mesajlar">
            <span>Mesajlar</span>{" "}
          </NavLink>
          <NavLink to="/grok">
            <span>Grok</span>{" "}
          </NavLink>
          <NavLink to="/topluluklar">
            <span>Topluluklar</span>{" "}
          </NavLink>
          <NavLink to="/premium">
            <span>Premium</span>{" "}
          </NavLink>
          <NavLink to="/profil">
            <span>Profil</span>{" "}
          </NavLink>
          <button className="dahafazla">
            <span>Daha fazla</span>
          </button>
        </nav>
        <button className="tweet">Gonder</button>
        <footer>
          <button className="account">
            <div className="photo">
              <img
                alt="user"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div>
              <div className="name">Patates Potato</div>
              <div className="username">@Potatotes</div>
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LeftPanel;
