import logo from '../assets/logo/logo.png';
import mail from '../assets/icons/email.png'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import tiktok from '../assets/icons/tiktok.png'


const Contact = () => {


    return ( 
        <section id="contact">


            <div className="container-xxl" id="contact-container">


                    <div className="contained">

                        <div className="row">

                                <div className="logo-big col-xs-5 col-md-8">

                                    <div className="logo-container">
                                    <img src={logo} alt="logo" />


                                    </div>

                                    <h2 className="fw-bold text-center">GREEN BOOK</h2>


                                </div>


                                <div className="contact-forms colxs-5 col-md-8">

                                    <p className="lead text-center">FOR  MORE INFORMATION CONTACT US</p>

                                    <div className="social-icons">

                                        <div className="social-icon">
                                            <img src={mail} alt="" />
                                        </div>

                                        <div className="social-icon">
                                            <img src={facebook} alt="" />
                                        </div>

                                        <div className="social-icon">
                                            <img src={instagram} alt="" />
                                        </div>

                                        <div className="social-icon">
                                            <img src={tiktok} alt="" />
                                        </div>
                                    </div>


                                </div>

                            </div>
                      

                                        
                                        




                    </div>
            </div>


        </section>
     );
}
 
export default Contact;