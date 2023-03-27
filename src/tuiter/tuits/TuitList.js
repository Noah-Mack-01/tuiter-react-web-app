import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./TuitItem"

 // NOTE: Item paragraphs were produced with chatGPT--nothing to do with internal code, just for making up lorem-ipsum tweet content
export default function TuitList() {
    const postsArray = useSelector(state=>state.tuits);
    console.log(postsArray)
    return (
        <ul className="list-group">
                {
                    postsArray.map(post => <TuitItem key={post._id} post={post}/>)
                }
        </ul>
    )
}

