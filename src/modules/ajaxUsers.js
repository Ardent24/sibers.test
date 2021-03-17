const ajaxUsers = () => {
  function request(method, url) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.onload = () => resolve(JSON.parse(xhr.responseText));
      xhr.onerror = reject;
      xhr.send();
    });
  }

  return request('GET', 'https://demo.sibers.com/users')
}

export {ajaxUsers};