import React from "react";
import Homebanner from "../components/advertisment/homebanner";
import Calendar from "../components/base/calendar";
import List from "./home_peoplelist";
import { useEffect, useState } from "react";
function Home(props) {
  let [calendar, setCalendar] = useState();
  // window.onload = () => {
  //   const calendar_btn = props.carRef.current;
  //   console.log(calendar_btn);
  //   useEffect(() => {
  //     const handleClick = (event) => {
  //       setCalendar(calendar_btn);
  //     };
  //     calendar_btn.addEventListener("click", handleClick);
  //     return () => {
  //       calendar_btn.removeEventListener("click", handleClick);
  //     };
  //   }, []);
  // };

  return (
    <>
      <Homebanner />
      {/* <List /> */}
    </>
  );
}

export default Home;
