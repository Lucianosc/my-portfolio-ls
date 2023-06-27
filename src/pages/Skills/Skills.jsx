import React, { useRef, useState } from "react";
import styles from "./Skills.module.scss";
import {
  css3,
  html5,
  javascript,
  reactjs,
  sass,
  tailwindcss,
  lottieAnimation,
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
import { Player } from "@lottiefiles/react-lottie-player";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarData = {
  labels: ["Javascript", "React", "HTML", "Tailwindcss", "Sass", "CSS"],
  datasets: [
    {
      label: "Tech stack",
      backgroundColor: "rgba(4, 217, 255, 0.2)",
      borderColor: "rgba(4, 217, 255, 1)",
      pointBackgroundColor: "rgba(4, 217, 255, 1)",
      poingBorderColor: "rgba(4, 217, 255, 1)",
      pointHoverBackgroundColor: "rgba(4, 217, 255, 1)",
      pointHoverBorderColor: "rgba(4, 217, 255, 1)",
      data: [10, 9, 7, 5, 8, 8],
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
  const lottieRef = useRef();

  const handleLottieEvent = () => {
    if (lottieRef?.current.state.instance.playDirection == 1) {
      lottieRef.current.setPlayerDirection(-1);
      lottieRef.current.setSeeker(90, true);
    } else {
      lottieRef.current.setPlayerDirection(1);
      lottieRef.current.setSeeker(0, true);
    }
  };

  return (
    <main className={`${styles["main-container"]}`}>
      <section className={`${styles["skills"]}`}>
        <div className={`${styles["text"]}`}>
          <div>
            <h3>Problem-solving</h3>
            <p>
              Self-sufficient problem solver that focuses on UX and SEO. I like
              to create intuitive and user-friendly interfaces, while improving
              website performance, and optimizing content for search engines.
            </p>
          </div>
          <div>
            <h3>Communication</h3>
            <p>
              Strong collaboration skills, working seamlessly with
              cross-functional teams including web designers, SEO specialists,
              and developers. Demonstrated ability to communicate project
              requirements and exchange feedback effectively with customers.
            </p>
          </div>
          <div>
            <h3>Adaptability</h3>
            <p>
              Continuously update skills to stay abreast of emerging
              technologies and industry trends. Proficient in utilizing modern
              frameworks and technologies to deliver dynamic and scalable web
              solutions.
            </p>
          </div>
        </div>
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
