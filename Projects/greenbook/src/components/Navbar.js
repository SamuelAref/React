import menu from '../assets/icons/menu.png';
import logo from '../assets/logo/logo.png';


const Navbar = () => {




    return ( 

        <div className="navbar">

        <nav className="navbar navbar-expand-sm navbar-dark">
                                    <div className="container-xxl">
                        
                                    <div className="navbar-brand mb-4 me-5" id="logo">
                                    <img className="img-fluid" src={logo} alt="logo" /> <span className="h6">GREEN BOOK</span>
                                    </div>
                            
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                                        <img src={menu} alt="" />
                                    </button>

                            
                                    <div className="collapse navbar-collapse justify-content-end align-center"  id="main-nav">
                                        <ul className="navbar-nav">

                                        <li className="nav-item">
                                            <a className="nav-link me-3" href="#home"><span className="h6">HOME</span></a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link" href="#browse"><span className="h6">BROWSE</span></a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link" href="#donate"><span className="h6">DONATE</span></a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link" href="#contact"><span className="h6">CONTACT</span></a>
                                        </li>
                                
                                        
                                        </ul>
                                    </div>
                                    </div>
                                </nav>




</div>
     );
}
 
export default Navbar;