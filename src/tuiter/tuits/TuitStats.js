import React from "react"
import {Chat, Heart, HeartFill, ArrowRepeat, Share} from "react-bootstrap-icons"
import { updateTuitThunk } from "../../services/tuit-thunks";
import { useDispatch } from "react-redux";




export default function TuitStats({
    post = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }

    


}){

    const dispatch = useDispatch();
    function likeHandler(like) {
        dispatch(updateTuitThunk({
            ...post,
            likes: (like) ? post.likes + 1 : post.likes - 1
        }))
    }

    return (
        <div className="row d-flex text-center">
            <div className="col-3"><Chat/>{` ${post.replies}`}</div>
            <div className="col-3">{!post.liked ? <Heart onClick={likeHandler(true)}/> : <HeartFill onClick={likeHandler(false)}/>}{` ${post.likes}`}</div>
            <div className="col-3"><ArrowRepeat/>{` ${post.retuits}`}</div>
            <div className="col-3"><Share/></div>
        </div>
    );
}