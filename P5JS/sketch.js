//commenmt

// https://editor.p5js.org/cenzwong/sketches/pRbkeVgJ8


let capture;
let BotID = 'bot123456'
let urlPhoto = 'https://api.telegram.org/bot123456789/sendPhoto'

function setup() {
  // createCanvas(480, 480);
  c = createCanvas(720, 480);
  capture = createCapture(VIDEO);
  // capture.hide();
 

}

function mouseClicked() {
  // console.log(capture.get());
  let snapshot = image(capture.get(), 0, 0)
  // saveCanvas(c, 'jpg');
  // image(capture, 0, 0, width, width * capture.height / capture.width);
  // image(capture.get(), 0, 0, capture.width, capture.height);
  // // image(img, x, y, [width], [height])
  // tgSendMessage_GET(BotID, '@testtp', '===== I am the beautiful Seperation Line =====');
  // tgSendMessage_GET(BotID, '@testtp', 'tgSendMessage_GET');
  // tgSendMessage_POST_json(BotID, '@testtp', 'tgSendMessage_POST_json');
  // tgSendMessage_POST_xhr(BotID, '@testtp', 'tgSendMessage_POST_xhr');
  ////////tgSendMessage_POST_json2(BotID, '@testtp', 'Hello PoPo');
  
  //tgSendPhoto_POST_xhr(BotID, '@testtp', PhotoURI);
  // // tgSendPhoto(BotID,'@testtp',capture.get());
  // saveFrames('out', 'jpg', 1, 1);
  // saveFrames('out', 'jpg', 1, 1, ImageSnapshot => { 
  //   // console.log(ImageSnapshot[0]);
  //  ImageData = String(ImageSnapshot[0].imageData);
  //   // console.log(multipartFormData(ImageData));
  //   tgSendPhoto_POST_xhr(BotID,'@testtp',ImageData);
  // });
  test();
}

function draw() {

}

function tgSendMessage_GET(tgbotToken, tgchatID, message) {
  let url = 'https://api.telegram.org/' + tgbotToken + '/sendMessage?chat_id=' + tgchatID + '&text=' + message;
  httpGet(url, function(response) {
    // when the HTTP request completes, populate the variable that holds the
    // earthquake data used in the visualization.
    console.log(JSON.parse(response));
  });
}

function tgSendMessage_POST_json(tgbotToken, tgchatID, message) {
  let url = 'https://api.telegram.org/' + tgbotToken + '/sendMessage';
  httpPost(
    url,
    'json', {
      chat_id: tgchatID,
      text: message
    },
    function(result) {
      console.log(result);
    }
  );
}

function tgSendMessage_POST_xhr(tgbotToken, tgchatID, message) {
  var data = new FormData();
  data.append("text", message);
  data.append("chat_id", tgchatID);

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(JSON.parse(this.responseText));
    }
  });

  let URL = "https://api.telegram.org/"+tgbotToken+"/sendMessage";
  xhr.open("POST", URL);

  xhr.send(data);
}

function tgSendPhoto_POST_xhr(tgbotToken, tgchatID, PhotoURI) {
  var data = new FormData();

  data.append("chat_id", tgchatID);
  data.append("Photo", PhotoURI);
  
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  let URL = "https://api.telegram.org/"+tgbotToken+"/sendPhoto";
  xhr.open("POST", URL);

  xhr.send(data);
}

function tgSendMessage_POST_json2(tgbotToken, tgchatID, message) {
  // Fail to make POST request
  let url = 'https://api.telegram.org/' + tgbotToken + '/sendMessage';
  httpDo(
    url, {
      method: 'POST',
      // // Other Request options, like special headers for apis
      headers: {
        "Content-Type": "application/x-www-form-urlencoded,multipart/form-data; boundary=--------------------------200668755530089614109187",
        "Accept": "application/json",
        "Content-Length": "282"
       },
      content: {"chat_id": tgchatID, "text": message}
    },
    function(res) {
      console.log(res);
    }
  );
  
  
}


function tgSendPhoto(tgbotToken, tgchatID, imageFormData) {

  let url = 'https://api.telegram.org/' + tgbotToken + '/sendPhoto';
  console.log(imageFormData.content);
  httpDo(
    url, {
      method: 'POST',
      // Other Request options, like special headers for apis
      content: String(imageFormData.content), //FormData
      headers: imageFormData.headers
    },
    function(res) {
      console.log(res);
    }
  );
}





let img;


function test() {
  input = createFileInput(handleFile);
  input.position(0, 0);
}


function handleFile(file) {
  print(file);
  // tgSendPhoto(BotID, '@testtp', multipartFormData(String(file.data)));
  // if (file.type === 'image') {
  //   img = createImg(file.data, '');
  //   img.hide();
  // } else {
  //   img = null;
  // }
  let photoin = document.getElementById('photo');
  var data = new FormData();
  data.append("chat_id", "@testtp");
  data.append("photo", photoin);
 
  
  var xhr = new XMLHttpRequest();
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.telegram.org/bot/sendPhoto");
  xhr.setRequestHeader("Content-Type", " multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
  
  xhr.send(data);



}







//=========== Library =======================
function doHTTPGet() {
  //   httpGet(path, [datatype], [data], [callback], [errorCallback])
  // httpGet(path, data, [callback], [errorCallback])
  // httpGet(path, callback, [errorCallback])
  //pre-installed function
  let url = 'https://api.telegram.org/bot/sendMessage?chat_id=@testtp&text=HelloFromBotandFromP5';
  httpGet(url, function(response) {
    // when the HTTP request completes, populate the variable that holds the
    // earthquake data used in the visualization.
    console.log(response);
  });
}

function doHTTPPost() {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  httpPost(
    url,
    'json', {
      name: 1,
      title: 'HelloWorld'
    },
    function(result) {
      console.log(result);
    }
  );
}

function doHTTPDoPost() {
  saveFrames('out', 'png', 1, 25, data => {
    //print(data);
  });
  let url = 'https://api.telegram.org/' + tgbotToken + '/sendMessage?chat_id=' + tgchatID;
  console.log(data);
  httpDo(
    url, {
      method: 'POST',
      // Other Request options, like special headers for apis
      body: formdata,
      headers: {
        authorization: 'Bearer secretKey'
      }
    },
    function(res) {
      earthquakes = res;
    }
  );
}

function multipartFormData(inImage) {
  var boundary = '----' + (new Date()).getTime();
  var bodyString = [];
  bodyString.push(
    '--' + boundary,
    'Content-Disposition: form-data; name="' + "photo" + '";' + 'filename="' + "my_file.jpg" + '"',
    'Content-Type: ' + "image/octet-stream",
    'Content-Transfer-Encoding: base64', '', //need /r/n twice here
    inImage.substring(31) //remove the data:image/jpeg;base64, 23
  );

  bodyString.push(
    '--' + boundary,
    'Content-Disposition: form-data; name="' + 'chat_id"',
    '', //need /r/n twice here
    '@testtp' //remove the data:image/jpeg;base64,
  );

  bodyString.push('--' + boundary + '--', '');



  var content = bodyString.join('\r\n');
  return {
    content: content,
    headers: {
      'Content-Type': 'multipart/form-data; boundary=' + boundary,
      'Content-Length': content.length
    }
  }
}