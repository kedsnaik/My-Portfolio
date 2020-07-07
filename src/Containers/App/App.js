import React,{Component} from 'react';
import './App.css';
import About from '../../Components/AboutPage/About.js';
// import Social from '../Containers/Social.js';
import Intro from '../../Components/Intro/Intro.js';
// import './js.js';
import Nav from '../../Components/Navigation/Nav.js';
import Contact from '../../Components/Contact/Contact.js';
import Skill from '../../Components/Skills/Skill.js';
import Dropdown from '../../Components/Dropdown/Dropdown.js';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          route : "Home",
          drop : "no"
      };
    }
    
    f1 =()=>{
      if(this.state.route === "Home"){
        setTimeout(()=>{
          document.querySelector('#Home').style.display = "none";
          document.querySelector('#Home').style.color = "#a8132e";
          document.querySelector('#About').style.color = "#484848";
          document.querySelector('#Skills').style.color = "#484848";
          document.querySelector('#Blog').style.color = "#484848";
          document.querySelector('#Contact').style.color = "#484848";
          console.log("yo");
        },100)
      }
      else if(this.state.route === "About"){
        document.querySelector('#Home').style.display = "block";
        document.querySelector('#About').style.color = "#a8132e";
        document.querySelector('#Home').style.color = "#484848";
        document.querySelector('#Skills').style.color = "#484848";
        document.querySelector('#Blog').style.color = "#484848";
        document.querySelector('#Contact').style.color = "#484848";
        console.log("yo");
      }else if(this.state.route === "Contact"){
        document.querySelector('#Home').style.display = "block";
        document.querySelector('#About').style.color = "#484848";
        document.querySelector('#Home').style.color = "#484848";
        document.querySelector('#Skills').style.color = "#484848";
        document.querySelector('#Blog').style.color = "#484848";
        document.querySelector('#Contact').style.color = "#a8132e";
      }else if(this.state.route === "Skills"){
        document.querySelector('#Home').style.display = "block";
        document.querySelector('#About').style.color = "#484848";
        document.querySelector('#Home').style.color = "#484848";
        document.querySelector('#Skills').style.color = "#a8132e";
        document.querySelector('#Blog').style.color = "#484848";
        document.querySelector('#Contact').style.color = "#484848";
      }else if(this.state.route === "Blog"){
        document.querySelector('#Home').style.display = "block";
        document.querySelector('#About').style.color = "#484848";
        document.querySelector('#Home').style.color = "#484848";
        document.querySelector('#Skills').style.color = "#484848";
        document.querySelector('#Blog').style.color = "#a8132e";
        document.querySelector('#Contact').style.color = "#484848";
      }
    }

    changeRoute = (event) => {
      this.setState({route : event.target.innerHTML});
      console.log(this.state.route);
    }
    changeRoute1 = (event) => {
      this.setState({route : event.target.innerHTML});
      console.log(this.state.route);
      this.setState({
        drop : "no"
      })
    }

    funcNav = (event) =>{
      // document.querySelector(".Nav").style.backgroundColor = "#F8F8FF";
      if (this.state.drop === "yes"){
        this.setState({
          drop : "no"
        })
      }else {
        this.setState({
          drop : "yes"
        })
      }
      console.log("yo this is");
    }

    changeRouteToHome = (event) => {
      this.setState({route : "Home"});
    }
    changeRouteToAbout = (event) =>{
      this.setState({route : "About"});
    }
    changeRouteToContact = (event) =>{
      this.setState({route : "Contact"});
    }
    hideDrop = (event) => {
      this.setState({
        drop : "no",
      })
    }
    render(){
      if (this.state.route === "Home"){
        return(
          <div className = "allContents">
            {this.f1()}
            <Nav funcNav = {this.funcNav} page = {this.changeRoute} logoClick = {this.changeRouteToHome}/>
            <div className = "resp">
                {this.state.drop === "yes" ?
                  <Dropdown viewBlog = {this.funcNav} page = {this.changeRoute1}/> : <div></div>
                  }

              <Intro learnMore = {this.changeRouteToAbout} ContactMe = {this.changeRouteToContact}/>
            </div>
            {/* <Social /> */}
          </div>
        )
      }else if (this.state.route === "About"){
        return(
          <div className = "allContents">
            {this.f1()}
            <Nav funcNav = {this.funcNav} page = {this.changeRoute} logoClick = {this.changeRouteToHome} backToHome = {this.changeRouteToHome}/>
            <div className = "resp">
            {this.state.drop === "yes" ?
                  <Dropdown viewBlog = {this.funcNav} page = {this.changeRoute1}/> : <div></div>
                  }
              <About ContactMe = {this.changeRouteToContact}/>
            </div>
          </div>
        )
      }
      else if (this.state.route === "Blog"){
        return(
          <div className = "allContents">
            {this.f1()}
            <Nav funcNav = {this.funcNav} page = {this.changeRoute} logoClick = {this.changeRouteToHome}  backToHome = {this.changeRouteToHome}/>
            {this.state.drop === "yes" ?
                  <Dropdown  viewBlog = {this.funcNav} /> : <div></div>
            }
            <div>Blog</div>
          </div>
        )
      }
      else if (this.state.route === "Contact"){
        return(
          <div className = "allContents">
            {this.f1()}
            <Nav funcNav = {this.funcNav} page = {this.changeRoute} logoClick = {this.changeRouteToHome}  backToHome = {this.changeRouteToHome}/>
            {this.state.drop === "yes" ?
                  <Dropdown viewBlog = {this.funcNav} page = {this.changeRoute1}/> : <div></div>
                  }
            <div className = "resp">
              {/* <div id = "abc"></div> */}
              <Contact learnMore = {this.changeRouteToAbout} ContactMe = {this.changeRouteToContact}/>
            </div>
            {/* <Social /> */}
          </div>
        )
      }
      else if (this.state.route === "Skills"){
        return(
          <div className = "allContents">
            {this.f1()}
            <Nav funcNav = {this.funcNav} page = {this.changeRoute} logoClick = {this.changeRouteToHome}  backToHome = {this.changeRouteToHome}/>
            {this.state.drop === "yes" ?
                  <Dropdown viewBlog = {this.funcNav} page = {this.changeRoute1} /> : <div></div>
                  }
            <div className = "resp">
              {/* <div id = "abc"></div> */}
              <Skill contact = {this.changeRouteToContact}/>
            </div>
            {/* <Social /> */}
          </div>
        )
      }
    }
  }

export default App;