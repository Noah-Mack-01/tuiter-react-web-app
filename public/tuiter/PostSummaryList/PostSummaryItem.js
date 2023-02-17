const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item d-flex justify-content-between row col-12">
            <div class="d-flex-column col-10">
                <div class="label">${post.topic}</div>
                <div class="fw-bold">${post.userName || post.title} <i class="fa fa-check override px-1"></i></h6> &#8226; <span class="label">${post.time}</span></div>
                <div class="">${!post.userName ? "" : post.title}</div>
            </div>
            <img class="p-1 d-flex-column col-2 rounded" src=${post.image}>
        </li>
    `);
}

export default PostSummaryItem;