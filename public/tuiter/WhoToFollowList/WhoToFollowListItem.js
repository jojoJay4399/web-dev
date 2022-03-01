
const WhoToFollowListItem = (who) => {
    return (`
        <div class = "list-group-item">
            <div class = "row">
                <div class = "col-8">
                    <div class = "float-start">
                        <img style="border-radius: 40px; width: 45px; height: 45px" src = "${who.avatarIcon}">
                    </div>
                    <div class = "float-start ms-5 position-absolute">
                        <text style="font-size: 15px;display: inline; position: absolute; color: lightgray;">
                            <b>${who.userName}</b>
                            <i class="fa fa-circle-check mt-1 ms-1 position-absolute"></i>
                        </text><br>
                        <text style="font-size: 15px; color: gray;">@${who.handle}</text>
                    </div>
                    <div class = "float-done"></div>
                </div>
                <div class = "col-4">
                    <button class = "btn btn-primary mt-1 float-end" style="border-radius: 30px; outline: none;"><b>Follow</b></button>
                </div>
            </div>
        </div> 
    `);
}
export default WhoToFollowListItem;