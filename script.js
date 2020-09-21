
function reloadData() {
  x = 1

  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  var time = '#'+h+m+s;

  $("p#hex").text(color);

  setTimeout(reloadData(), x*1000)
}

reloadData();