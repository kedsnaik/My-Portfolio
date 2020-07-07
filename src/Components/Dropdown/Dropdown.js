import React,{Component} from 'react';
import './Dropdown.css';

function Dropdown({page,viewBlog}){
    return( 
        <div>
             <nav className = "navback">
                <li  className = "navElem"><a onClick = {page} className = "elem">Home</a></li>
                <li className = "navElem"><a onClick = {page} className = "elem">About</a></li>
                <li  className = "navElem"><a onClick = {page} className = "elem">Skills</a></li>
                <li className = "navElem"><a onClick = {page} className = "elem">Contact</a></li>
                <li className = "navElem"><a onClick = {viewBlog} className = "elem" target = "_blank" style = {{textDecoration: "none", textEmphasis: "none", color : "#4a4a4a"}} href = "https://medium.com/kedar-naik" alt = "My Medium Blog">Visit Blog</a></li>
            </nav>
        </div>
    )
}

export default Dropdown;