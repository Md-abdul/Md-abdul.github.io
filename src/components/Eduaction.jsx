import React, { useEffect } from "react";
import "../style/education.css";
import { Text, useColorMode } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  const { colorMode } = useColorMode();
  //   useEffect(() => {
  //     const containers = document.querySelectorAll(".container");
  //     containers.forEach((container, index) => {
  //       container.style.animationDelay = `5s`;
  //     });
  //   }, []);  data-aos="zoom-in"

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <>
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        textAlign="center"
        mt={150}
      >
        Education
      </Text>
      <div className="timeline">
        <div className="container left-container">
          <img
            src="https://st2.depositphotos.com/47577860/46208/v/450/depositphotos_462081796-stock-illustration-graduation-university-ceremony-icon.jpg"
            alt=""
          />
          <div className="text-box" data-aos="zoom-in">
            <h1>Full Stack Web Development</h1>
            <small>Masai School(Bengaluru)</small>
            <p>November 2022 - October 2023</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img
            src="https://st2.depositphotos.com/47577860/46208/v/450/depositphotos_462081796-stock-illustration-graduation-university-ceremony-icon.jpg"
            alt=""
          />
          <div className="text-box">
            <h1>B.A (english honours)</h1>
            <small>Binod Bihari Mahto Koyalanchal University, Dhanbad</small>
            <p>August 2020 - September 2023</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <img
            src="https://st2.depositphotos.com/47577860/46208/v/450/depositphotos_462081796-stock-illustration-graduation-university-ceremony-icon.jpg"
            alt=""
          />
          <div className="text-box" data-aos="zoom-in">
            <h1>Intermediate</h1>
            <small>Gomia Inter Collage, Swang</small>
            <p>April 2018 - April 2020</p>
            {/* <span className="left-container-arrow"></span> */}
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img
            src="https://st2.depositphotos.com/47577860/46208/v/450/depositphotos_462081796-stock-illustration-graduation-university-ceremony-icon.jpg"
            alt=""
          />
          <div className="text-box" data-aos="zoom-in">
            <h1>Matriculation</h1>
            <small>Loyola School, Gomia</small>
            <p>April 2008 - April 2018</p>
            {/* <span className="right-container-arrow"></span> */}
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
