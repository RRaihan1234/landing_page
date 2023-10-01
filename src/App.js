import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './App.css';
import './responsive_style.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Scrollspy from 'react-scrollspy';
import myImage from './images/pic-removebg-preview.png';


function App() {

  let [show, setShow] = useState(false)
    
  const hide = (e) => {
       document.querySelector(".navCollapse1").style.display="none";
       setShow((prevShow) => !prevShow);
 } 
  const handleClick = () => {
    if (show===false){
        document.querySelector(".navCollapse1").style.display="block";
        setShow((prevShow) => !prevShow);
    }else{
        document.querySelector(".navCollapse1").style.display="none";
        setShow((prevShow) => !prevShow);
    }
} 

  
  return (
    <div>
     <header className="header_wrapper1">
      <Navbar bg="white" expand="lg" variant="dark" fixed='top' className='navbar'>
      <Container>
        <Navbar.Brand href="#home" className='text-primary brand'><h1 style={{color:"black"}}>APP NAME</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu1' onClick={handleClick}/>
        <Navbar.Collapse id="basic-navbar-nav" className="navCollapse1 justify-content-end">
          <Nav className="menu-navbar-nav1">
            <Scrollspy 
                    items={ ['home', 'about', 'education', 'experience', 'portfolio', 'contact'] } 
                    currentClassName="isCurrent" offset={-1}>
                    <li className='link1' onClick={hide}><a href="#home">HOME</a></li>
                    <li className='link1' onClick={hide}><a href="#services">SERVICES</a></li>
                    <li className='link1' onClick={hide}><a href="#contact">CONTACT</a></li>
                    <li className='link1' onClick={hide}><a href="#appointmentorserial">APPOINTMENT/SERIAL</a></li>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
    </header>


    <section id="home" className="banner_wrapper bg-white">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 order-lg-1 order-2 banner-content">
                    <p className="row1">sjvlkdjgbkfjdgkdbhkldjlkgdf</p>
                    <h1 className="row2">sjjflvjdgjdzf</h1>
                    <p className="row3">ajisjlijglijfdilgjldigfjdjlkdjklgklj</p>
                </div>
                <div className="col-lg-5 order-lg-2 order-1 text-center">
                    <div className="top-right-img">
                        <img src={myImage} className="img-fluid" alt="myPhoto" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Banner section exit */}

    


    {/* My About section start */}
    <section id="services" className="about_wrapper bg-white">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-left">
                    <br /><br /><br />
                    <h2 className="text-center text-black">Services That We Provide</h2>
                    <p className="p1">
                      1. hksjhfkjshgjks <br></br>
                      2. hksjhfkjshgjks <br></br>
                      3. hksjhfkjshgjks <br></br>
                      4. hksjhfkjshgjks <br></br>
                      5. hksjhfkjshgjks <br></br>
                    </p>
                </div>
                
            </div>
        </div>
    </section>
    {/* My About section exit */}

   

    

    {/* My Education section start */}
    {/* <section id="education" className="education_wrapper bg-black" data-to-scrollspy-id="education">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 mb-5">
                    <h2 className="text-center bg-secondary">Education</h2>
                         
                          <p className="p5">1. BSc in EEE (September 2018), United International 
                            University, Dhaka, Bangladesh (CGPA-3.93/4)</p>
                           <p className="p6">2. HSC in Science (2013), Rangpur Govt. College, 
                                Rangpur, Bangladesh (GPA-5/5)</p>
                          <p className="p7">3. SSC in Science (2011), Rangpur Zila School,
                              Rangpur, Bangladesh (GPA-5/5)</p>
                </div>
                
            </div>
        </div>
    </section> */}
    {/* My Education section exit */}

    {/* My Experience section start */}
    {/* <section id="experience" className="experience_wrapper bg-black">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-left mb-5">
                    <h2 className="text-center bg-secondary">Experience</h2>
                    <p className="p2">1. Web Development [Doing it personally] (September 19, 2021 - Present),
                        Dhaka, Bangladesh

                    </p>
                    <p className="p3">2. Former Associate Engineer (August 18, 2019 - July 31, 2021),
                            Neural Semiconductor Ltd, Tafuri Technologies, Dhaka, Bangladesh</p>
                    <p className="p4">3. Former Intern (February 12, 2019 - August 12, 2019), Neural Semiconductor 
                        Ltd, Tafuri Technologies, Dhaka, Bangladesh</p>
                </div>
                
            </div>
        </div>
    </section> */}
    {/* My Experience section exit */}

   

    {/* portfolio Section start */}
    {/* <section id="portfolio" className="portfolio_wrapper bg-black">
        <div className="container">
           
                <div className="col-sm-12 text-center mb-md-5 mb-5 bg-secondary portfolioHeading">
                    <h2>Portfolio regarding web development</h2>
                </div>
           
            
               
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb-5">
                                <h5 className="mb-2 mt-4">Social Media App using MERN Stack</h5>
                                <div className="portfolio-img">
                                    <img src={socialmedia} className="img-fluid w-100" alt="socialmedia" />
                                   
                                </div>
                                <button className="btn btn-primary text-black mt-2 btn1 mb-5" onClick={func1}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Realtime Chat App using MERN Stack and Socket.io</h5>
                                <div className="portfolio-img">
                                    <img src={chatlatest} className="img-fluid w-100" alt="chat app"/>
                                   
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn2 mb-5" onClick={func2}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Millionaire Quiz App using React</h5>
                                <div className="portfolio-img">
                                    <img src={quiz1} className="img-fluid w-100" alt="Millionaire quiz app"/>
                                    
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn3 mb-5" onClick={func3}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Food CRUD Application using MERN Stack (this has also been completed using MySQL, Node JS, Express JS, React JS, and MEAN Stack)</h5>
                                <div className="portfolio-img">
                                    <img src={crud} className="img-fluid w-100" alt="CRUD App"/>
                                    
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn4 mb-5" onClick={func4}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Quiz Application using React</h5>
                                <div className="portfolio-img">
                                    <img src={quiz} className="img-fluid w-100" alt="Quiz app"/>
                                    
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn5 mb-5" onClick={func5}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Country Application using React</h5>
                                <div className="portfolio-img">
                                    <img src={country} className="img-fluid w-100" alt="Country App"/>
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn6 mb-5" onClick={func6}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">React Book CRUD App using Redux</h5>
                                <div className="portfolio-img">
                                    <img src={bookRedux} className="img-fluid w-100" alt="Book CRUD App"/>
                                    
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn7 mb-5" onClick={func7}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Employee Info Storage CRUD Application using Angular, Bootstrap, and JSON Server</h5>
                                <div className="portfolio-img">
                                    <img src={emp_info_storage} className="img-fluid w-100"  alt="Employee Info Storage CRUD App"/>
                                    
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn8 mb-5" onClick={func8}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">A website template demo using HTML and CSS</h5>
                                <div className="portfolio-img">
                                    <img src={html_css1} className="img-fluid w-100"  alt="Web Template 01"/>
                                    
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn9 mb-5" onClick={func9}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">A website template demo using HTML and CSS</h5>
                                <div className="portfolio-img">
                                    <img src={html_css2} className="img-fluid w-100"  alt="Web Template 02"/>
                                
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn10 mb-5" onClick={func10}>View Project</button>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <p className="text-center">Note : I did all the projects with the help of the internet.</p>
                        </div>
                   
           
        </div>
    </section> */}
    {/* portfolio Section exit */}

  

    {/*Footer section*/}
    <section id="contact" className="contact_wrapper mt-md-0 bg-white">
        <div className="container mt-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-center">
                    <div className="footer-logo mb-3 mb-md-0">
                        <h2 className="text-black">Contact Us</h2>
                        <p className="text-black">Location : abcdefghi, Dhaka, Bangladesh</p>
                        <p className="text-black">Gmail ID : abcd1234@gmail.com</p>
                        <p className="text-black">Mobile : +8801747000xyz</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="appointmentorserial" className="contact_wrapper mt-md-0 bg-white">
        <div className="container mt-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-center">
                    <div className="footer-logo mb-3 mb-md-0">
                        <h2 className="text-black">Appointment or Serial</h2>
                        <p className="text-black">Something needs to be shown here</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    
  );
}

export default App;
