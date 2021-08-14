var client = AgoraRTC.createClient({
    mode: "rtc", 
    codec: "vp8"
}) 

var options = {
    appid: "5d531cbfe4024240b0baf5bd6526dc48", 
    uid: null, 
    channel: null
}

var localTracks = {
    videoTrack: null, 
    audioTrack: null
}

async function join() {
    options.uid = await client.join(options.appid, options.channel, null, null);
    localTracks.audioTrack = await AgoraRTC.createMicrophoneAudioTrack(); 
    localTracks.videoTrack = await AgoraRTC.createCameraVideoTrack();
    localTracks.videoTrack.play('local-player')
}

async function leave() {
    for(trackName in localTracks) {
        var track = localTracks[trackName]; 
        if(track) {
            track.stop(); 
            track.close(); 
            localTracks.trackName = undefined;
        }
    }
    
    $("#join").attr("disabled", false); 
    $("#leave").attr("disabled", true);
    await client.leave(); 
}

$("#join-form").submit(async function(e) {
    e.preventDefault();
    options.channel = $("#channel").val(); 
    try {
        join(); 
    }
    catch (e) {
        console.error(e)
    } 
    finally {
        $("#join").attr("disabled", true); 
        $("#leave").attr("disabled", false);    
    }
})

$('#leave').click(function(e){
    leave();
})
