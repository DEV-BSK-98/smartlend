/**
 * applicant router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::applicant.applicant');
export default {
    routes: [
        {
        method: 'GET',
        path: '/applicants/search',
        handler: 'applicant.search',
        config: {
            auth: false, // or true, depending on your needs
        },
        },
        // ...other routes
    ],
};