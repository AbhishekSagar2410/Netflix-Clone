import axios from 'axios';


const Instance=axios.create({
    baseURL: "http://api.themoviedb.org/3"
})

export default Instance;