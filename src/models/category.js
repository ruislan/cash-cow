import ModelError from './model-error';

const categoryModel = {
    data: [
        { name: 'Sanitary Valves', slug: 'sanitary-valves' },
        { name: 'Valve Actuators', slug: 'valve-actuators' },
        { name: 'Tank Accessories', slug: 'tank-accessories' },
        { name: 'Hygienic Pumps & Mixer', slug: 'hygienic-pumps-mixer' },
        { name: 'Tri Clamp', slug: 'tri-clamp-fittings' },
        { name: 'Sanitary Pipe Union & Fittings', slug: 'sanitary-pipe-union-fittings' },
    ],
    async getCategory({ slug }) {
        for (const item of this.data) {
            if (item.slug === slug) {
                return item;
            }
        }
        return null;
    },
    async getCategories() {
        return this.data;
    }
};

export default categoryModel;
