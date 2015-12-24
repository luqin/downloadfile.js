/**
 * download file for browser
 *
 * @param {Object|string} options
 * @param {string} options.url
 * @param {Object} options.data
 * @param {string} options.type
 */
function download(options) {
  if (!options) {
    return;
  }

  var newOptions;
  if (typeof options === 'string') {
    newOptions = {
      url: options
    };
  }

  var url = newOptions.url;
  var data = newOptions.data;
  var type = newOptions.type;

  var form = document.createElement('form');
  form.action = url;
  form.method = type || 'post';
  form.target = '_blank';

  if (data) {
    var input;
    for (var k in data) {
      if (data.hasOwnProperty(k)) {
        input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      }
    }
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

module.exports = download;
