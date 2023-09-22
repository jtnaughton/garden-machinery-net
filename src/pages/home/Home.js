import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import grassLawnWithConcreteWall from "../../images/grassLawnWithConcreteWall.jpg";
import { NavBar } from "../navigation/NavBarComponent";
import { AboutCards } from "../cards/cards";

export const Home = () => {
  return (
    <>
      <div
        className="image"
        style={{ backgroundImage: `url(${grassLawnWithConcreteWall})` }}
      >
        <NavBar />
        <section className=" container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
        <div className="w-full  px-[2.5rem]">
          {/* about cards */}
          <div className="about-cards flex gap-10 flex-col md:flex-row">
            <AboutCards />
          </div>
        </div>
      </section>
      </div>
      <div className="">
        <footer className="footer">
          <p className="text-footer">Copyright ©-All rights are reserved</p>
        </footer>
      </div>
    </>
  );
};
