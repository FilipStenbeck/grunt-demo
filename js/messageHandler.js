(function() {
  window.app = window.app || {};

  window.app.MsgHandler = (function() {
    function MsgHandler() {}

    MsgHandler.prototype.render = function(cssSelector) {
      document.querySelector(cssSelector).textContent = this.message;
      return this;
    };

    MsgHandler.prototype.setMessage = function(msg) {
      this.message = msg;
      return true;
    };

    MsgHandler.prototype.getMessage = function() {
      return this.message;
    };

    return MsgHandler;

  })();

}).call(this);
