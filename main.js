import "./jquery-global.js";

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
// import "venobox/venobox/venobox"; <- example of jQuery plugin
// import "venobox/venobox/venobox.css";

$(document).ready(function() {
  $("#msgid").text("This is Hello World by JQuery");
  // $(".venobox").venobox(); <- example of jQuery plugin usage
});