import ModelError from './model-error';

const productModel = {
    data: [
        {
            id: 1, name: 'Hygienic Stainless Steel Sanitary Pneumatic Actuator Positioner Butterfly Valve',
            slug: 'hygienic-stainless-steel-sanitary-pneumatic-actuator-positioner-butterfly-valve',
            category: 'Sanitary Valves', subcategory: 'Sanitary Butterfly Valve', isTypical: true,
            images: [
                '/products/hygienic-stainless-steel-sanitary-pneumatic-actuator-positioner-butterfly-valve/image.webp',
            ],
            summary: `
                    We manufacture Pneumatic&nbsp;Sanitary Butt-Weld Butterfly Valve.
            `,
            description: `
                <div>
                    <h2><strong>Hygienic Stainless Steel Sanitary Pneumatic Actuator Positioner Butterfly Valve</strong></h2>
                    <ul>
                        <li>We manufacture Pneumatic&nbsp;Sanitary Butt-Weld Butterfly Valve, Sanitary Tri-Clamp Pneumatic Butterfly Valve, Hygienic Male Thread Pneumatic Butterfly Valve,&nbsp;Intelligent Type Pneumatic Butterfly Valve.&nbsp;For the Pneumatic Actuator, we can supply Stainless Steel Actuator and Aluminum Actuator. And we can install&nbsp;the Position Sensor and&nbsp;Solenoid Valve.</li>
                        <li>The Butterfly valve body and disk are all made from full CNC machined, high grade level polish.</li>
                        <li>All of the products have been 100% press tested before shipping.</li>
                        <li>It is necessary you specify at the time when orders be placing if heat numbers and MTR's are required.</li>
                        <li>EPDM, Silicon and Viton seats are available for installing in our butterfly valves which are suitable for many applications in such as food, dairy, beverage, meat processing, chemical, and many other industries.</li>
                    </ul>
                    <h3><strong>Product Description</strong></h3>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Valve&nbsp;Body&nbsp;Material:</td>
                                    <td>1.4404/1.4301,&nbsp;SS304/SS316L</td>
                                </tr>
                                <tr>
                                    <td>Seal&nbsp;Material:</td>
                                    <td>EPDM&nbsp;(standard)&nbsp;FPM/SILICON/NBR,&nbsp;FDA177.2600</td>
                                </tr>
                                <tr>
                                    <td>Max&nbsp;working&nbsp;pressure:</td>
                                    <td>20Bar</td>
                                </tr>
                                <tr>
                                    <td>Max.&nbsp;Working&nbsp;Temperature:</td>
                                    <td>120&nbsp;degree&nbsp;C</td>
                                </tr>
                                <tr>
                                    <td>Availably&nbsp;size:</td>
                                    <td>1"-6",&nbsp;DN25-DN150</td>
                                </tr>
                                <tr>
                                    <td>Availably&nbsp;connection:</td>
                                    <td>Clamped</td>
                                </tr>
                                <tr>
                                    <td>Availably&nbsp;standard:</td>
                                    <td>3A/DIN/SMS/RJT/ISO/IDF</td>
                                </tr>
                                <tr>
                                    <td>Operated:</td>
                                    <td>Pneumatic</td>
                                </tr>
		                        <tr>
			                        <td>Control:</td>
			                        <td>Sensor,&nbsp;C-TOP,&nbsp;C-top&nbsp;controller(AS-I)</td>
		                        </tr>
		                        <tr>
			                        <td>Certificate:</td>
			                        <td>ISO,&nbsp;PED/97/23/EC,&nbsp;FDA.177.2600</td>
		                        </tr>
		                        <tr>
			                        <td>Application&nbsp;scope:</td>
			                        <td>Dairy,food,&nbsp;beverage,&nbsp;pharmacy,&nbsp;cosmetic,&nbsp;Chemical,&nbsp;etc</td>
		                        </tr>
	                        </tbody>
                        </table>
                    </div>
                    <h3><strong>Product Parameter</strong></h3>
                    <p>
                        <strong>
                            <img alt="Hygienic Stainless Steel Sanitary Pneumatic Actuator Positioner Butterfly Valve" src="https://y120.hongcdn.com/uploads/2404/1-1582-!p.webp">
                            <img alt="Hygienic Stainless Steel Sanitary Pneumatic Actuator Positioner Butterfly Valve" src="https://y120.hongcdn.com/uploads/2404/gd-!j.webp">
                        </strong>
                    </p>
                </div>
            `,
        },

    ],
    async getProduct({ slug }) {
        return this.data.find(item => item.slug === slug);
    },
    async getProducts({ category, subcategory }) {
        if (!category && !subcategory) return this.data;
        return this.data.filter(item => item.category === category || item.subcategory === subcategory);
    },
    async getTypicalProducts() {
        return this.data.filter(item => item.isTypical);
    },
    async searchProducts({ name }) {
        return this.data.find(item => item.name.includes(name));
    }
};

export default productModel;
