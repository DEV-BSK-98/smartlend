import type { Route } from '@strapi/types';

const customRoutes: Route[] = [
  {
    method: 'GET',
    path: '/applicants/search',
    handler: 'api::applicant.applicant.search',
    config: {
      auth: false,
    },
  },
];

export default customRoutes;
