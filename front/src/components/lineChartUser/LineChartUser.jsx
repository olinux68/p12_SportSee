// Importation des bibliothèques et des composants nécessaires
import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// Tableau des labels pour chaque jour de la semaine
const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

// Fonction pour formater le jour en utilisant le tableau dayLabels
const dayFormatter = (dayNumber) => {
  return dayLabels[dayNumber - 1] || "";
};

// Composant personnalisé pour l'axe des abscisses
const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={5}
        textAnchor="end"
        fill="rgba(255, 255, 255, 1)"
        fontSize="0.75rem"
        fontFamily="Roboto"
        fontWeight="500"
        opacity={0.5}
      >
        {dayFormatter(payload.value)}
      </text>
    </g>
  );
};

// Composant personnalisé pour l'infobulle
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom_tooltip_session"
        style={{
          color: "black",
          fontSize: "0.5rem",
          fontFamily: "Roboto",
          fontWeight: "500",
          backgroundColor: "rgba(255, 255, 255, 1)",
          width: "39px",
          height: "25px",
        }}
      >
        <p className="custom_tooltip_session--text">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

// Composant personnalisé pour le curseur
const CustomCursor = () => null;

// Composant principal pour le graphique en ligne
const LineChartUser = ({ transformedData, userId }) => {
  // Définition des états pour la couleur de surface et la position du masque
  const [surfaceColor, setSurfaceColor] = React.useState(
    "rgba(255, 0, 0, 0.4)"
  );
  const [maskPosition, setMaskPosition] = React.useState(0);

  // Gestionnaire d'événements pour le mouvement de la souris sur le graphique
  const handleMouseMove = (e) => {
    if (e && e.activeLabel) {
      const labelIndex = dayLabels.indexOf(dayFormatter(e.activeLabel));
      const colorIntensity = 0.4 + (labelIndex / (dayLabels.length - 1)) * 0.6;
      setSurfaceColor(`rgba(200, 0, 0, ${colorIntensity})`);
      setMaskPosition(e.chartX);
    }
  };

  // Rendu du composant
  return (
    <div className="average_session">
      <h2 className="average_session--title">Durée moyenne des sessions</h2>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
          <mask id="mask">
            <rect
              x={maskPosition}
              y={0}
              width={213 - maskPosition}
              height={233}
              fill="url(#maskGradient)"
            />
          </mask>
          <linearGradient id="maskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
      </svg>

      <LineChart
        width={213}
        height={233}
        data={transformedData}
        margin={{ top: 70, right: 30, left: 20, bottom: 5 }}
        onMouseMove={handleMouseMove}
      >
        <rect
          x={0}
          y={0}
          width={maskPosition}
          height={260}
          fill="rgba(255, 0, 0, 0.4)"
        />
        <rect
          x={maskPosition}
          y={0}
          width={213 - maskPosition}
          height={233}
          fill={surfaceColor}
        />
        <XAxis
          dataKey="day"
          tickFormatter={dayFormatter}
          axisLine={false}
          tickLine={false}
          tick={<CustomizedAxisTick />}
        />
        <YAxis
          label={{
            angle: -90,
            position: "insideLeft",
          }}
          hide
          domain={[10, 60]}
          padding={{ top: 20, bottom: 30 }}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

        <Line
          dataKey={`User${userId}`}
          stroke="url(#gradient)"
          type="natural"
          scale="band"
          strokeWidth={2}
          dot={false}
        />
        <rect
          x={0}
          y={0}
          width={213}
          height={220}
          fill="transparent"
          mask="url(#mask)"
        />
      </LineChart>
    </div>
  );
};

// Définition des propTypes pour le composant
LineChartUser.propTypes = {
  transformedData: PropTypes.array,
  userId: PropTypes.number,
};

// Exportation du composant
export default LineChartUser;
