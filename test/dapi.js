window.onload = function(){
(dapi.isReady()) ? onReadyCallback() : dapi.addEventListener("ready", onReadyCallback);
//您可以在此处放置与 dapi 逻辑无关的其他代码
};

function onReadyCallback(){
//无需再监听此事件
dapi.removeEventListener("ready", onReadyCallback); let isAudioEnabled = !!dapi.getAudioVolume();

if(dapi.isViewable()){
adVisibleCallback({isViewable: true});
}

dapi.addEventListener("viewableChange", adVisibleCallback); dapi.addEventListener("adResized", adResizeCallback); dapi.addEventListener("audioVolumeChange",audioVolumeChangeCallback);
}

function adVisibleCallback(event){ console.log("isViewable " + event.isViewable); if (event.isViewable){
screenSize = dapi.getScreenSize();
//启动或恢复广告
} else {
//暂停广告并静音
}
}

function adResizeCallback(event){
    screenSize = event;
    console.log("ad was resized width " + event.width + " height " + event.height);
}

//当用户点击下载按钮时 - 使用 openStoreUrl 函数
function userClickedDownloadButton(event){ dapi.openStoreUrl();
}

function audioVolumeChangeCallback(volume){ let isAudioEnabled = !!volume;
if (isAudioEnabled){
//打开声音
} else {
//关闭声音
}
}

