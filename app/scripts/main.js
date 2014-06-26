(function() {
  'use strict';

  function loadCookies($container, $info) {
    var allCookies = $.cookie(),
        content = '';

    Object.keys(allCookies).forEach(function(key) {
      content += '<li>' + key + ': ' + allCookies[key]; + '</li>';
    });
    $container.html('<ul>' + content + '</ul>');
    $info.html('Cookies loaded at ' + new Date().toLocaleTimeString());
  }

  $(function() {
    $.cookie('just-a-test', 'a value');

    loadCookies($('#cookies-container'), $('#cookies-load-info'));
    $('#load-cookies').click(function() {
      loadCookies($('#cookies-container'), $('#cookies-load-info'));
    });
  });
}());
