//Importation des bibliothèques et des composants nécessaires
import React from "react";
import logoSportsee from "../../assets/logo-sportsee.png";
import { Link } from "react-router-dom";

// Définition des liens de navigation
const navLinks = [
  { path: "/", label: "Accueil" },
  { path: "/toto", label: "Profil" },
  { path: "/toto", label: "Réglage" },
  { path: "/toto", label: "Communauté" },
];

// Composant pour chaque lien de navigation
const NavLink = ({ path, label }) => (
  <li>
    <Link className="nav_link" to={path}>
      {label}
    </Link>
  </li>
);

// Composant principal pour l'en-tête de la page
const Header = () => {
  return (
    <nav className="nav_container">
      {/* Lien vers la page d'accueil avec le logo */}
      <Link className="nav_link" to="/home">
        <img
          className="nav_container--logo"
          src={logoSportsee}
          alt="logo sportsee"
        />
      </Link>
      {/* Liste des liens de navigation */}
      <ul className="nav_container--title">
        {navLinks.map((link, index) => (
          // Création d'un NavLink pour chaque lien de navigation
          <NavLink key={index} {...link} />
        ))}
      </ul>
    </nav>
  );
};

// Exportation du composant Header
export default Header;
