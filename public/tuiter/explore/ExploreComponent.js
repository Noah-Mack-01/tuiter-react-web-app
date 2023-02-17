import PostSummaryList
   from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <form class=" form-group row col-11 mb-0" action="#">
                    <div class="form-group row border border-primary rounded-pill">
                        <label for="search" class="col-1 col-form-label">
                            <i class="fa fa-search"></i>
                        </label>
                        <div class="col-8">
                        <input class="form-control-plaintext" type="text" name="search" id="search">
                        </div>
                    </div>
                </form>
                <a href="#" class="col-1 mt-1"><i class="fa fa-2x fa-cog"></i></a>
            </div>
            <!--Search Bar-->
            <ul class="me-3 nav my-2 nav-tabs">
                <li class="nav-item"><a href="" class="nav-link">For You</a></li>
                <li class="nav-item"><a href="" class="nav-link active">Trending</a></li>
                <li class="nav-item"><a href="" class="nav-link">News</a></li>
                <li class="nav-item"><a href="" class="nav-link">Sports</a></li>
                <li class="nav-item d-md-block d-none"><a href="" class="nav-link">Entertainment</a></li>
            </ul>
           <!-- image with overlaid text -->
            <div class="row mx-0">
                <img src="../../images/ai.jpeg" alt="banner-image" class="wd-banner-image ps-0 pe-4 my-2">
                <div class="position-absolute">Artificial Intelligence</div>
            </div><!--Image-->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
