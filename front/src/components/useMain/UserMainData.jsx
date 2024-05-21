// Importation des dépendances nécessaires
import PropTypes from "prop-types";
// Importation des icônes
import caloriIcon from "../../assets/iconsEnergy/calories-icon.png";
import proteinIcon from "../../assets/iconsEnergy/protein-icon.png";
import appleIcon from "../../assets/iconsEnergy/apple-icon.png";
import burgerIcon from "../../assets/iconsEnergy/burger-icon.png";

// Le composant EnergyInfo affiche une information énergétique avec une icône, un texte alternatif, un nombre et un nom.
const EnergyInfo = ({ icon, altText, count, name }) => (
  <div className="energy_info">
    {/* Affichage de l'icône */}
    <img className="energy_info--logo" src={icon} alt={altText} />
    <div className="info_calorie">
      {/* Affichage du nombre */}
      <p className="info_calorie--number">{count}</p>
      {/* Affichage du nom */}
      <p className="info_calorie--name">{name}</p>
    </div>
  </div>
);

// Vérification des types des props
EnergyInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

// Le composant UserMainData affiche les informations principales de l'utilisateur.
const UserMainData = ({ userData }) => {
  return (
    <>
      {userData && (
        <div className="energy_container">
          {/* Affichage des informations énergétiques pour les calories, protéines, glucides et lipides */}
          <EnergyInfo
            icon={caloriIcon}
            altText="logo calorie"
            count={userData.keyData.calorieCount}
            name="calories"
          />
          <EnergyInfo
            icon={proteinIcon}
            altText="logo protein"
            count={userData.keyData.proteinCount}
            name="protéines"
          />
          <EnergyInfo
            icon={appleIcon}
            altText="logo apple"
            count={userData.keyData.carbohydrateCount}
            name="glucides"
          />
          <EnergyInfo
            icon={burgerIcon}
            altText="logo burger"
            count={userData.keyData.lipidCount}
            name="lipides"
          />
        </div>
      )}
    </>
  );
};

// Vérification des types des props
UserMainData.propTypes = {
  userData: PropTypes.shape({
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number,
      proteinCount: PropTypes.number,
      carbohydrateCount: PropTypes.number,
      lipidCount: PropTypes.number,
    }),
  }),
};

// Exportation du composant
export default UserMainData;