function setPerson(person) {
    console.log(person);
    ['name', 'hair_color', 'skin_color', 'eye_color', 'gender']
        .forEach(field => {
            const span = document.getElementById(field);
            span.textContent = `${field}: ${person[field]}`
        });
    setCurrentPersonId(person.id);
    const { hair_color, eye_color } = person;
    updateHead(hair_color, eye_color);
}

function updateHead(hair, eye) {
    const head = document.getElementsByClassName('head')[0];
    Array.from(head.classList)
        .forEach(c => {
            if (c.startsWith('hair') || c.startsWith('eye')) {
                head.classList.remove(c);
            }
        });
    head.classList.add(`hair-${hair}`);
    head.classList.add(`eye-${eye}`);
}

function loadPersonSync(id) {
    startLoading();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://swapi.co/api/people/${id}/`, false);
    xhr.send();
    stopLoading();
    const person = JSON.parse(xhr.responseText);
    person.id = id;
    return person;
}

function loadPersonCallback(id, callback) {
    startLoading();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://swapi.co/api/people/${id}/`, true);

    xhr.onload = () => {
        stopLoading();
        if (xhr.status !== 200) {
            callback(new Error(`${xhr.status} ${xhr.statusText}`));
        } else {
            const person = JSON.parse(xhr.responseText);
            person.id = id;
            callback(null, person);
        }
    };

    xhr.send();
}

function loadPersonPromise(id) {
    startLoading();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://swapi.co/api/people/${id}/`, true);
    const promise = new Promise((resolve, reject) => {
        xhr.onload = () => {
            stopLoading();
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

function getCurrentPersonId() {
    const info = document.getElementsByClassName('person-info')[0];
    return +(info.dataset.personId || 0);
}

function setCurrentPersonId(personId) {
    const info = document.getElementsByClassName('person-info')[0];
    info.dataset.personId = personId;
}

function startLoading() {
    _setLoading(true);
}

function stopLoading() {
    _setLoading(false);
}

function _setLoading(isLoading) {
    document.getElementsByClassName('loader')[0].hidden = !isLoading;
    document.getElementsByClassName('head')[0].hidden = isLoading;
    document.getElementsByClassName('person-info')[0].hidden = isLoading;
}

document.getElementById('next').addEventListener('click', ($event) => {
    loadPersonCallback(getCurrentPersonId() + 1, (err, person) => {
        if (err) {
            alert(err.message);
            return;
        }
        setPerson(person);
    });
});

document.getElementById('prev').addEventListener('click', ($event) => {
    loadPersonPromise(getCurrentPersonId() - 1)
        .then(setPerson)
        .catch(err => alert(err.message));
});

