const showMessage = s => console.log(s);
const ws = new WebSocket(`ws://${location.host}`);
ws.onerror = function() {
  showMessage("WebSocket error");
};
ws.onopen = function() {
  showMessage("WebSocket connection established");
  ws.send("hello server");
};
ws.onclose = function() {
  showMessage("WebSocket connection closed");
};

ws.onmessage = function(event) {
  showMessage(event);
};
