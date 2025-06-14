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

        const orFilters = [];

        if (email) {
        orFilters.push({ email: { $containsi: email } });
        }
        if (phone) {
        orFilters.push({ phone: { $containsi: phone } });
        }
        if (name) {
        orFilters.push({ name: { $containsi: name } });
        }

        if (orFilters.length === 0) {
        // If no search params provided, return empty result
        return [];
        }

        const results = await strapi.entityService.findMany('api::applicant.applicant', {
        filters: {
            $or: orFilters,
        },
        });

        const sanitizedResults = await sanitize.contentAPI.output(results, strapi.getModel('api::applicant.applicant'));

        return sanitizedResults;
    },
}));
