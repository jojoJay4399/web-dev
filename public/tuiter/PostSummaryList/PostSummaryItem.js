

const PostSummaryItem = (post) => {
    return (`
    <div class = "list-group-item">
        <div class = "row">
            <div class = "col-8 col-md-9 mt-2 float-start">
                <div style="color: gray;">${post.topic}</div>
                <text style="display: inline; color: white;">
                <b>${post.userName}</b>
                <i class="fa fa-circle-check position-absolute ms-1 mt-1"></i>
                <text style="color: rgb(110, 118, 125); position: absolute;"
                     class = "position-relative ms-4">-${post.time}</text>
                </text><br>
                <text style="display: inline; color: white;">
                    <b>${post.title}</b>                 
               </text>
            </div>
            <div class = "col-4 col-md-3 mt-2 float-end">
                <img src="${post.image}" style="width: 100%; height: auto; " class = "rounded mb-4">
            </div>  
            <div class = "float-done"></div>  
        </div>
    </div>
    `);
}
export default PostSummaryItem;
