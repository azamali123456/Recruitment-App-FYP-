import '../style/navbar.css'
import navbarImage from '../assets/images/navigation-bar.png'
import ArrowLeftRight from '../../src/assets/icons/arrow-left-right'
import Heart from '../assets/icons/heart';
import Shop from '../assets/icons/added-To-Crad';

function Navbar() {
      
    return (
        <div className="Container ">
            {/* Navbar Top Strip */}
            <div className="row top-strip">
                <div className="col-5"><small className="navbar-first-text">Biggest Offer On -WaterProof, DSLR Camera Lenses & Earphones</small></div>
                <div className="col-2"><small className='navbar-second-text'>Call Us : (+01) 589 559 555</small></div>
                <div className="col-2 " ><small className='navbar-third-text'>aazam7246@gmail.com</small></div>
                <div className="col-sm-2 navbar-login-btn" type='button'>Login</div>
            </div>
            {/* Navbar Middle Strip */}
            <div className="row  p-2">
                <div className="col-2 fst-italic text-center logo-div"> <a href='./' style={{ textDecoration: "none" }}><strong className='logo-first' >TOOL</strong> <strong className='logo-second'>DIC</strong></a> </div>
                <div className="col-1 navbar-image">
                    <img className='mt-2' width={20} height={20} src={navbarImage} />
                </div>
                <div className="col-6">
                    <div className="input-group input-div">
                        <input type="search" width={500} placeholder="Search Products..." aria-label="Search" aria-describedby="search-addon" />
                        <button className="serach-btn    " data-mdb-ripple-init>search</button>
                    </div>
                </div>
                <div className="col-3 mt-1 navbar-icon-div">
                    <span type='button ' className='m-1'> <ArrowLeftRight />
                        <small className="badge rounded-pill badge-notification bg-danger badge-text">0</small>
                    </span>
                    <span type='button' className='m-1'> <Heart />
                        <small className="badge rounded-pill badge-notification bg-danger badge-text">0</small>
                    </span>
                    <span type='button' className='m-1'> <Shop />
                        <small className="badge rounded-pill badge-notification bg-danger badge-text">0</small>
                    </span>

                </div>
            </div>
            {/* Navbar Bottom Strip And Actual Navbar */}
            <nav class="navbar navbar-expand-lg  ">
                <a class="navbar-brand" href="#">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle text-uppercase" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className='mx-2 for-sale-image' width={16} height={16} src={navbarImage} />
                            <strong>Shop By Category</strong>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Category 1</a></li>
                            <li><a className="dropdown-item" href="#">Category 2</a></li>
                            <li><a className="dropdown-item" href="#">Category 3</a></li>
                        </ul>
                    </div> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle text-uppercase" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul className="dropdown-menu dropdown-menu-responsive" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Home</a></li>
                            <li><a className="dropdown-item" href="#">Shop</a></li>
                            <li><a className="dropdown-item" href="#">Blog</a></li>
                            <li><a className="dropdown-item" href="#">About Us</a></li>
                            <li><a className="dropdown-item" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-5 ">

                        <span className='d-flex navbar-middle-links'>
                            <li class="nav-item mt-1 mx-1">
                                <a class="nav-link text-center text-light " href="#"><strong>HOME</strong></a>
                            </li>
                            <li class="nav-item mt-1 mx-1">
                                <a class="nav-link text-center text-light" href="#"><strong>SHOP</strong></a>
                            </li>
                            <li class="nav-item dropdown dropdown1 mt-1 mx-1">
                                <a class="nav-link" href="#">

                                    <button className=" dropdown-toggle text-uppercase dropdown-toggl1" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>BLOG</strong>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </a>


                            </li>
                            <li class="nav-item mt-1 mx-1">
                                <a class="nav-link text-center text-light" href="#"><strong>ABOUT US</strong></a>

                            </li>
                            <li class="nav-item mt-1 mx-1">
                                <a class="nav-link text-center text-light" href="#"><strong>CONTACT US</strong></a>

                            </li>

                        </span>
                        <li class="nav-item mt-1 mx-5 navbar-last-link">
                            <a class="nav-link text-center text-light" href="#"><strong>Free On Order $50+</strong></a>
                        </li>
                    </ul>

                </div>
            </nav>

        </div>
    );
}

export default Navbar;
