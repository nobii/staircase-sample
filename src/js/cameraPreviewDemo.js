var camera = new Staircase.Camera('#Video');
if (camera.isSupport) {
    camera.powerOn();
} else {
    alert('カメラ非対応のブラウザです。');
}
