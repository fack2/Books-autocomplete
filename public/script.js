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

      var detials = document.createElement("div");
      detials.setAttribute("class", "detials");
      detials.textContent = "";

      data.forEach(e => {
        var li = document.createElement("li");
        li.setAttribute("class", "item");
        var valueofarray = document.createTextNode(e.title);
        var show = document.createElement("Button");
        show.setAttribute("class", "showBtn");
        li.appendChild(valueofarray);
        li.appendChild(show);
        show.addEventListener("click", function(event) {
          detials.textContent = "";
          var AutherName = document.createElement("p");
          AutherName.setAttribute("class", "para");
          AutherName.innerText = e.author;
          detials.appendChild(AutherName);
          var Country = document.createElement("p");
          Country.setAttribute("class", "para");
          Country.innerText = e.country;
          detials.appendChild(Country);
          var Year = document.createElement("p");
          Year.setAttribute("class", "para");
          Year.innerText = e.year;
          detials.appendChild(Year);
          li.appendChild(detials);
        });
        ul.appendChild(li);
      });

      sec.textContent = "";
      sec.appendChild(ul);
    });
  } else {
    sec.textContent = "";
  }
});
