
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"


let listOutput = "";
who.forEach(entry=>{
    listOutput+=WhoToFollowListItem(entry);
})

const WhoToFollowList = () => {
   return (`    
    <ul class="list-group">
        <li class="row list-group-item col-12 fw-bold">Who to follow</li>
    ${listOutput}
    </ul>
`); }


export default WhoToFollowList;