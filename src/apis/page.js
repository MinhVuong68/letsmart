import GLOBAL from '../app.json'
import axios from 'axios'

const Todos = {
    getPage: (page) => {
        return new Promise(resolve => {
            let url = GLOBAL.SERVER + '/api/pages/' + page
            axios
                .get(url)
                .then(response => resolve(response))
                .catch((error) => resolve({}))
        })
    }
}

export default Todos