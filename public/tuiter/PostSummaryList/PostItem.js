
const PostItem = (tweet) => {
    return (`
<div class = "container-fluid p-0 ms-0" style="border-bottom: 1px #333333 solid;">
<div class = "row" >
<!--<div class = "col-12" >-->
<div class = "ms-1 col-1" >
    <img src="${tweet.avatarIcon}" style="border-radius: 40px; width: 45px; height: 45px" >
</div>
<div class = col-10 m-0" >
    <text style="display: inline; color: white;">
    <b>${tweet.userName}</b>
    <i class="fa fa-certificate position-absolute ms-1 mt-1"></i>
    <text style="color: rgb(110, 118, 125); position: absolute;"
          class = "position-absolute ms-4"> @${tweet.handle} &middot; ${tweet.time}</text>
    </text><br>
    <text style="display: inline; color: white;">
    <b>${tweet.title}</b>                 
    </text><br>
    
    <div class = "card float-start col-8" style="width: 100%;" >
    <img src="${tweet.cardImage}" class="card-img-top" alt="..." >
    ${tweet.cardContent ?
    `<div class = "card-body">
    <div class = "card-title" style="color: white">${tweet.cardTitle}</div>
    <p class = "card-text"> ${tweet.cardText} </p>
    </div>` :  ""}
    </div>
    <div style="height: 100px;"></div>
    <div class = "container position-relative mt-4 justify-content-between p-0" style="display: inline">
                <a href="#" class = "fa-regular fa-comment" style="font-size: 18px; text-decoration: None; color: lightgray; word-spacing: 12px; padding-right: 20px"> ${tweet.comment}</a>
                <a href="#" class = "fa-solid fa-retweet" style="font-size: 18px; text-decoration: None; color: lightgray; word-spacing: 12px; padding-right: 20px">  ${tweet.retweet}</a>
                <a href="#" class = "fa-solid fa-heart" style="font-size: 18px; text-decoration: None; color: red; word-spacing: 12px; padding-right: 20px"> ${tweet.heart}</a>
                <a href="#" class = "fa-solid fa-arrow-up-from-bracket" style="font-size: 18px; color: lightgray"></a>
    </div>
                
                
    </div>
       
   
<!--</div>-->

</div>

</div>
    `);
}
export default PostItem;