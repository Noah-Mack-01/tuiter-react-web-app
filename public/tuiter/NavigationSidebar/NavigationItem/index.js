const NavigationSidebarItem = (keyIcon, label="", active=false) => {
    return (`
        <a href="#" class="row col-12 list-group-item list-group-item-action ${active ? "active" : ""} ps-0">
            <div class="d-flex col-auto align-items-center">
                <i class="fa ${keyIcon}"></i>
                <div class="d-xl-block d-none ps-2">${label}</div>         
            </div>
        </a>
    `);
}

export default NavigationSidebarItem