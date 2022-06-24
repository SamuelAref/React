import logo from '../assets/logos/logo.png'


const Home = () => {


    return ( 


            <section id="home">

                <div className="container-xxl">


                    <div className="contained">

                                            <div  id="home-logo">
                                                <span className="h2">Passion</span> <img className="img-fluid" src={logo} alt="logo" /> <span className="h2">Catering</span>
                                            </div>
                                            <p className="h2 pt-5">Catering to your needs.</p>


                    </div>
                </div>


            </section> 
     );
}
 
export default Home;