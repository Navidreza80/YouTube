flagLight = 0;

lightMode.onclick = function(){
    if(flagLight == 0){
        body.classList.add("lightModeBody"); 
        side.classList.add("lightModeSide");
        header.classList.add("lightModeHeader");
        grid.classList.add("lightModeGrid");
        detailVideo.classList.add("lightModeVideoDetail");
        channelDetail.classList.add("lightModeChannelDetail");
        yourChannelMenu.classList.add("lightModeYourMenu");
        
        flagLight = 1;
    }
    else if(flagLight == 1){
        body.classList.remove("lightModeBody"); 
        side.classList.remove("lightModeSide");
        header.classList.remove("lightModeHeader");
        grid.classList.remove("lightModeGrid");
        detailVideo.classList.remove("lightModeVideoDetail");
        channelDetail.classList.remove("lightModeChannelDetail");
        yourChannelMenu.classList.remove("lightModeYourMenu");

        flagLight = 0;
    }
}