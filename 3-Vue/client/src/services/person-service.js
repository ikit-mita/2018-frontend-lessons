export class PersonService {
  /**
   * @param {number} id
   * @returns {Promise<Object>}
   */
  loadByIdAsync(id) {
    // about promises https://learn.javascript.ru/promise
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://swapi.co/api/people/${id}/`, true);
    const promise = new Promise((resolve, reject) => {
      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject(new Error(`${xhr.status} ${xhr.statusText}`));
        } else {
          const person = JSON.parse(xhr.responseText);
          person.id = id;
          resolve(person);
        }
      };
    })
    xhr.send();
    return promise;
  }
}
