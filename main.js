var handleResponse = function(response, status){
  console.log(status);
  console.log(response.length);
}


var printData = function(URL, callback){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState ===4 && this.status ===200){
      callback(this.responseText, this.status)
    } else {
      console.log('Request error status code: ' + this.status + ' ' + this.statusText);
    }
  }
  request.open('GET', URL);
  request.send();
}

printData('http://www.reddit.com/r/aww.json', handleResponse);
// printData('http://httpstat.us/400', handleResponse);
