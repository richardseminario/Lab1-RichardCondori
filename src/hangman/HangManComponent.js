import React from "react";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { DrawComponent } from "./components/DrawComponent";
import "./styles.css";

export const HangManComponent = () => {
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            <DrawComponent />
            <KeyBoardComponent />
        </div>
    );
};
