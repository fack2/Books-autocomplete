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
  request(`/search/${input}`, data => {
    console.log("data", data);
  });
});
