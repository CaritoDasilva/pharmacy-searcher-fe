import axios from 'axios';


export default class PharmacyService {

    async getCommunesAndPharmacys() {
        try {
            let data = await axios.get('http://18.221.149.135/api/communes/7')
            if (data) {
                return data.data
            }
        }
        catch (error) {
            return error;
        }
    }
}