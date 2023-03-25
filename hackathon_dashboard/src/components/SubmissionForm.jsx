import React, { useState } from 'react';
import vector from '../assets/Vector.png';
import './submissionform.css';


const SubmissionForm = props => {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [desc, setDesc] = useState("");
    const [rep, setRep] = useState("");
    const [link, setLink] = useState("");

    const [value, setValue] = useState("");
    const countChars = (e) => {
        setValue(e.target.value)
        setCount(e.target.value.length);
    }
    const obj = {
        title: title,
        summary: summary,
        desc: desc,
        rep: rep,
        link: link,
        id: rep
    }

    const handleClick = () => {
        if (title && summary && desc && rep && link && obj.id) {
            const data = Array.from(JSON.parse(localStorage.getItem("data")));
            console.log(data);
            data.push(obj);
            localStorage.setItem("data", JSON.stringify(data));
            console.log(JSON.parse(localStorage.getItem("data")));
        }
    }





    return (
        <form action="" className="submissionForm">
            <h3 className='main-heading'>New Hackathon Submission</h3>
            <h4>Title</h4>
            <input type="text" placeholder='Title of your submission' value={title} onChange={(e) => setTitle(e.target.value)} className='title'></input>
            <h4>Summary</h4>
            <input type="text" placeholder='A short summary of your submission(this will be visible with your submission)' value={summary} onChange={(e) => setSummary(e.target.value)} className='title'></input>
            <h4>Description</h4>
            <textarea name="desc" id="desc" cols="66" rows="10" placeholder='A short summary of your submission(this will be visible with your submission)' value={value} onChange={(e) => { countChars(e); setDesc(e.target.value) }} className='description'></textarea>
            <h5 className='count'>{count}/3000 characters</h5>
            <h4>Cover Image</h4>
            <div className="image-sec">
                <img src={vector} alt="" />

            </div>
            <div className="hack-main">
                <div className="hack-start">
                    <h4>Hackathon Starts</h4>
                    <input type="text" id="date" placeholder='Hackathon Start Date' onFocus="(this.type='date')" required />
                </div>
                <div className="hack-start">
                    <h4>Hackathon Starts</h4>
                    <input type="text" id="date" placeholder='Hackathon End Date' onFocus="(this.type='date')" required />
                </div>
            </div>
            <h4>Github Repositry</h4>
            <input type="text" placeholder="Enter your submission's public Github repositry link  " value={rep} onChange={(e) => { setRep(e.target.value) }} className='title'></input>
            <h4>Other Links</h4>
            <input type="text" placeholder="You can upload a video demo or URL of your demo app here" value={link} onChange={(e) => { setLink(e.target.value) }} className='title'></input>
            <div className="submit">
                <span className='textsub'
                    onClick={() => { handleClick() }}
                >Upload Submission </span>
            </div>
        </form>
    );
};

export default SubmissionForm;