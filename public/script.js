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

textInput.addEventListener("input", function() {
  console.log("dataa");

  const input = textInput.value;
  if (input !== "") {
    if (input[0] !== " " && event.keyCode !== 8) {
      request(`/search/${input}`, data => {
        // console.log("data", data);
        var ul = document.createElement("ul");
        ul.setAttribute("id", "ulid");
        for (var i = 0; i < data.length; i++) {
          var li = document.createElement("li");
          li.setAttribute("class", "item");
          var valueofarray = document.createTextNode(data[i]);
          li.appendChild(valueofarray);
          ul.appendChild(li);
        }
        var sec = document.getElementById("section-res");
        sec.innerHTML = "";
        sec.appendChild(ul);

        if (text == "") {
          ul.innerHTML = "";
        }
      });
    }
  }
});
