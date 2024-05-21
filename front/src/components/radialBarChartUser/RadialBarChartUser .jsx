// Importation des dépendances nécessaires
import PropTypes from "prop-types";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// Définition des constantes pour le graphique
const CX_PERCENTAGE = "50%";
const CY_PERCENTAGE = "55%";
const INNER_RADIUS = "70%";
const OUTER_RADIUS = "83%";
const BAR_SIZE = 10;
const START_ANGLE = 90;
const END_ANGLE = 450;

/* Le composant RadialBarChartUser affiche le score de l'utilisateur en pourcentage de son objectif.*/

const RadialBarChartUser = ({ userScore }) => {
  // Calcul du score en pourcentage
  const score = userScore
    ? parseInt((userScore.todayScore || userScore.score) * 100)
    : 0;

  // Préparation des données pour le graphique
  const data = [
    {
      name: "Score",
      value: score,
    },
  ];

  // Rendu du composant
  return (
    <div className="user_score">
      <h1 className="score_title">Score</h1>
      <div className="score">
        <span className="score_percentage">{score}%</span>
        <br />
        <span className="score_label">de votre objectif</span>
      </div>

      <ResponsiveContainer width={"100%"} height={"100%"}>
        <RadialBarChart
          cx={CX_PERCENTAGE}
          cy={CY_PERCENTAGE}
          innerRadius={INNER_RADIUS}
          outerRadius={OUTER_RADIUS}
          barSize={BAR_SIZE}
          data={data}
          startAngle={START_ANGLE}
          endAngle={END_ANGLE}
        >
          <circle
            cx={CX_PERCENTAGE}
            cy={CY_PERCENTAGE}
            fill="white"
            r="80"
          ></circle>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="value" cornerRadius={10} fill="#FF0000" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Vérification des types des props
RadialBarChartUser.propTypes = {
  userScore: PropTypes.shape({
    todayScore: PropTypes.number,
    score: PropTypes.number,
  }),
};

// Exportation du composant
export default RadialBarChartUser;