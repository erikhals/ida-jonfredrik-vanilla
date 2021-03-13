window.addEventListener("load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function (event) {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function (event) {
      console.log("There is an error, but the data is probably submitted.");
    });

    // Set up our request
    XHR.open(
      "POST",
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRh9cfECN8L02X67cSAGRz6HZN4oD-aKjGlXux_b-AOZ-j1g/formResponse",
      true
    );
    // XHR.setRequestHeader("Accept", "application/xml, text/xml, */*; q=0.01");
    // XHR.setRequestHeader(
    //   "Content-type",
    //   "application/x-www-form-urlencoded; charset=UTF-8"
    // );
    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  // Access the form element...
  const form = document.getElementById("svarForm");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
    //Show alert
    document.querySelector(".alert").style.display = "block";
    document.getElementById("svarForm").reset();

    //Hide alert after 4 seconds
    setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, 4000);
  });
});
