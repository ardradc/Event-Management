// eslint-disable-next-line react/prop-types
let Tile = ({icon, title, count}) => {
    return (
        <>
            <div className="card">
                <img src={icon} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href="#" className="btn btn-primary">{count}</a>
                </div>
            </div>
        </>
    );
};

export default Tile;