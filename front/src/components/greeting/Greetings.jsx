// Importation de la bibliothèque PropTypes pour la validation des types de props
import PropTypes from "prop-types";

// Définition du composant UserName qui affiche un message de bienvenue à l'utilisateur
const UserName = ({ userName }) => {
  return (
    <div className="user_title">
      {/* Création d'un titre qui affiche "Bonjour" suivi du prénom de l'utilisateur */}
      <h1 className="user_title--name">
        Bonjour <span>{userName?.firstName}</span>
      </h1>
      {/* Création d'un paragraphe qui affiche un message de félicitations à l'utilisateur */}
      <p className="user_title--congrat">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

// Définition des propTypes pour le composant UserName
// userName est un objet qui doit contenir une propriété firstName de type string
UserName.propTypes = {
  userName: PropTypes.shape({
    firstName: PropTypes.string,
  }),
};

// Exportation du composant UserName pour qu'il puisse être utilisé dans d'autres fichiers
export default UserName;
