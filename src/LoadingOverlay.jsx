// eslint-disable-next-line react/prop-types
const LoadingOverlay = ({ isLoading }) => {
    if (!isLoading) return null;
  
    return (
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
        style={{ zIndex: 1050 }}
      >
        <div className="spinner-border text-bark" role="status">
          <span className="visually-hidden">Loading, please wait...</span>
        </div>
      </div>
    );
  };
  
  export default LoadingOverlay;