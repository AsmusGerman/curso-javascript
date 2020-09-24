function toggle(index) {
  var li = document.getElementsByTagName("li")[index];
  var result = li.getElementsByClassName("result")[0];
  result.hidden = !result.hidden;
}
