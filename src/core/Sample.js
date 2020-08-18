import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import ImageHelper from "./helper/ImageHelper";
import {Link} from 'react-router-dom';
import { getProducts } from "./helper/coreapicalls";
import ReactCardFlip from 'react-card-flip';
import { Button} from 'react-bootstrap';
import solo from '../solo.jpg';
import duo from '../duo.jpeg'
import squad from '../squad.jpeg'



class Sample extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <Base title="Prize and Awards" description="Information About Game">
        <div className="row text-center">
        <div className='row'>
        <div className='col-sm-4'> 
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div>
        <button className="btn btn-transparent bg-light" onClick={this.handleClick}>Click Here</button>
        <br></br> <br></br> 
        <div className='card'>
              <img className='card-img-top' src={solo}></img>
                <div className="card-body">
                <h5 className="card-header lead bg-info">Solo Information</h5>
                <p className="lead font-weight-normal" style={{color:'black'}}>Click The Button To read Position Prize Values for solo Pubg Mobile Game.</p>
            </div>
          </div>
        </div>
        <div>
        <button className="btn btn-info" onClick={this.handleClick}>Back</button>
        <br></br> <br></br> 
        <div className='card'>
                <div className="card-body">
                <h5 className="card-header lead bg-info">Prize Information</h5>
                <ul style={{color:'black'}}>
                  <li>Winners - 150 Rs</li>
                  <li>Runners - 100 Rs</li>
                  <li>3rd Place - 75 Rs</li>
                  <li>4 Th - 10Th - 50 Rs</li>
                  <li>11 Th -15Th - 10 Rs</li>
                </ul>
                <p className="lead font-weight-normal" style={{color:'black'}}>The Amount will be credited into Your Bank within 24hrs.</p> 
            </div>
          </div>
        </div>
        </ReactCardFlip>
        </div>
        <div className='col-sm-4'> 
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div>
        <br></br> <br></br> <br></br> 
        <div className='card'>
              <img className='card-img-top' src={duo}></img>
                <div className="card-body">
                <h5 className="card-header lead bg-info">Duo Information</h5>
                <p className="lead font-weight-normal" style={{color:'black'}}>Click The Button To read Position Prize Values for Duo Pubg Mobile Game.</p>
                {/* <button className="btn btn-primary" onClick={this.handleClick}>Details</button> */}
            </div>
          </div>
        </div>
 
        <div>
        <br></br> <br></br> <br></br>
        <div className='card'>
                <div className="card-body">
                <h5 className="card-header lead bg-info">Prize Information</h5>
                <ul style={{color:'black'}}>
                  <li>Winners - 210 Rs</li>
                  <li>Runners - 120 Rs</li>
                  <li>3rd Place - 95 Rs</li>
                  <li>4 Th - 10Th - 70 Rs</li>
                  <li>11 Th -15Th - 50 Rs</li>
                </ul>
                <p className="lead font-weight-normal" style={{color:'black'}}>The Amount will be credited into Your Bank within 24hrs.</p>
                {/* <button className="btn btn-primary" onClick={this.handleClick}>Back</button> */}
            </div>
          </div>
        </div>
        </ReactCardFlip>
        </div>
        <div className='col-sm-4'> 
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div>
        <br></br> <br></br> <br></br>
        <div className='card'>
              <img className='card-img-top' src={squad}></img>
                <div className="card-body">
                <h5 className="card-header lead bg-info">Squad Information</h5>
                <p className="lead font-weight-normal" style={{color:'black'}}>Click The Button To read Position Prize Values for Squad Pubg Mobile Game.</p>
                {/* <button className="btn btn-primary" onClick={this.handleClick}>Details</button> */}
            </div>
          </div>
        </div>
 
        <div>
        <br></br> <br></br> <br></br>
        <div className='card'>
                <div className="card-body">
                <h5 className="card-header lead bg-info">Prize Information</h5>
                <ul style={{color:'black'}}>
                  <li>Winners - 200 INR</li>
                  <li>Runners - 150 INR</li>
                  <li>3rd Place - 100 INR</li>
                  <li>2 Teams with most number of kills other than Top 3 Teams will get 100 INR</li>
                </ul>
                <p className="lead font-weight-normal" style={{color:'black'}}>The Amount will be credited into Your Bank within 24hrs.</p>
                {/* <button className="btn btn-primary" onClick={this.handleClick}>Back</button> */}
            </div>
          </div>
        </div>
        </ReactCardFlip>
        </div>
        </div>

      </div>
    </Base>
        
      )
    }
}

export default Sample;