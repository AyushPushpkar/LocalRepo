// events -> any trigger
//event listener

function Emitter() {
  this.events = {};
}

// Adding a method to the prototype
Emitter.prototype.on = function (eventName, listener) {
  if (!this.events[eventName]) {
    this.events[eventName] = []; // Initialize array if it doesn't exist
  }
  this.events[eventName].push(listener); // Add listener to the event
};

Emitter.prototype.emit = function (eventName, ...args) {
  if (this.events[eventName]) {
    this.events[eventName].forEach((listener) => listener(...args)); // Call all listeners
  }
};

module.exports = Emitter;
