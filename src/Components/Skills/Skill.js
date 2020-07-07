import React,{Component} from 'react';
import './Skill.css';
// import './skilljs.js';
function Skill({contact}) {
        return (
            <div>
                <br />
                <div className = "positionSkill">
                    <h1 className = "titleHead">My Certifications :</h1> <br />
                    <div className = "linksSkill">
                        <a href = "https://confirm.udacity.com/GEVKD6ET" target = "_blank" className = "tile1">Fullstack Web developer Nanodegree - <span style = {{color : "black"}}>Udacity</span></a>
                        <a href = "https://www.udemy.com/certificate/UC-TEHB7IIR/" target = "_blank" className = "tile1">The Complete Web developer course -<span style = {{color : "black"}}> Udemy</span></a>
                        <a href = "https://drive.google.com/file/d/1wMn09ti2uy82wmh8KfcKHuJENa19L00W/view" target = "_blank" className = "tile1">Internshala Web development course - <span style = {{color : "black"}}>Internshala</span></a>
                        <a href = "https://drive.google.com/file/d/1VJNTIeYB3v9ud_UgTajlmfe4zMpCnU1K/view" target = "_blank" className = "tile1">Core Java - <span style = {{color : "black"}}>Internshala</span></a>
                        <a href = "https://drive.google.com/file/d/13pWfyOB6bbnuQASjRWkm4B_Buy-B8L4X/view" target = "_blank" className = "tile1">Angular JavaScript - <span style = {{color : "black"}}>Internshala</span></a>
                    </div>
                </div>
            <div className = "positionSkill">
            
                    <br />
                <br/>
                <h1 className = "topic">Programming Languages :</h1><br />
                    <p className = "tile2"> HTML5 & CSS3</p>
                    <p className = "tile2">Vanilla JavaScript</p>
                    <p className = "tile2">Python</p>
                    <p className = "tile2">Java</p>
                    <p className = "tile2">C Programming</p>
                    <p className = "tile2">C++ Programming</p>
                    <p className = "tile2">Postgresql</p><br /><br />
                <h1 className = "topic">Libraries, frameworks and Web layout:</h1><br />
                    <p className = "tile2">ReactJs</p>
                    <p className = "tile2">NodeJs</p>
                    <p className = "tile2">JQuery</p>
                    <p className = "tile2">Bootstrap</p>
                    <p className = "tile2">Flexbox</p>
                    <p className = "tile2">CSS grid</p>
            </div>
            {/* <div className = "positionSkill"><br />
                <h1 className = "titleHead">My gadgets :</h1><br />
                <p className = "tile">Macbook air</p>
                <p className = "tile">Oneplus 7</p>
                <p className = "tile">Dell inspirion</p>
                <p className = "tile">Acer aspire desktop</p>
            </div> */}
            <div className = "positionSkill"><br />
                <h1 className = "titleHead">Other interests :</h1><br />
                <p className = "tile">Cricket</p>
                <p className = "tile">Chess</p>
                <p className = "tile">Table Tennis</p>
                <p className = "tile">Portrait drawing</p>
            </div>
            <br />
            <p>If you have an interesting project on mind or here to collaborate, please contact me <a style = {{color : "blue"}} onClick = {contact}> here </a></p>
            <br />
            </div>
        )
    }
export default Skill;