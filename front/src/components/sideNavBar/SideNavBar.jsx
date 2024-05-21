// Importation des dépendances nécessaires
import React from "react";
import { Link } from "react-router-dom";
// Importation des icônes pour la barre de navigation
import iconOne from "../../assets/iconsVerticalNav/icon1.png";
import iconTwo from "../../assets/iconsVerticalNav/icon2.png";
import iconThree from "../../assets/iconsVerticalNav/icon3.png";
import iconFour from "../../assets/iconsVerticalNav/icon4.png";

// Création d'un tableau d'objets contenant les icônes et leurs descriptions
const icons = [
  { src: iconOne, alt: "logo sportsee 1" },
  { src: iconTwo, alt: "logo sportsee 2" },
  { src: iconThree, alt: "logo sportsee 3" },
  { src: iconFour, alt: "logo sportsee 4" },
];

// Définition du composant VerticalNavBar
const VerticalNavBar = () => {
  // Le composant retourne une barre de navigation verticale
  return (
    <nav className="nav_list">
      <ul className="nav_list--icon">
        {/* Pour chaque icône dans le tableau icons, on crée un élément de liste contenant un lien vers "/toto" avec l'icône correspondante */}
        {icons.map((icon, index) => (
          <li key={index}>
            <Link className="nav_icon" to="/toto">
              <img className="nav_icon--logo" src={icon.src} alt={icon.alt} />
            </Link>
          </li>
        ))}
      </ul>
      {/* Affichage du copyright */}
      <div className="copyright">
        <p className="copyright_name">Copyright, SportSee 2020</p>
      </div>
    </nav>
  );
};

// Exportation du composant VerticalNavBar
export default VerticalNavBar;
