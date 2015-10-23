/**
 *
 * @param {Object} opts
 * @param {string} opts.url
 * @param {Object} opts.data
 * @param {string} opts.type
 */
function download(opts) {
  if (!opts) {
    return;
  }

  let newOpts;
  if (typeof opts === 'string') {
    newOpts = {
      url: opts
    };
  }

  const {url, data, type} = newOpts;

  let form = document.createElement('form');
  form.action = url;
  form.method = type || 'post';
  form.target = '_blank';

  if (data) {
    let input;
    for (const key of Object.keys(data)) {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    }
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

export default download;
