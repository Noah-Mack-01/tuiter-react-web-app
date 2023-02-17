const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item col-12 row d-flex">
            <img class="col-2 px-0 rounded-circle" height="50px" src="../../images/${who.avatarIcon}">
            <div class="col-7 d-flex-column">
                <h6 class="fw-bold">${who.userName}<i class="fa fa-check override ps-2"></i></h6>
                @${who.handle}
            </div>
            <div class="col-3 d-flex justify-content-center align-items-center"><button class="btn btn-primary rounded-pill">Follow</button></div>
        </li>
    `);
}

export default WhoToFollowListItem;