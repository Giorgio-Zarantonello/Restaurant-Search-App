import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer 2OXJH8iqbOsj1y2_76Ce7j9unOarNqKBLqIENiiOm7KiojdW8x4ZXggSJEowmx0ZGfiVm0iEbD_kd2M8Y0EHGaKhXy7EA298pLSHc39hHgqgyueI1n9TVKuWpao5ZHYx'
    }
});
