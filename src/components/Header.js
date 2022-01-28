import Navbar from "./Navbar";
import Title from "./Title";
import '../stylesheets/Header.css'

const Header = () => {
    return ( 
        <header  className="container">
            <Title />
            <Navbar />
        </header>
    );
}
 
export default Header;