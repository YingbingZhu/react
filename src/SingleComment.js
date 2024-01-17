import React from "react";
import zyb from "./image/zyb.jpg"

const SingleComment = (props) => {
    console.log(props)
    return (
        <div className='ui comment'>
        <a href="/" className='avatar'>
            <img src={zyb} alt="profile picture" />
        </a>
        <div className='content'>
            <a href="/" className='author'>
                {props.name}
            </a>
            <div className='metadata'>
                <span className='date'>
                    {props.date}
                </span>
            </div>
            <div className='text'>
                {props.text}
            </div>
        </div>
    </div>
    )
}

// make component accessible
export default SingleComment;