import React from "react";
import TuitList from "../tuits/TuitList";
import WhatsHappening from "./whats-happening";

export default function HomeComponent(){
    return (
        <><h4>Home</h4>
        <WhatsHappening/>
        <TuitList />
        </>
    );
}