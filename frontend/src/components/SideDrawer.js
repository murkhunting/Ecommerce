import React from 'react'
import "./SideDrawer.css"

const SideDrawer = ({show, click}) => {
    const SideDrawerClass = ["sidedrawer"];
    if (show){
        SideDrawerClass.push("show");
    }
    return (
        <div className={SideDrawerClass.join(" ")}>
            <ul className="sidedrawer-links" onClick={click}>
                
            </ul>
            
        </div>
    )
};

export default SideDrawer;
