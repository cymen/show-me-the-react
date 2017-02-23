var MAGIC_ID = '__react_highlighter_plugin_stylesheet__';
var style = document.getElementById('__react_highlighter_plugin_stylesheet__');

if (style) {
  document.head.removeChild(document.getElementById(MAGIC_ID));
} else {
  style = document.createElement('style');
  style.setAttribute('id', MAGIC_ID);
  document.head.appendChild(style);
  style.sheet.insertRule(
    '@keyframes shadowlicious { \
        0% { box-shadow: -1px -1px 0 0 rgba(255, 255, 255, 0.80), 1px 1px 2px 1px rgba(97, 218, 251, 0.70) !important; } \
      100% { box-shadow: -1px -1px 0 0 rgba(255, 255, 255, 0.90), 1px 1px 2.5px 1.5px rgba(97, 218, 251, 0.70) !important; } \
    }',
    0
  );
  style.sheet.insertRule(
    '[data-reactid],[data-reactroot] { \
        color: #000 !important; \
        background-color: rgba(178, 233, 247, 0.4) !important; \
        animation: shadowlicious ease-in-out 2.5s infinite; \
    }',
    1
  );
}
