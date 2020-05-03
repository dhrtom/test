declare var DotNet: any;

class coordinate {
    public latitude: number = 0;
    public longitude: number = 0;
    public accuracy: number = 0;
}


let namespace = "BlazorApp1.Client";
let type = "LocationService";
async function dispatchResponse(id: string, location: coordinate) {
    await DotNet.invokeMethodAsync(namespace, 'ReceiveResponse', id, location.latitude, location.longitude, location.accuracy);
}

async function dispatchWatchResponse(id: string, location: coordinate) {
    await DotNet.invokeMethodAsync(namespace, 'ReceiveWatchResponse', id, location.latitude, location.longitude, location.accuracy);
}

window['BlazorApp1'] = window['BlazorApp1'] || {};
window['BlazorApp1']['Client'] = window['BlazorApp1']['Client'] || {};

window['BlazorApp1']['Client']['GetLocation'] = (requestId) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            dispatchResponse(requestId, position.coords);
        });
    }
    else {
        return "No location finding";
    }
};

window['BlazorApp1']['Client']['WatchLocation'] = (requestId) => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            dispatchWatchResponse(requestId, position.coords);
        });
    }
    else {
        return "No location watching";
    }
};