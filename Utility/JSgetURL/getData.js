/**
 * This function will read the Url parameter and turn into Json
 */

function URL2JSON(){
    var getURL_raw = window.location.search.slice(1,window.location.search.length);
    //document.write(getURL_raw+"<br>");
    //replace "+" to " "
    getURL_raw = getURL_raw.replace(/\+/g," ");
    //document.write(getURL_raw+"<br>");
    //decode URI
    getURL_raw = decodeURIComponent(getURL_raw);

    var getURL_Split_Ary = getURL_raw.split("&");

    var i = 0;
    var getURL_Split_Ary_Split = {};
    for(i in getURL_Split_Ary){
        //!!!you can turn it off here!!!
        document.write(getURL_Split_Ary[i]+"<br>");
        var nameTemp = getURL_Split_Ary[i].split("=")[0];
        getURL_Split_Ary_Split[nameTemp] = getURL_Split_Ary[i].split("=")[1];
    }
    document.write("Only for debug, you can turn it off inside getData.js<br>");
    return getURL_Split_Ary_Split;
}

var urlJSON = URL2JSON();