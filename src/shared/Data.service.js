export function fetchCsvData() {
  return fetch('./../data.csv').then(function (response) {
    let reader = response.body.getReader();
    let decoder = new TextDecoder('utf-8');

    return reader.read().then(function (result) {
      return decoder.decode(result.value);
    });
  });
}
