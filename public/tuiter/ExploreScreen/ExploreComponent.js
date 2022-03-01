import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    <div class="row">
    <!-- search field and cog -->
        <div class = "container-fluid p-0">
            <div class = "input-icons mt-1">
                <i class="fa fa-search icon" style="color: gray"></i>
                <input class="input-field" type="text" placeholder="Search Twitter"
                       style="background: #202020;color: white; border-color: #202020; outline: none;">
                <a href="../explore-settings.html">
                    <i class = "fa fa-gear icon fa-1x me-2" style="color: white;"></i>
                </a>
            </div>
        
            <ul class="nav mb-2 nav-tabs mt-1">
            <!-- tabs --> 
                <li class="nav-item">
    <a class="nav-link active" href="../explore-topics/for-you.html">
            <b>For your</b>
    </a>
    </li>
                <li class="nav-item">
    <a class="nav-link" href="../explore-topics/trending.html">
    Trending
    </a>
    </li>
                <li class="nav-item">
    <a class="nav-link" href="../explore-topics/news.html">
    News
    </a>
    </li>
                <li class="nav-item">
    <a class="nav-link" href="../explore-topics/sports.html">
    Sports
    </a>
    </li>
                <li class="nav-item d-none .d-sm-block d-sm-none d-md-block">
    <a class="nav-link" href="../explore-topics/entertainment.html">
    Entertainment
    </a>
    </li>
            </ul>
            <!-- image with overlaid text -->
            <div class = "container p-0">
                <div class = "card text-white">
                    <img src = "../a4_images/JOO.png" class="img-responsive p-0">
                    <div class="card-img-overlay p-2">
                        <div style="position: absolute; bottom: 8px; left: 10px; font-size: 3vw;">
                            <b style= "color: hotpink;">JoJo : Stone Ocean</b>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- content -->
            <div class = "row mt-1">
                ${PostSummaryList()} 
            </div>
    
         </div>
         </div>
    `);
}
export default ExploreComponent;




// (function ($) {
//     $('#wd-explore').append(`
//         <div class="row mt-2">
//             <div class="col-12">
//                 ${ExploreComponent()}
//             </div>
//         </div>
//     `);
// })($);