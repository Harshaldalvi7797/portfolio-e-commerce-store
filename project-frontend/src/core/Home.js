import React from "react";
import "../style.css"
import { API } from "../backend"
import Base from "./Base"

const Home = () => {
    console.log("api is", API)
    return (
        <div className="App">
            <Base title="Home Page">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-success">TEST</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success">TEST</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success">TEST</button>
                    </div>
                </div>
            </Base>
        </div>
    );
}

export default Home;
