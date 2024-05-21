// Importation des bibliothèques et des composants nécessaires
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Style pour les étiquettes des axes
const tickStyle = {
  fill: "#9B9EAC",
  fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: "14px",
  textAlign: "center",
  dy: 5,
};

// Tableau des labels pour chaque jour de la semaine
const xTicks = [1, 2, 3, 4, 5, 6, 7];

// Style pour l'infobulle
const tooltipStyle = {
  color: "rgba(255, 255, 255, 1)",
  fontSize: "0.5rem",
  fontFamily: "Roboto",
  fontWeight: "500",
  padding: "15px 10px",
  backgroundColor: "rgba(230, 0, 0, 1)",
  textAlign: "center",
};

// Composant personnalisé pour l'infobulle
const CustomTooltip = ({ active, payload = [] }) => {
  if (active && payload.length) {
    return (
      <div className="custom-tooltip" style={tooltipStyle}>
        <p>{`${payload[0].value} kg`}</p>
        <p style={{ margin: "20px 0 0 0" }}>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
  return null;
};

// Composant pour générer l'axe des ordonnées
const YAxisGenerator = ({ yAxisId, domain, hide }) => (
  <YAxis
    yAxisId={yAxisId}
    type="number"
    domain={domain}
    tickLine={false}
    axisLine={false}
    tickMargin={20}
    orientation="right"
    tick={tickStyle}
    hide={hide}
  />
);

// Composant principal pour le graphique en barres
const BarChartUser = ({ userActivity }) => {
  // Transformation des données pour le graphique
  const data = userActivity?.sessions.map((session) => ({
    name: session.day ? new Date(session.day).getDate().toString() : "",
    weight: session.kilogram,
    calories: session.calories,
  }));

  // Rendu du composant
  return (
    <div className="recharts">
      <div className="data_title">
        <h2 className="data_title--name">Activité quotidienne</h2>
        <p className="data_title--weight">Poids (kg)</p>
        <p className="data_title--calorie">Calories brûlées (kCal)</p>
      </div>

      {userActivity && (
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            className="my-bar-chart"
            barSize={7}
            data={data}
            margin={{ left: 30, bottom: 40 }}
          >
            <CartesianGrid
              strokeDasharray="1"
              horizontal={true}
              vertical={false}
              dot={true}
            />
            <XAxis
              dataKey="name"
              type="number"
              domain={["dataMin", "dataMax"]}
              tick={tickStyle}
              stroke="#DEDEDE"
              tickSize={0}
              fontSize={12}
              tickMargin={10}
              padding={{ left: 15, right: 10 }}
              ticks={xTicks}
            />
            <YAxisGenerator
              yAxisId="weight"
              domain={["dataMin - 3", "dataMax + 3"]}
            />
            <YAxisGenerator
              yAxisId="calories"
              domain={["dataMin - 50", "dataMax + 50"]}
              hide
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              yAxisId="weight"
              dataKey="weight"
              fill="rgba(40, 45, 48, 1)"
              radius={[5, 5, 0, 0]}
            />
            <Bar
              yAxisId="calories"
              dataKey="calories"
              fill="rgba(230, 0, 0, 1)"
              radius={[5, 5, 0, 0]}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// Définition des propTypes pour le composant
BarChartUser.propTypes = {
  userActivity: PropTypes.object,
};

// Exportation du composant
export default BarChartUser;
