import chef1 from '../assets/backgrounds/chef1.jpg'
import chef2 from '../assets/backgrounds/chef2.jpg'
import chef3 from '../assets/backgrounds/chef3.jpg'
import chef4 from '../assets/backgrounds/chef4.jpg'

import france from '../assets/icons/france.png'
import italy from '../assets/icons/italy.png'
import usa from '../assets/icons/united-states.png'
import britain from '../assets/icons/united-kingdom.png'
import germany from '../assets/icons/germany.png'



const Chefs = () => {
    
    return ( 


        <section id="chefs">


            <div className="container-xxl" id="chef-container">


                <h2 className="my-3">CHEFS</h2>

                <p className="lead">Food cooked to perfection from world class Chefs</p>

                <div id="chef-image-container" className="row d-flex align-items-center justify-content-center">

                    <div className="col-xl-3 col-lg-3 col-md-3 col-6">

                        <div className="chef-img">
                            <img src={chef1} alt="chef" />
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-6">

                        <div className="chef-img">
                            <img src={chef2} alt="chef" />
                        </div>
                        </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-6">

                        <div className="chef-img">
                            <img src={chef3} alt="chef" />
                        </div>
                        </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-6">

                        <div className="chef-img">
                            <img src={chef4} alt="chef" />
                        </div>
                        </div>

                </div>

                <p className="lead mt-4">International Culinary Artists from ...</p>

                <div id="flags" className="row d-flex justify-content-center align-items-center">

                    <div id="flag1" className="col-xl-2 col-lg-2 col-md-2 col-3">

                        <div className="flag-container">

                            <img src={france} alt="" />
                        </div>
                        <p>FRANCE</p>

                    </div>

                    <div id="flag2" className="col-xl-2 col-lg-2 col-md-2 col-3">

                        <div className="flag-container">

                            <img src={italy} alt="" />
                        </div>
                        <p>ITALY</p>

                     </div>

                     <div  id="flag3" className="col-xl-2 col-lg-2 col-md-2 col-3">

                    <div className="flag-container">

                        <img src={usa} alt="" />
                    </div>
                    <p>U.S.A</p>


                    </div>

                    <div id="flag4" className="col-xl-2 col-lg-2 col-md-2 col-3">

                    <div className="flag-container">

                        <img src={britain} alt="" />
                    </div>
                    <p>BRITAIN</p>


                    </div>

                    <div id="flag5" className="col-xl-2 col-lg-2 col-md-2 col-3">

                    <div className="flag-container">

                        <img src={germany} alt="" />
                    </div>
                    <p>GERMANY</p>


                    </div>


                </div>


            </div>


        </section>
     );
}
 
export default Chefs;