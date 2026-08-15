import { Icon } from "@chayns-components/core";
import React from "react";
import "./placeholderApp.css";

const PlaceholderApp: React.FC = () => (
    <div className="placeholder-app--main">
        <Icon icons={["fa fa-wrench"]} size={32} />
        <span>Diese Funktion befindet sich noch in Entwicklung.</span>
    </div>
);

export default PlaceholderApp;
