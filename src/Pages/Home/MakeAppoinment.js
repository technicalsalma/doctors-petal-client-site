import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-2xl text-primary text-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea vero enim
          obcaecati eveniet odit beatae quas modi natus, libero aliquid quasi
          ipsam, animi doloremque inventore? Omnis nulla aliquid modi a ut
          adipisci, enim placeat dolores repellat ipsa dignissimos harum eaque
          voluptate odit corrupti hic est? Dolore laborum officia mollitia est.
        </p>
        <PrimaryButton>Get Start</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
