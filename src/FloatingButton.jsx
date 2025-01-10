// eslint-disable-next-line react/prop-types
const FloatingButton = ({icon}) => {
    return (
      <button 
        className="btn btn-dark position-fixed" 
        style={{ 
          bottom: "20px", 
          right: "20px", 
          borderRadius: "50%", 
          width: "40px", 
          height: "40px" 
        }}
      >
        {icon}
      </button>
    );
  };
  
  export default FloatingButton;