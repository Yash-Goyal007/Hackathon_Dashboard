import React from 'react';
import classes from './DetailFront.module.css';
import star from '../assets/star.png';
import pirate from '../assets/pirate.png';
import edit from '../assets/edit.png';
import deleteIcon from '../assets/deleteIcon.png';
import { useParams, useHistory} from "react-router-dom";
import classeS from './DetailsDescription.module.css';
import github from '../assets/github.png';
import otherLinks from '../assets/otherLinks.png';
import calender from '../assets/calender.png';


const DetailFront = props => {
    const history = useHistory();
    const dt=JSON.parse(localStorage.getItem("data"))
    const data=dt?Array.from(dt):[];
    const {id} = useParams()
    let result = id.slice(1);
    console.log(result)
    const dobj = data.filter((e)=>{
        return e.id === result;
    })
    const obj = dobj[0];
    console.log(obj)
    const delHack=()=>{
        const dt=JSON.parse(localStorage.getItem("data"))
        const data=dt?Array.from(dt):[];
        console.log(data);
        const nobj = data.filter((e)=>{
            return e.id !== result;
        })
        console.log(nobj);
        localStorage.setItem("data", JSON.stringify(nobj))
        history.push('/')
    }

    const handleClick=()=>{
        document.getElementById("del").style.display="flex";
        document.getElementById("main-dabba").style.filter="blur(2px)";
    }
    const handleCancel=()=>{
        document.getElementById("del").style.display="none";
        document.getElementById("main-dabba").style.filter="none";

    }
    return (
        <>
        <div id="main-dabba" >
        <div className={classes.detailFront} >
            <div className={classes.details}>
                <div className={classes.header}>
                    <img src={pirate} alt="" />
                    <h1>{obj.title}</h1>
                </div>
                <p>{obj.summary}</p>
                <div className={classes.favorite}>
                    <img src={star} alt="" />
                    <div className={classes.date}>
                        <div className={classes.dateCircle}>
                            <img src={calender} alt="" />
                            <p>03 March</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.buttons}>
                <button>
                    <div className={classes.button}>
                        <img src={edit} alt="" />
                        <span>Edit</span>
                    </div>
                </button>
                <button>
                    <div className={classes.button} onClick={()=>{handleClick()}}>
                        <img src={deleteIcon} alt="" />
                        <span
                        >Delete</span>
                    </div>
                </button>
            </div>
        </div>
        <div className={classeS.details}>
            <div className={classeS.description}>
                <h5>Description</h5>
                <p>{obj.desc}</p>
            </div>
            <div className={classeS.links}>
                <h6>Hackathon</h6>
                <h5>{obj.name}</h5>
                <button>
                    <div className={classeS.button}>
                        <img src={github} alt="" />
                        <span>GitHub Repository</span>
                    </div>
                </button>
                <button>
                    <div className={classeS.button}>
                        <img src={otherLinks} alt="" />
                        <span>Other Link</span>
                    </div>
                </button>
            </div>
        </div>
        </div>
        <div className={classes.del} id="del"
         >
            <h2>Delete Model</h2>
            <p>This action is irreversible. Are you sure you want to delete this model?</p>
            <div className={classes.btns}>
            <div className={classes.btn1}
            onClick={()=>{handleCancel()}}
            >Cancel</div>
            <div className={classes.btn2}
             onClick={()=>{delHack()}}
            >Delete</div>
            </div>
            
         </div>

        </>
    );
};

export default DetailFront;