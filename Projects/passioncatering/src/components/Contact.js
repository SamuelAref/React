import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import tiktok from '../assets/icons/tiktok.png'
import mail from '../assets/icons/email.png'
import phone from '../assets/icons/phone-call.png'

const Contact = () => {


    return ( 

        <section id="contact">

            <div className="container-xxl" id="contact-container">

            <h2 className="my-3">Contact</h2>

            <p className="lead">Get in touch, and make sure to follow us</p>
            
            <div className="row d-flex justify-content-center align-items-center">

                
            <div id="contact1" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="contact-container">

    <img src={facebook} alt="" />
</div>


</div>

<div id="contact2" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="contact-container">

    <img src={instagram} alt="" />
</div>


</div>

<div  id="contact3" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="contact-container">

<img src={tiktok} alt="" />
</div>



</div>

<div id="contact4" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="contact-container">

<img src={mail} alt="" />
</div>



</div>

<div id="contact5" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="contact-container">

<img src={phone} alt="" />
</div>



</div>

            </div>
                
                <div id="line"></div>

                <h5 className="mt-2">2022</h5>




            </div>
        </section>
     );
}
 
export default Contact;