import React from "react";
import Item from "./Item";
import Itemdate from "./Itemdate";

function Main() {
    return (
        <div>
            <p>This is the main section within the page</p>
            <h2>Item 1</h2>
            {/* Props */}
            <Item name="Nirma"></Item>
            <Itemdate day="20" month="June" year="1995">I am Item 1</Itemdate>
            <br></br>
            <h2>Item 2</h2>
            <Item name="Lizol"></Item>
            <Itemdate day="12" month="March" year="2010"></Itemdate>
    </div>
)
}

export default Main;