//var url = "http://localhost:8085";
var url = "https://obscure-oasis-17521.herokuapp.com";

function getURLParams() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
