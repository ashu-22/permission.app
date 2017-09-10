@@ -1,11 ,, +2,11 @@ 
+ window.addEventListener("load", function() {
  },
+"bluetooth": function() {
+ navigator.bluetooth.requestDevice({
+ // filters: [...] <- Prefer filters to save energy & show relevant devices.
+ // acceptAllDevices here ensures dialog can populate, we don't care with what.
+ acceptAllDevices:true
+ }).then(
+ displayOutcome("bluetooth", "success"),
+ displayOutcome("bluetooth", "error")
