// Importation des dépendances nécessaires
import React from "react";
import PropTypes from "prop-types";
// Importation des images
import logoSportsee from "../../assets/logo-sportsee.png";
import logoGroup from "../../assets/group.png";
// Importation du composant Link de react-router-dom pour la navigation
import { Link } from "react-router-dom";
// Importation des données mockées
import { USER_MAIN_DATA } from "../../mockedData";

// Définition du composant UserLink qui affiche un lien vers le tableau de bord de l'utilisateur
const UserLink = ({ id, userInfos }) => {
  // Extraction des informations de l'utilisateur
  const { firstName, lastName } = userInfos;

  return (
    <div className="link_identity" key={id}>
      {/* Création d'un lien vers le tableau de bord de l'utilisateur */}
      <Link className="nav_link" to={`dashboard/${id}`}>
        {/* Affichage du logo du groupe */}
        <img className="logo_group" src={logoGroup} alt="logo sportsee" />
        {/* Affichage du nom de l'utilisateur */}
        <p className="identity">{`${firstName} ${lastName}`}</p>
      </Link>
    </div>
  );
};

// Vérification des types des props
UserLink.propTypes = {
  id: PropTypes.number.isRequired,
  userInfos: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

// Définition du composant Home qui affiche la page d'accueil
const Home = () => (
  <div>
    {/* Affichage du logo */}
    <img className="logo" src={logoSportsee} alt="logo sportsee" />
    {/* Affichage du titre */}
    <h1 className="logo_title">BIENVENUE !</h1>
    <div className="link_container">
      {/* Affichage des liens vers les tableaux de bord des utilisateurs */}
      {USER_MAIN_DATA.map((user) => (
        <UserLink key={user.id} {...user} />
      ))}
    </div>
  </div>
);

// Exportation du composant
export default Home;
