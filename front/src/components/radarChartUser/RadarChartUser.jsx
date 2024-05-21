import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const RadarChartUser = ({ userPerformance, isDataLoaded }) => {
  const translations = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const sortOrder = {
    5: 90, // intensity
    4: 150, // cardio
    3: 210, // energy
    2: 270, // endurance
    1: 330, // strength
    6: 30, // speed
  };

  const keys = Object.keys(sortOrder); // ['5', '4', '3', '2', '1', '6']

  const radarChartData = userPerformance
    ? userPerformance.data
        .map((item, index) => ({
          category: translations[item.kind],
          value: item.value,
          angle: sortOrder[keys[index]],
        }))
        .sort((a, b) => a.angle - b.angle)
    : null;

  const axisLabelStyle = {
    fill: "rgba(255, 255, 255, 1)",
    fontSize: "0.75rem",
    fontFamily: "Roboto",
    fontWeight: "500",
  };

  return (
    <div className="radarChart">
      {isDataLoaded && (
        <RadarChart
          key={userPerformance ? userPerformance.userId : null}
          className="my-radar-chart"
          cx={105}
          cy={85}
          outerRadius={65}
          width={213}
          height={220}
          data={radarChartData}
          innerRadius="5%"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="category"
            tickLine={false}
            tickSize={10}
            dy={3}
            tick={{ ...axisLabelStyle }}
          />

          <Radar
            name="Performance"
            dataKey="value"
            fill="rgba(255, 1, 1)"
            fillOpacity={0.7}
          />
        </RadarChart>
      )}
    </div>
  );
};

RadarChartUser.propTypes = {
  userPerformance: PropTypes.object,
  isDataLoaded: PropTypes.bool.isRequired,
};

export default RadarChartUser;