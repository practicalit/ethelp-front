
var url = "https://obscure-oasis-17521.herokuapp.com";
//var url = "https://peaceful-tor-26661.herokuapp.com";

function getURLParams() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}