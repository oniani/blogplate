var wrap = document.getElementsByClassName("typewriter_wrapper")[0],
  txtEl = wrap.getElementsByTagName("span")[0],
  txt = txtEl.innerHTML,
  speed;

function typewriter() {
  // Delete old Text
  txtEl.innerHTML = "";

  var count = 0,
    len = txt.length;

  var i = setInterval(function() {
    txtEl.innerHTML = txt.substr(0, count);
    count++;
    if (count === len + 1) {
      clearInterval(i);
    }
  }, 100);
}

typewriter();
