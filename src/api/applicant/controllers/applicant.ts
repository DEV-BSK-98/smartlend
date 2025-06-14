import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::applicant.applicant', ({ strapi }) => ({
    async search(ctx) {
        const { email, phone, name, pmec } = ctx.query;

        const orFilters = [];
        if (email) orFilters.push({ Email: { $containsi: email } });
        if (phone) orFilters.push({ Phone: { $containsi: phone } });
        if (name) orFilters.push({ FullName: { $containsi: name } });
        if (pmec) orFilters.push({ Pmec: { $containsi: pmec } });

        if (orFilters.length === 0) return {};

        const results = await strapi.documents('api::applicant.applicant').findMany({
        filters: { $or: orFilters },
        populate: '*',
        });

        return results[0];
    },
}));