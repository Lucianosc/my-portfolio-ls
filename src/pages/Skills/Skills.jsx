import React, { useRef } from "react";
import styles from "./Skills.module.scss";

import {
  css3,
  html5,
  javascript,
  reactjs,
  sass,
  tailwindcss,
  nextjs,
  figma,
} from "../../constants/techIcons";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Radar, getElementsAtEvent } from "react-chartjs-2";
import { Check } from "../../assets";

const techIcons = [css3, html5, javascript, reactjs, sass, tailwindcss];

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarData = {
  labels: [
    javascript.alt,
    reactjs.alt,
    html5.alt,
    tailwindcss.alt,
    sass.alt,
    css3.alt,
  ],
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
        color: "whitesmoke",
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
        color: "whitesmoke",
        font: { size: 16, family: "Montserrat", weight: 400 },
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
  // const chartRef = useRef();
  // const onMouseOver = (event) => {
  //   console.log(getElementsAtEvent(chartRef.current, event));
  // };

  return (
    <main className={`${styles["main-container"]}`}>
      <section className={`${styles["skills"]}`}>
        <div className={`${styles["text"]}`}>
          <div>
            <h3>
              <Check styles={styles.check} />
              Problem-solving
            </h3>
            <p>
              Self-sufficient problem solver that focuses on UX and SEO. I like
              to create intuitive and user-friendly interfaces, while improving
              website performance, and optimizing content for search engines.
            </p>
          </div>
          <div>
            <h3>
              <Check styles={styles.check} />
              Communication
            </h3>
            <p>
              Strong collaboration skills, working seamlessly with
              cross-functional teams including web designers, SEO specialists,
              and developers. Demonstrated ability to communicate project
              requirements and exchange feedback effectively with customers.
            </p>
          </div>
          <div>
            <h3>
              <Check styles={styles.check} />
              Adaptability
            </h3>
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
          <Radar
            data={RadarData}
            options={RadarOptions}
            // onMouseOver={onMouseOver}
            // ref={chartRef}
          />
        </div>
        <div className={`${styles["tech-stack"]}`}>
          {techIcons.map(({ src, alt }, index) => (
            <div>
              <img key={index} src={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
