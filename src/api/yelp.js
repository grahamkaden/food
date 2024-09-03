import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nnuCKtIctBd0QnJSLbZECPgTTWfJwwACGoSJg_SuNF-o2BS9ihx7VmlOddmV2t9pdQP4kWDafzqMCESM3YG7inToKM0nCKGqtSjA8q98zfn6IWyf-tjPGtPEY59zX3Yx'
    }
})