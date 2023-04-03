import React from "react";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";




export default function TuitItem({
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
}) {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
    <div className="list-group-item">
        <div className="row align-items-start">
            <div className="d-flex col-2 justify-content-center">
                <img height="50px" width="50px" className="rounded-circle object-fit-cover" src={`../images/${post.image}`} alt={"no profile pic"}/>
            </div>
            <div className="col-10">
                <div className="row">
                    <div className="d-flex justify-content-between ps-0 mb-0">
                    <div><span className="font-weight-bold">{`${post.userName}`}</span> {`${post.handle} \u2022 ${post.time}`}</div>
                                        <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post._id)}></i></div>
                    <p className="px-0">{post.tuit}</p>
                </div>
                <TuitStats key={post._id} post={post}/>
            </div>
        </div>
    </div>);
}