import location from '../assets/icons/location.png'
import uber from '../assets/icons/uberEats.png'
import deliverHero from '../assets/icons/DeliveryHero.jpg'
import instacart from '../assets/icons/Instacart.png'
import grubhub from '../assets/icons/grubhub.png'
import doordash from '../assets/icons/DoorDash.png'


const Delivery = () => {






    return ( 

        <section id="delivery">

            <div className="container-xxl" id="delivery-container">

            <h2 className="my-3">Delivery</h2>

            <div className="delivery-location">

                <img src={location} alt="" />
            </div>

            <p className="lead">We are available in  <span className="h2 m-2">  256 </span> locations world wide</p>
            
            <div className="row d-flex justify-content-center align-items-center">

                
            <div id="transport1" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="transport-container">

    <img src={uber} alt="" />
</div>


</div>

<div id="transport2" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="transport-container">

    <img src={deliverHero} alt="" />
</div>


</div>

<div  id="transport3" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="transport-container">

<img src={instacart} alt="" />
</div>



</div>

<div id="transport4" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="transport-container">

<img src={grubhub} alt="" />
</div>



</div>

<div id="transport5" className="col-xl-2 col-lg-2 col-md-2 col-3">

<div className="transport-container">

<img src={doordash} alt="" />
</div>



</div>
            </div>


            </div>



        </section>
     );
}
 
export default Delivery;