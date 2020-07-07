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
                        <a href="#"><i className="fab fa-facebook-f icon color123" target = "_blank" onClick = {()=>{this.f1("facebook")}}></i></a>
                    </li>
                    <li className = "li1">
                        <a href="https://twitter.com/Ked_Naik" target = "_blank" onClick = {()=>{this.f1("twitter")}}><i className="fab fa-twitter icon color123"></i></a>
                    </li>
                    <li className = "li1">
                        <a href="https://www.linkedin.com/in/kedar-naik-ba652213b" target = "_blank" onClick = {()=>{this.f1("linkedin")}}><i className="fab fa-linkedin-in icon color123"></i></a>
                    </li>
                    <li className = "li1">
                        <a href="https://medium.com/@kedsnaik" target = "_blank" onClick = {()=>{this.f1("medium")}}><i className="fab fa-medium icon color123"></i></a>
                    </li>
                    <li className = "li1">
                        <a href="#"><i className="fab fa-instagram icon color123" aria-hidden="true" target = "_blank" onClick = {()=>{this.f1("instagram")}}></i></a>
                    </li>
                    <li className = "li1">
                        <a href="https://github.com/kedsnaik" target = "_blank"  onClick = {()=>{this.f1("github")}}><i className="fab fa-github icon color123"></i></a>
                    </li>
                </ul>
            </div>
        )
        }
}

export default Card;