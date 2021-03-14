// set the target on the form to point to a hidden iframe
// some browsers need the target set via JavaScript, no idea why...

document.getElementById("svarForm").target = "my-response-iframe";

// detect when the iframe reloads
var iframe = document.getElementById("my-response-iframe");
var wrapper = document.getElementById("iframewrapper");
iframe.addEventListener("load", console.log("loading"));

if (iframe) {
  iframe.onload = function () {
    //Show alert
    document.querySelector(".alert").style.display = "block";
    document.getElementById("svarForm").reset();

    //Hide alert after 4 seconds
    setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, 4000);

    // iframe.parentNode.removeChild(iframe);
    // wrapper.innerHTML =
    //   "<iframe id='my-response-iframe' name='my-response-iframe'></iframe>";
    // console.log(iframe);
  };
}
