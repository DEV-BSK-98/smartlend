/**
 * applicant controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::applicant.applicant');

import { factories } from '@strapi/strapi';
import { sanitize } from '@strapi/utils';

export default factories.createCoreController('api::applicant.applicant', ({ strapi }) => ({
    async search(ctx) {
        const { email, phone, name } = ctx.query;

        const filters: Record<string, any> = {};

        if (email) filters.email = { $containsi: email };
        if (phone) filters.phone = { $containsi: phone };
        if (name) filters.name = { $containsi: name };

        const results = await strapi.entityService.findMany('api::applicant.applicant', {
        filters,
        });

        const sanitizedResults = await sanitize.contentAPI.output(results, strapi.getModel('api::applicant.applicant'));

        return sanitizedResults;
    },
}));
