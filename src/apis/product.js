import GLOBAL from '../app.json'
import axios from 'axios'

const Todos = {
    getProductCategoryStructure: () => {
        return new Promise(resolve => {
            let url = GLOBAL.SERVER + '/api/product-category/structure'
            axios
                .get(url)
                .then(response => resolve(response.data))
                .catch((error) => resolve({}))
        })
    },
    getProductCategoryInfo: (categoryId) => {
        return new Promise(resolve => {
            let url = GLOBAL.SERVER + '/api/product-category/'+categoryId
            axios
                .get(url)
                .then(response => resolve(response.data))
                .catch((error) => resolve({}))
        })
    } 
}

export default Todos