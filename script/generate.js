/*  dynamic generation  */

function generateVideoItems(holderID,jsonDataItem){

    //alert(products[i].fname);

      vid = document.createElement("div");
      vid.className = "video";

      holT = document.createElement("div");
      holT.className = "holderTum";

      tum = document.createElement("img");
      tum.className = "thumbnail";
      tum.src = "img/video/" + jsonDataItem.thumbnail[0];

      tum.addEventListener("click",() => {showDetailVideo(jsonDataItem.id);});
          
      let chaNam = document.createElement('span');
      chaNam.className = "channelName";	
		  var videoChannelName = channels.find(el=> el.id == jsonDataItem.channel);
      chaNam.innerHTML = videoChannelName.fname;
      
      

      chaNam.addEventListener("click",() => {showDetailChannel(jsonDataItem.id);});
      

          
      let viddisc = document.createElement("span");
      viddisc.className = "videoDiscription";
      viddisc.innerHTML = jsonDataItem.videoDiscription;	
    
      let viddate = document.createElement("span");
      viddate.className = "videoDate";
      viddate.innerHTML = jsonDataItem.videoDate + " ago";	
    
      let vidview = document.createElement("span");
      vidview.className = "videoView";
      vidview.innerHTML = jsonDataItem.videoView + " views";
    
      let viddur = document.createElement("span");
      viddur.className = "videoDuration";
      viddur.innerHTML = jsonDataItem.videoDuration;
    
      let chanpro = document.createElement("img");
      chanpro.className = "channelProfile";  
      var videoChannelprofile = channels.find(el=> el.id == jsonDataItem.channel);
      chanpro.src = "img/channel/" + videoChannelprofile.channelProfile[0];
      

      
      
    
    
      vid.appendChild(holT);
      holT.appendChild(tum);
      holT.appendChild(viddur);
      vid.appendChild(chanpro);
      vid.appendChild(viddisc);   
      vid.appendChild(chaNam);       
      vid.appendChild(vidview);
      vid.appendChild(viddate);

	  
    
    
      document.getElementById(holderID).appendChild(vid);	
}
function fillWithVideos(holderID,jsonData){
document.getElementById(holderID).innerHTML = "";

for(let i=0; i<jsonData.length;i++){
  generateVideoItems(holderID,jsonData[i]);
  vid.setAttribute('id', "videoId" + [i].toString());
  tum.setAttribute('id', "tumId" + [i].toString());
  holT.setAttribute('id', "holId" + [i].toString());
}
}
