import React from "react";
import "./EventCardComponent.css";
import Place from "../entities/Place"; // Import the CSS file

const EventCardComponent = (title: string, address: Place) => {
    return (
        <div className="container">
            <div className="card"></div>

            <div className="content">
                <div className="title">{title}</div>
                <div className="address">
                    <div className="address-text">{address.Street}</div>
                    <div className="icon">
                        <div className="icon-part1"></div>
                        <div className="icon-part2"></div>
                    </div>
                </div>
            </div>

            <div className="image-container">
                <div className="image-background"></div>
                <div className="image-overlay"></div>
                <div className="image-elements">
                    <div className="element-container">
                        <div className="rectangle rectangle-green"></div>
                        <div className="rectangle rectangle-darkblue"></div>
                        <div className="complex-shape">
                            <div className="sub-rectangle sub-rectangle-darkblue"></div>
                            <div className="sub-rectangle sub-rectangle-white"></div>
                            <div className="circle circle-red"></div>
                        </div>
                        <div className="shape-container">
                            <div className="rotated-shape shape-red"></div>
                            <div className="small-circle circle-yellow"></div>
                            <div className="inner-shape shape-green"></div>
                            <div className="small-rectangle shape-red"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCardComponent;
