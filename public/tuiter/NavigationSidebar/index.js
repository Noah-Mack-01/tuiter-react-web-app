import NavigationSidebarItem from "./NavigationItem/index.js";
import NavigationSidebarStackedItem from "./NavigationItem/stackedItem.js";

const NavigationSidebar = () => {
    return (`
        <ul class="list-group ms-2">
            ${NavigationSidebarItem("fa-key")}
            ${NavigationSidebarItem("fa-home", "Home")}
            ${NavigationSidebarItem("fa-hashtag", "Explore", true)}
            ${NavigationSidebarItem("fa-bell", "Notifications")}
            ${NavigationSidebarItem("fa-envelope", "Messages")}
            ${NavigationSidebarItem("fa-bookmark", "Bookmarks")}
            ${NavigationSidebarItem("fa-list", "Lists")}
            ${NavigationSidebarItem("fa-user", "Profile")}
            ${NavigationSidebarStackedItem("fa-circle", "fa-ellipsis-h", "More")}
        </ul>
        <button class="btn btn-primary rounded-pill mt-2 col-11">Tuit</button>
    `);
}

export default NavigationSidebar;