let  Footer = () => {
    return(
      <>
        <footer className="fixed-bottom">
            <div style={{ textAlign: 'center', color: 'gray'}}>
              {new Date().getFullYear()} &copy; - FULLMOON Services Pvt Ltd, All rights reserved.
            </div>
        </footer>
      </>
    )
  };
  
  export default Footer;
  