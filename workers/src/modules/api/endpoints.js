export const JOBS = 'jobs';
export const EPLOYEES = 'employees';


const ENDPOINTS = {
    [JOBS]: {
        uri: '/jobs',
        method: 'GET'
    },
    [EMPLOYEES]: {
        uri: '/employees',
        method: 'GET'
    }
};


export default ENDPOINTS;