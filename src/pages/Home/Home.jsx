import React, { useState, useEffect, useRef } from "react";
import styles from "./Home.module.scss";
import { techGuy, Spin } from "../../assets";

export default function Home() {
  const [transformPosition, setTransformPosition] = useState({
    x: 0,
    y: 0,
  });
  // const [animationSpeed, setAnimationSpeed] = useState(30);

  const divRef = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(e) {
    setTransformPosition({
      x: Math.round((e.pageX * 100) / window.innerWidth) - 0,
      y: Math.round((e.pageY * 100) / window.innerHeight) - 0,
    });
    // setAnimationSpeed(
    // console.log(
    //   Math.round(

    //       (Math.abs(
    //         ((divRef.current.offsetLeft +
    //           divRef.current.offsetWidth / 2 -
    //           e.pageX) *
    //           100) /
    //           window.innerWidth
    //       ) +
    //       Math.round(
    //         Math.abs(
    //           ((divRef.current.offsetTop +
    //             divRef.current.offsetHeight / 4 -
    //             e.pageY) *
    //             100) /
    //             window.innerHeight
    //         )
    //       ) )/
    //         4
    //   )
    // );
  }

  return (
    <main className={`${styles["main-container"]}`}>
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["imgs-container"]}`} ref={divRef}>
          {/* <img
            src={techGuyColorBackground}
            id="color-layer"
            alt="Developer face layer"
            // style={{
            //   transform: `translate(${-transformPosition.x / 2}px, ${
            //     -transformPosition.y / 2
            //   }px)`,
            // }}
          /> */}
          {/* <img
            src={techGuyLayer2}
            alt="Developer face layer"
            style={{
              transform: `translate(${-transformPosition.x / 8}px, ${
                -transformPosition.y / 8
              }px)`,
            }}
          /> */}
          <div
            // style={{
            //   "animation-duration": `${animationSpeed}s`,
            // }}
            style={{
              transform: `translate(${-transformPosition.x / 2}px, ${
                -transformPosition.y / 2
              }px)`,
            }}
          >
            <div className={`${styles["spinner-container"]}`}>
              <Spin />
            </div>
          </div>
          <img
            src={techGuy}
            alt="Developer face"
            // style={{
            //   opacity: `translate(${(-transformPosition.x / 2) * 1.2}px, ${
            //     (-transformPosition.y / 2) * 1.2
            //   }px)`,
            // }}
            // style={{ filter: `grayscale(${grayscale}%)` }}
          />
        </div>
      </div>
      <section>
        <h1>
          I'm Luciano, a <span>front-end</span> developer and a creative
          problem-solver.
        </h1>
        <p>
          My focus lies in crafting elegant solutions for complex challenges.
          With a blend of technical expertise and design sensibilities, I create
          seamless and intuitive interfaces that leave a lasting impact.
        </p>
      </section>
    </main>
  );
}
