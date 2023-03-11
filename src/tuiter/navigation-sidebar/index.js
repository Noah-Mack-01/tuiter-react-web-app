import React from "react";
import { BellFill, BookmarkFill, EnvelopeFill, Grid1x2Fill, HouseFill, ListUl, PersonFill, Search } from "react-bootstrap-icons"
const NavigationSidebar = ({
    active = 'explore'
}
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item ${active==='home' ? 'active' : ''}`}><HouseFill/> Home</a>
            <a className={`list-group-item ${active==='explore' ? 'active' : ''}`}><Search/> Explore</a>
            <a className={`list-group-item ${active==='notifications' ? 'active' : ''}`}><BellFill/> Notifications</a>
            <a className={`list-group-item ${active==='messages' ? 'active' : ''}`}><EnvelopeFill/> Messages</a>
            <a className={`list-group-item ${active==='bookmarks' ? 'active' : ''}`}><BookmarkFill/> Bookmarks</a>
            <a className={`list-group-item ${active==='lists' ? 'active' : ''}`}><ListUl/> Lists</a>
            <a className={`list-group-item ${active==='profile' ? 'active' : ''}`}><PersonFill/> Profile</a>
            <a className={`list-group-item ${active==='more' ? 'active' : ''}`}><Grid1x2Fill/> More</a>
            <button class="btn btn-primary rounded-pill mt-2">Tuit</button>
        </div>
        
    );
}

export default NavigationSidebar;