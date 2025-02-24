import red from './assets/green.png';
import green from './assets/green.png';
import blue from './assets/green.png';

let Slider = () => {
    return (
        <>
        <div id="carouselExample" className="carousel slide" >
            <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={red} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={green} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={blue} className="d-block w-100" alt="..." />
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
};

export default Slider;