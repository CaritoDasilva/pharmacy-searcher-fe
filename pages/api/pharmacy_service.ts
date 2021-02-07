import axios from 'axios';

export default class PharmacyService {

    async getCommunesAndPharmacys() {
        try {
            let data = await axios.get('https://pharmacy-searcher-be.herokuapp.com/api/communes/7')
            if (data) {
                return data.data
            }
        }
        catch (error) {
            return error;
        }
    }
}