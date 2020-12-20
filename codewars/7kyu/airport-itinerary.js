function itinerary(travel) {
    let routes = "";
    for (let i = 0; i < travel.length; i++) {
        if (i !== travel.length - 1 && travel[i].out === travel[i + 1].in) {
            routes += travel[i].in + '-';
        } else {
            routes += travel[i].in + '-' + travel[i].out + (i !== travel.length - 1 ? '-' : '');
        }
    }
    return routes;
}