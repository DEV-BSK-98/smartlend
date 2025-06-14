export default {
    routes: [
        {
        method: 'GET',
        path: '/applicants/search',
        handler: 'applicant.search',
        config: {
            auth: false, // Set to true if you want authentication
        },
        },
    ],
};