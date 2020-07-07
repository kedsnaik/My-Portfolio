import React,{Component} from 'react';
import './Card.css';

class Card extends Component{
    f1 = (a) =>{
        setTimeout(()=>{
            console.log("Working" + a);
        },100)
    }
    render(){
        return(
            <div className = "SocialIcons">
                <ul className = "ul1">
                    <li className = "li1">
                        <a className = "icon1" href="https://twitter.com/Ked_Naik" target = "_blank" onClick = {()=>{this.f1("twitter")}}><i className="fab fa-twitter icon color123"></i></a>
                    </li>
                    <li className = "li1">
                        <a className = "icon1" href="https://www.linkedin.com/in/kedar-naik-ba652213b" target = "_blank" onClick = {()=>{this.f1("linkedin")}}><i className="fab fa-linkedin-in icon color123"></i></a>
                    </li>
                    <li className = "li1">
                        <a className = "icon1" href="https://medium.com/@kedsnaik" target = "_blank" onClick = {()=>{this.f1("medium")}}><i className="fab fa-medium icon color123"></i></a>
                    </li>
                    <li className = "li1">
                        <a className = "icon1" href="https://github.com/kedsnaik" target = "_blank"  onClick = {()=>{this.f1("github")}}><i className="fab fa-github icon color123"></i></a>
                    </li>
                </ul>
            </div>
        )
        }
}

export default Card;