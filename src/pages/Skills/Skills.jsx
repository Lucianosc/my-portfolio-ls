import React from "react";
import styles from "./Skills.module.scss";
import {
  css3,
  html5,
  javascript,
  reactjs,
  sass,
  tailwindcss,
} from "../../assets/";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarData = {
  labels: ["React.js", "Javascript", "HTML", "Sass", "Tailwindcss", "CSS"],
  datasets: [
    {
      label: "Tech stack",
      backgroundColor: "rgba(4, 217, 255, 0.2)",
      borderColor: "rgba(4, 217, 255, 1)",
      pointBackgroundColor: "rgba(4, 217, 255, 1)",
      poingBorderColor: "rgba(4, 217, 255, 1)",
      pointHoverBackgroundColor: "rgba(4, 217, 255, 1)",
      pointHoverBorderColor: "rgba(4, 217, 255, 1)",
      data: [10, 9, 7, 8, 4, 8],
    },
  ],
};

export const RadarOptions = {
  plugins: {
    legend: {
      display: false,
      labels: {
        font: { size: 18, family: "Montserrat", weight: 500 },
        color: "white",
      },
    },
  },
  scales: {
    r: {
      min: 0,
      max: 10,
      angleLines: {
        color: "rgba(144, 144, 150, 0.2)",
      },
      grid: {
        color: "rgba(144, 144, 150, 0.2)",
      },
      pointLabels: {
        color: "white",
        font: { size: 14, family: "Montserrat", weight: 400 },
      },
      ticks: {
        count: 5,
        color: "transparent",
        showLabelBackdrop: false,
      },
    },
  },
};

export default function Skills() {
  return (
    <main className={`${styles["main-container"]}`}>
      <section>
        <ul>
          <li>Team oriented</li>
          <li>Atention to detail</li>
          <li>responsive design</li>
        </ul>
      </section>
      <div className={`${styles["graph-container"]}`}>
        <h2>Tech Stack</h2>
        <div className={`${styles["radar-container"]}`}>
          <Radar data={RadarData} options={RadarOptions} />
        </div>
        <div className={`${styles["tech-stack"]}`}>
          <img src={css3} alt="css3" />
          <img src={html5} alt="html5" />
          <img src={javascript} alt="javascript" />
          <img src={reactjs} alt="reactjs" />
          <img src={sass} alt="sass" />
          <img src={tailwindcss} alt="tailwindcss" />
        </div>
      </div>
    </main>
  );
}
