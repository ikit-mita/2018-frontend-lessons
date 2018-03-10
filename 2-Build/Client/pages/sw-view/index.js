import './sw-view.css';
import { Loader } from '../../loader';
import { PersonService } from '../../services/person-service';
import { PersonView } from '../../views/person/person-view';

const loader = new Loader(
    document.getElementsByClassName('loader')[0],
    document.getElementsByClassName('head')[0],
    document.getElementsByClassName('person-info')[0]
);

const personService = new PersonService(loader);

const personView = new PersonView(
    document.getElementsByClassName('person-info')[0],
    document.getElementsByClassName('head')[0]
);

async function loadNextPerson(increment = 1) {
    try {
        const person = await personService.loadByIdAsync(personView.currentPersonId + increment);
        personView.setPerson(person);
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

document.getElementById('next').addEventListener('click', async ($event) => await loadNextPerson());
document.getElementById('prev').addEventListener('click', async ($event) => await loadNextPerson(-1));
