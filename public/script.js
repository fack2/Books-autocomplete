function request(url, cb) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(data);
    })
    .catch(error => {
      console.log(error);
    });
}

const textInput = document.getElementById("textInput");
var sec = document.getElementById("section-res");

textInput.addEventListener("input", function() {
  const input = textInput.value;
  if (input !== "" && input[0] !== " " && event.keyCode !== 8) {
    request(`/search/${input}`, data => {
      var ul = document.createElement("ul");
      ul.setAttribute("id", "ulid");
      ul.textContent = "";
      data.forEach(e => {
        var li = document.createElement("li");
        li.setAttribute("class", "item");
        var valueofarray = document.createTextNode(e);
        li.appendChild(valueofarray);
        ul.appendChild(li);
      });
      sec.textContent = "";
      sec.appendChild(ul);
    });
  } else {
    sec.textContent = "";
  }
});
