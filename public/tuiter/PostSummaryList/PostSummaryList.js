
import exploreItems from "./exploreItems.js";
import PostSummaryItem from "./PostSummaryItem.js"

let listOutput = "";
exploreItems.forEach(entry=>{
    listOutput+=PostSummaryItem(entry);
})

const PostSummaryList = () => {
   return (`    
    <ul class="list-group">
        ${listOutput}
    </ul>
`); }


export default PostSummaryList;