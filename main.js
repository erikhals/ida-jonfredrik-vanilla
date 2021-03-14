gsap.registerPlugin(ScrollTrigger);

gsap.from(".topheader", {
  duration: 1,
  opacity: 0,
  y: 30,
});
gsap.from(".cornergraphic1", {
  scrollTrigger: {
    trigger: ".cornergraphic1",
    start: "bottom 100%",
    end: "bottom 50%",
    scrub: 1,
  },
  duration: 3,
  opacity: 0,
  x: 100,
  y: 100,
});
gsap.from(".blomster1", {
  scrollTrigger: {
    trigger: ".blomster1",
    start: "bottom 100%",
    end: "bottom 50%",
    scrub: 1,
  },
  duration: 1,
  opacity: 0,
  x: 50,
});
gsap.from(".blomster2", {
  scrollTrigger: {
    trigger: ".blomster2",
    start: "bottom 100%",
    end: "bottom 50%",
    scrub: 1,
  },
  duration: 2,
  opacity: 0,
  y: 50,
});
gsap.from(".blomster3", {
  scrollTrigger: {
    trigger: ".blomster3",
    start: "bottom 100%",
    end: "bottom 50%",
    scrub: 1,
  },
  duration: 3,
  opacity: 0,
  x: -50,
});
var programtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#program",
    start: "top bottom",
    end: "center 200px",
    scrub: 3,
  },
});
programtl.from("#programtitle", {
  opacity: 0,
  y: 100,
  duration: 1,
});
programtl.from(
  ".dag",
  {
    opacity: 0,
    scale: 0.5,
    stagger: 0.1,
  },
  "-=0.7"
);
programtl.from(
  ".programpost",
  {
    opacity: 0,
    duration: 1,
    stagger: 0.05,
  },
  "-=0.5"
);

gsap.from(".smokin1", {
  scrollTrigger: {
    trigger: ".smokin1",
    start: "top bottom",
    end: "center 200px",
    scrub: 3,
  },
  opacity: 0,
  x: 100,
});
gsap.from(".smokin2", {
  scrollTrigger: {
    trigger: ".smokin2",
    start: "top bottom",
    end: "center 200px",
    scrub: 3,
  },
  opacity: 0,
  x: -100,
  y: -50,
});
gsap.from(".cornergraphic2", {
  scrollTrigger: {
    trigger: ".cornergraphic2",
    start: "top bottom",
    end: "center 200px",
    scrub: 3,
  },
  opacity: 0,
  x: 100,
  y: -50,
});
var infotl = gsap.timeline({
  scrollTrigger: {
    trigger: "#informasjon",
    start: "top bottom",
    end: "center 200px",
    scrub: 3,
  },
});
infotl.from("#infotitle", {
  opacity: 0,
  y: 100,
  duration: 1,
});
infotl.from(
  ".infobox",
  {
    opacity: 0,
    scale: 0.5,
    stagger: 0.1,
  },
  "-=0.7"
);
gsap.from(".smilende", {
  scrollTrigger: {
    trigger: ".smilende",
    start: "top bottom",
    end: "center 200px",
    scrub: 3,
  },
  opacity: 0,
  y: 100,
});
gsap.from(".cornergraphic3", {
  scrollTrigger: {
    trigger: ".cornergraphic3",
    start: "top bottom",
    end: "center 200px",
    scrub: 3,
  },
  opacity: 0,
  x: 100,
  y: -50,
});
gsap.from("footer", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 10,
  },
  opacity: 0,
});
// set the target on the form to point to a hidden iframe
// some browsers need the target set via JavaScript, no idea why...

document.getElementById("svarForm").target = "my-response-iframe";

// detect when the iframe reloads
var iframe = document.getElementById("my-response-iframe");
var wrapper = document.getElementById("iframewrapper");

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
