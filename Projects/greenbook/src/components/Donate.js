import location from '../assets/icons/location.png'
import donor from '../assets/icons/donorbox.png'
import gofundme from '../assets/icons/GoFundMe.png'
import kickstarter from '../assets/icons/kickstarter.png'

const Donate = () => {


    return ( 

        <section id="donate">

               
        <section id="donate">

<div className="container-xxl" id="donate-container">


        <div className="contained">

                            
                                <h2 className="donate-title mt-4">WANT TO HELP OUT?</h2>
                                <div className="bottom-line-green"></div>

                                
                                <p className="lead text-center">Donate books you have, which are in any condition, to the following address</p>
                                
                                <div className="location m-3">

                                    <img src={location} alt="" />
                                </div>

                                <p className="lead text-center">912 W. Sulphur Springs Street Shrewsbury, MA 01545</p>
                                <p className="lead">8034 North Glenridge Ave.Harvey, IL 60426</p>

                                <div className="bottom-line-green-lower"></div>

                                <p className="lead text-center">And if you are in the spirit of giving, do so through the following channels</p>

                                <div className="donate-image-containers">

                                    <div className="row d-flex justify-content-center align-items center">

                                        <div className="col-xl-4 col-md-5 col-sm-6 d-flex justify-content-center align-items center">

                                            <div className="donate-image">
                                                <img src={gofundme} alt="donateimg" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-5 col-sm-6 d-flex justify-content-center align-items center">

                                            <div className="donate-image">
                                                <img src={donor} alt="donateimg" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-5 col-sm-6 d-flex justify-content-center align-items center">

                                                <div className="donate-image">
                                                    <img src={kickstarter} alt="donateimg" />
                                                </div>
                                        </div>

                                    </div>
                                </div>




        </div>
</div>


</section>


        </section>
    );
}
 
export default Donate;