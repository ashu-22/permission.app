index.js

@@ -222,6 +222,24 @@ 
+window.addEventListener("load", function() {
       interceptCopy = false;
       };
       }()),
+      "popup": function() {
+      var w = window.open(
+      location.href,
+      "Popup",
+      "resizable,scrollbars,status"
+      )
+      displayOutcome("popup", w ? "success" : "error")(w);
+      },
+      "popup-delayed": function() {
+      setTimeout(function() {
+      var w = window.open(
+      location.href,
+      "Popup",
+      "resizable,scrollbars,status"
+       )
+       displayOutcome("popup-delayed", w ? "success" : "error")(w);
+       },2000);
+       },
        "fullscreen": function() {
       // Note: As of 2017-09-10, fullscreen only allows "ask" and "allow" in Chrome.
       document.body.requestFullScreen(
