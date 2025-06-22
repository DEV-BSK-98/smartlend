import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::applicant.applicant', ({ strapi }) => ({
    async search(ctx) {
        const { email, phone, name, pmec, first_name, last_name, other_name } = ctx.query;

        const orFilters = [];
        if (email) orFilters.push({ Email: { $containsi: email } });
        if (first_name) orFilters.push({ FirstName: { $constains: first_name}})
        if (last_name) orFilters.push({ LastName: { $constains: last_name}})
        if (other_name) orFilters.push({ OtherName: { $constains: other_name}})
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