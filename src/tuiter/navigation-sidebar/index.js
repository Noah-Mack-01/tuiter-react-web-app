import React from "react";
import { BellFill, BookmarkFill, EnvelopeFill, Grid1x2Fill, HouseFill, ListUl, PersonFill, Search } from "react-bootstrap-icons"
const NavigationSidebar = ({
    active = 'explore'
}
) => {
    return (
        <div className="list-group">
            <a className="list-group-item" href="#tuiter">Tuiter</a>
            <a className={`list-group-item ${active==='home' ? 'active' : ''}`} href="#home"><HouseFill/> Home</a>
            <a className={`list-group-item ${active==='explore' ? 'active' : ''}`} href="#search"><Search/> Explore</a>
            <a className={`list-group-item ${active==='notifications' ? 'active' : ''}`} href="#notifications"><BellFill/> Notifications</a>
            <a className={`list-group-item ${active==='messages' ? 'active' : ''}`} href="#messages"><EnvelopeFill/> Messages</a>
            <a className={`list-group-item ${active==='bookmarks' ? 'active' : ''}`} href="#bookmarks"><BookmarkFill/> Bookmarks</a>
            <a className={`list-group-item ${active==='lists' ? 'active' : ''}`} href="#lists"><ListUl/> Lists</a>
            <a className={`list-group-item ${active==='profile' ? 'active' : ''}`} href="#profile"><PersonFill/> Profile</a>
            <a className={`list-group-item ${active==='more' ? 'active' : ''}`} href="#more"><Grid1x2Fill/> More</a>
            <button className="btn btn-primary rounded-pill mt-2">Tuit</button>
        </div>
        
    );
}

export default NavigationSidebar;