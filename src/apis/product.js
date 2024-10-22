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
            let url = GLOBAL.SERVER + '/api/product-category/' + categoryId
            axios
                .get(url)
                .then(response => resolve(response.data))
                .catch((error) => resolve({}))
        })
    },
    addToCart: (formData) => {
        return new Promise(resolve => {
            let url = GLOBAL.SERVER + '/checkout/cart/add'
            axios
                .post(url, formData)
                .then(response => {
                    resolve(response);
                })
                .catch(function (error) {
                    resolve({});
                });
        });
    }
}

export default Todos