import React , {Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import Route from 'react-router-dom';
import Home from "./Home";
import Logo from '../pp.jpeg'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#34FBF8" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div >
    <ul className="nav nav-tabs bg-dark">
    <li className="nav-item">
        
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
        <img
                  className='m-1'
                  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRt5opXbcuc9AgWpOH9JrO2Webx470eAfWOJw&usqp=CAU'}
                  alt="photo"
                  style={{ maxHeight: "10%", maxWidth: "10%" }}
                />
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          
        </Link>
      </li>
      <li className="nav-item mt-2">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      { isAuthenticated() && isAuthenticated().user.role==1 && (
      <li className="nav-item mt-2">
        <Link
          style={currentTab(history, "/admin/purchase")}
          className="nav-link"
          to="/admin/purchase"
        >
          Purchase
        </Link>
        </li>
        )}
      { isAuthenticated() && isAuthenticated().user.role==0 && (
      <li className="nav-item mt-2">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
        </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role===0 && (
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/awards")}
            className="nav-link"
            to="/awards"
          >
            Awards
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role===0 && (
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            Profile
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role===1 && (
        <li className="nav-item mt-2">
        <Link
          style={currentTab(history, "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
          A. Dashboard
        </Link>
      </li>
      )}
      {!isAuthenticated() && (
        <Fragment>
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/signup")}
            className="nav-link"
            to="/signup"
          >
            Signup
          </Link>
        </li>
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/signin")}
            className="nav-link"
            to="/signin"
          >
            Sign In
          </Link>
        </li>
        </Fragment>
      )}
      {isAuthenticated() && (
        <li className="nav-item mt-2">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
