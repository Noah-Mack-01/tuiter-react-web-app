
const NavigationSidebarStackedItem = (keyIconBottom, keyIconTop, label="", active=false) => {
    return (`
        <a href="#" class="row list-group-item list-group-item-action ${active ? "active" : ""} ps-0">
            <div class="d-flex col-auto align-items-center">
                <span class="fa-stack fa-1x" style="font-size:.5em">
                    <i class="fas ${keyIconBottom} fa-stack-2x"></i>
                    <i class="fas ${keyIconTop} fa-stack-1x " style="color:black"></i>
                </span>
                <div class="d-xl-block d-none ps-2">${label}</div>         
            </div>
        </a>
    `);
}

export default NavigationSidebarStackedItem