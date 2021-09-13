import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <div>



                <br/><br/><br/><br/>
                <footer className="#2196F3 text-center text-white">
                
                <div className="footercontainer" style={{position: 'relative'}}>

                    
                   
                    <section className="">
                    
                    
                        <div className="row d-flex justify-content-center">                

                       
                    <h3 style={{color:"#263238"}}>ABOUT US </h3>
                        </div>
                      
                    
                    </section>
                    
                    <section className="mb-2" style={{marginTop:'-10px',color:"#607D8B"}}>
                    <p><tt>
                      <marquee><br/><b>
                        8:00 A M  TO 8:00 PM  CUSTOMER  SUPPORT LINE
                        <br/></b></marquee>
                    </tt></p>
                    </section>
                  <br/>
                    <section className="mb-3 container" style={{marginTop:'-15px',backgroundColor:"#BEDADC" , color:"white", padding:"5px",width:"47%"}}>
                    
                    <a className="btn btn-floating mx-3" href="https://www.facebook.com/abeethaas.asahara.1" role="button">
                    <i className="fa fa-facebook fa-3x"style={{color:"#4267B2",}}></i></a>

                    
                    <a className="btn btn-floating mx-3" href="https://twitter.com/AbeethaAs" role="button">
                    <i className="fa fa-twitter fa-3x"style={{color:"#00acee"}}></i></a>

                    
                    <a className="btn btn-floating mx-3" href="https://www.google.com/" role="button">
                    <i className="fa fa-google fa-3x" style={{color:"#0F9D58"}}></i></a>

                    
                    <a className="btn btn-floating mx-3" href="https://www.instagram.com/accounts/login/" role="button">
                    <i className="fa fa-instagram fa-3x" style={{color:"#8a3ab9"}}></i></a>
                    
                    <a className="btn btn-floating mx-3" href="https://www.linkedin.com/in/abeetha-as-asahara-a8011521a/" role="button">
                    <i className="fa fa-linkedin fa-3x" style={{color:"#0077b5"}}></i></a>

                    <a className="btn btn-floating mx-3" href="#!" role="button">
                    <i className="fas fa-share fa-3x" style={{color:"#f57d00"}}></i></a>

                    </section>
 
                  
                </div>
               

            
                <div className="text-center p-4"  style={{marginTop:'-20px',color:"#5D4037"}}>

                    <b><tt>
                    Copyright Â© 2021
                    <a className="#8BC34A" href="#!" style={{textDecoration: 'none'}}> Remedi.com  </a>
                    All Rights Reserved.
                 </tt></b>
                </div>
                
                </footer>
                </div>
               
        );
    }
}

export default Footer;