import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk}
  from "../../services/tuit-thunks";

export default function TuitList() {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        console.log("Posts" + tuits);
    },[dispatch])

    return (
        <ul className="list-group">
          {
          loading && <li className="list-group-item">Loading...</li>
          }
          {
          tuits && tuits.map(post => <TuitItem key={post._id} post={post}/>)
          }
     </ul>
    )
}

