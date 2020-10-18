# JSgetURL
The code that can get the URL request ?name=bar

Simple Javascript code to get the data from the URL. ( HTTP GET METHOD )

--------------------------getURL.js------------------------------------------------

    function URL2JSON(){
        
        //this line is to kill the first "?" charactor
        var getURL_raw = window.location.search.slice(1,window.location.search.length);
        
        //replace "+" to " "
        getURL_raw = getURL_raw.replace(/\+/g," ");   //the \+ indicate + charactor, and g stand for global

        //decode URI
        getURL_raw = decodeURIComponent(getURL_raw);
        var getURL_Split_Ary = getURL_raw.split("&");
        
        var i = 0;
        var getURL_Split_Ary_Split = {};
        for(i in getURL_Split_Ary){
            //!!!you can turn it off here!!!
            //document.write(getURL_Split_Ary[i]+"<br>");
            var nameTemp = getURL_Split_Ary[i].split("=")[0];
            getURL_Split_Ary_Split[nameTemp] = getURL_Split_Ary[i].split("=")[1];
        }
        //document.write("Only for debug, you can turn it off inside getData.js<br>");
        return getURL_Split_Ary_Split;

    }

    var urlJSON = URL2JSON();


---------------------------------------------------------------------------------------------


-------------------------index.html---------------------------------------------------------

    <script src="getData.js"></script>
    <script>document.write(urlJSON['Name']);</script>
    <script>document.write(urlJSON['Name2']);</script>
    <script>document.write(urlJSON['Name3']);</script>

---------------------------------------------------------------------------------------------