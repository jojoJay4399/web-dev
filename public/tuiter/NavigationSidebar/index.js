const NavigationSidebar = (active) => {

    return (`
<div class="list-group">

<a class="list-group-item disabled" href="/"> 
<i class="fab fa-twitter" style="color: white"></i>
</a>

<!-- continue the rest of the list --> 
<a class="list-group-item " href="../HomeScreen/home.html" id="home">
<i class="fa fa-home"></i>
<div class="d-none d-xxl-inline d-xl-inline">Home</div>
</a> 

<a class="list-group-item " href="../ExploreScreen/explore.html" id="explore">
<i class="fa fa-hashtag"></i>
<div class="d-none d-xxl-inline d-xl-inline">Explore</div>
</a> 

<a class="list-group-item " href="#" id = "notifications"> 
<i class="fa fa-bell"></i>
<div class="d-none d-xxl-inline d-xl-inline">Notification</div>
</a> 

<a class="list-group-item " href="#" id = "message">
<i class="fa fa-envelope"></i>
<div class="d-none d-xxl-inline d-xl-inline">Message</div>
</a> 

<a class="list-group-item " href="#" id = "bookmarks">
<i class="fa fa-bookmark"></i>
<span class="d-none d-xxl-inline d-xl-inline">Bookmarks</span>
</a> 

<a class="list-group-item" href="#" id = "lists">
<i class="fa fa-list"></i>
<span class="d-none d-xxl-inline d-xl-inline">Lists</span>
</a> 

<a class="list-group-item" href="#" id = "more">
<i class="fa fa-ellipsis-h"></i>
<span class="d-none d-xxl-inline d-xl-inline">More</span>
</a> 

</div>
<div class="d-grid mt-2">
<a href="tweet.html"
class="btn btn-primary btn-block rounded-pill">
Tweet</a> </div>
<script type="text/javascript">

$(function () {
    var listItems = $(".list-group-item");

    // Remove 'active' tag for all list items
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }

    var url = window.location.href;
    console.log(url);
    var webpage = url.split("/");
    var web = webpage[webpage.length-1].split('.');
    var w = web[0];

    document.getElementById(w).classList.add("active");

    $('.list-group-item').click(function (e) {
       $('.list-group-item').removeClass("active");
        var t = $(e.target);
        t.addClass("active");
    })
    
    // $('#notifications').click(function (e) {
    //    $('.list-group-item').removeClass("active");
    //    $('#notifications').addClass("active");
    // });
    // $('#message').click(function () {
    //    $('.list-group-item').removeClass("active");
    //    $('#message').addClass("active");
    // });
    // $('#bookmarks').click(function () {
    //    $('.list-group-item').removeClass("active");
    //    $('#bookmarks').addClass("active");
    // });
    // $('#lists').click(function () {
    //    $('.list-group-item').removeClass("active");
    //    $('#lists').addClass("active");
    // });
    // $('#more').click(function () {
    //    $('.list-group-item').removeClass("active");
    //    $('#more').addClass("active");
    // });
                        
})
</script>
`);
}
export default NavigationSidebar;






