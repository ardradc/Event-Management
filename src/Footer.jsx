let  Footer = () => {
    return(
      <>
        <footer className="fixed-bottom">
            <div style={{ textAlign: 'center', color: 'gray'}}>
              {new Date().getFullYear()} &copy; Copyright, iSERVE, All rights reserved.
            </div>
        </footer>
      </>
    )
  };
  
  export default Footer;
  