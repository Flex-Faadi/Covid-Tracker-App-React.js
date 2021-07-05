import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

function Graph() {
  const state = useSelector((state) => state);
  const CovidData = state.data;
  return (
    <div className="chartDiv container">
      {CovidData.map((e, i) => {
        return (
          <Bar
            data={{
              labels: ["Infected", "Recovered", "Deaths"],
              datasets: [
                {
                  label: "Peoples",
                  backgroundColor: [
                    "rgba(0, 0, 255, 0.5)",
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                  ],
                  data: [e.confirmed.value, e.recovered.value , e.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `current state in india` },
            }}
          />
        );
      })}
    </div>
  );
}

export default Graph;
