(function() {
  window.MsgHandler = function() {
    return {
      render: function(cssSelector) {
        document.querySelector(cssSelector).textContent = this.message;
        return true;
      },
      setMessage: function(msg) {
        this.message = msg;
        return true;
      },
      getMessage: function() {
        return this.message;
      }
    };
  };

}).call(this);
