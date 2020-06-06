import CONSTANTS from "../../CONSTANTS/constants";

const dataService = (store) => (next) => (action) => {
    const fetchData = (url) => {
        fetch(url)
            .then(fetchSuccess)
            .then(processResponse)
            .catch(fetchError);
    };

    const fetchSuccess = (response) => response.json();

    const processResponse = (response) => {
        console.log(response)
    };

    const fetchError = (error) => {
        console.log(error);
    };
};

export default dataService;
