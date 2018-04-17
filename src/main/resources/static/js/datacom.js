var data = [];
var url = "/api/v1/";

$(document).ready(function () {
    url = url + "beaches";

    $.get(url, function (result) {
        data = result;
        console.log(data);
        refreshBeachList()
        url = "/api/v1/";
    })
});

function refreshBeachList() {
    var list = "";
    for(i=0; i<data.length; i++){
        list +="<dt><a href='/beaches/1'> "+data[i].name+"</a>&nbsp;&nbsp;&nbsp;Rating: " + data[i].rating + "</dt>" + "<dd>"
            +data[i].description+"</dd>" + "<hr/>";
    }
    $("#beachList").append(list);
}