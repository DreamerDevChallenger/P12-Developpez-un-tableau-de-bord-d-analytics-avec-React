import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

function DashBoardLineChart({ userAverageSession }) {
  function CustomTooltip(data) {
    const { active, payload } = data;

    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="kilo-tooltip">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  }

  function dayFormater(day) {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return false;
    }
  }
  return (
    <article className="dashboard-line-chart">
      <div className="dashboard-activity-second-background"></div>
      <header className="dashboard-line-chart-header">
        <h3>Durée moyenne des sessions</h3>
      </header>
      <section className="dashboard-line-chart-section">
        <ResponsiveContainer width="99%" height={"100%"}>
          <LineChart
            width={300}
            height={300}
            data={userAverageSession.sessions}
            margin={{ left: 5, right: 5, top: 10, bottom: 5 }}
          >
            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
              stroke="#FFFFFF"
            ></Tooltip>
            <XAxis
              dataKey={"day"}
              axisLine={false}
              tickLine={false}
              stroke="#FFFFFF"
              opacity={0.55}
              domain={["dataMin -10", "dataMax +10"]}
              padding={{ left: 5, right: 5 }}
              tickFormatter={dayFormater}
            ></XAxis>

            <Line
              dataKey="sessionLength"
              type="monotone"
              lengthAdjust={200}
              stroke="#FFFFFF"
              strokeWidth={2.5}
              strokeOpacity={0.55}
              dot={false}
              activeDot={{
                stroke: "white",
                strokeWidth: 10,
                r: 4,
                strokeOpacity: 0.25,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </article>
  );
}

DashBoardLineChart.propTypes = {
  userAverageSession: PropTypes.object.isRequired,
};

export default DashBoardLineChart;
