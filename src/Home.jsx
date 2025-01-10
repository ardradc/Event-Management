import Slider from "./Slider";
import Tile from "./Tile";

import green from './assets/green.png'

let Home = () => {
    return (
        <>
        <div className="container container-fluid">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Tile icon={green} title="Users" count="10"/>
                    </div>
                    <div className="col">
                        <Tile icon={green} title="Vendors" count="10"/>
                    </div>
                    <div className="col">
                        <Tile icon={green} title="Orders" count="10"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        <Slider/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;