import { Outlet, Link } from "react-router-dom";
import me from '../images/me.png'
import ink from '../images/in.png';
import oc from '../images/oc.png';
import ts from '../images/ts.png';
import wp from '../images/wp.png';

const Layout = () => {


    return (
        <>
            <ul>
                <Link to="/one"> <img src={me} id='0' alt="icon" /></Link>
                <Link to="/two"> <img src={ink} id='1' alt="icon" /></Link>
                <Link to="/three"> <img src={wp} id='2' alt="icon" /></Link>
                <Link to="/four"> <img src={ts} id='3' alt="icon" /></Link>
                <Link to="/five"> <img src={oc} id='4' alt="icon" /></Link>
            </ul>
            <Outlet />
        </>
    );
}

export default Layout;