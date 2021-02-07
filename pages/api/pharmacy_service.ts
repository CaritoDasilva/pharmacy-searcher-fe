import axios from 'axios';
import headers from '../../next.config';

export default class PharmacyService {

    async getCommunesAndPharmacys() {
        try {
            let data = await axios.get('http://18.221.149.135/api/communes/7')
            if (data) {
                console.log("🚀 ~ file: pharmacy_service.ts ~ line 10 ~ PharmacyService ~ getCommunesAndPharmacys ~ data", data)
                return data.data
            }
        }
        catch (error) {
            return error;
        }
    }
}