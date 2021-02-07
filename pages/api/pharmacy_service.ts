import axios from 'axios';
import headers from '../../next.config';

export default class PharmacyService {

    async getCommunesAndPharmacys() {
        try {
            let data = await axios.get('http://18.221.149.135/api/communes/7', { headers: headers })
            if (data) {
                return data.data
            }
        }
        catch (error) {
            return error;
        }
    }
}