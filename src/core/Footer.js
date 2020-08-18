import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 bg-white">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">PUBGM</h5>
            <div className="container">
              <div className="row">
                  <div className="col-sm">
                      <p className='text-info'>About Us</p>
                      <div className='row-sm'>
                        Our Leadership
                      </div>
                      <div className='row-sm'>
                        History
                      </div>
                      <div className='row-sm'>
                        Alliances
                      </div>
                      <div className='row-sm'>
                        Franchies
                      </div>
                   </div>
                  <div className="col-sm">
                      <p className='text-info'>Why Join</p>
                      <div className='row-sm'>
                        What to Expect
                      </div>
                      <div className='row-sm'>
                        Our Stories
                      </div>
                      <div className='row-sm'>
                        Find A Chapter
                      </div>
                      <div className='row-sm'>
                        Contact Us
                      </div>
                  </div>
                  <div className="col-sm">
                      <p className='text-info'>Services</p>
                      <div className='row-sm'>
                        Risk and Financial Advisory
                      </div>
                      <div className='row-sm'>
                        Audit and Assurance
                      </div>
                      <div className='row-sm'>
                        Consulting
                      </div>
                      <div className='row-sm'>
                        Tax
                      </div>
                   </div>
                </div>
              </div>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Wana Connect ?</h5>
            <ul>
              <li style={{display:'inline'}} className="list-unstyled text-dark mr-1">
              <img
                  className='m-1'
                  src={'https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png'}
                  alt="photo"
                  style={{ maxHeight: "5%", maxWidth: "5%" }}
                />
              </li>
              <li style={{display:'inline'}}className="list-unstyled mr-1">
              <img
                  className='m-1'
                  src={'https://image.flaticon.com/icons/svg/60/60580.svg'}
                  alt="photo"
                  style={{ maxHeight: "5%", maxWidth: "5%" }}
                />
              </li>
              <li style={{display:'inline'}}className="list-unstyled mr-1">
              <img
                  className='m-1'
                  src={'https://www.pngkey.com/png/detail/15-150195_gmail-comments-google-mail-logo-black-and-white.png'}
                  alt="photo"
                  style={{ maxHeight: "5%", maxWidth: "5%" }}
                />
              </li>
              <li style={{display:'inline'}}className="list-unstyled mr-1">
              <img
                  className='m-1'
                  src={'https://img.favpng.com/5/0/6/apple-logo-computer-icons-png-favpng-Z7JmpDNh62tZWxRKF7KXc4Ag2.jpg'}
                  alt="photo"
                  style={{ maxHeight: "5%", maxWidth: "5%" }}
                />
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> mdsaqlainpatel538@gmail.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;