import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <header id="sidebar">
      <div className="d-flex flex-column">

        <div className="profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pXvPzIlM9T3pFyFIaEAZRhqONTwkaSfiOQ&usqp=CAU" alt="" className="img-fluid rounded-full" />
          <h1 className="text-light"><Link to="">HARSH CHOUKSEY</Link></h1>
          <div className="social-links mt-3 text-center">
            <Link to="" className="twitter"><i className="bx bxl-twitter"></i></Link>
            <Link to="" className="facebook"><i className="bx bxl-facebook"></i> </Link>
            <Link to="" className="instagram"><i className="bx bxl-instagram"></i></Link>
            <Link to="" className="google-plus"><i className="bx bxl-skype"></i>  </Link>
            <Link to="" className="linkedin"><i className="bx bxl-linkedin"></i>  </Link>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><Link to="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
            <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
            <li><Link to="/projects" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Projects</span></Link></li>
            <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Contact</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Sidebar;
