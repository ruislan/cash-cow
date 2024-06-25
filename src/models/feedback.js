import ModelError from './model-error';

const feedbackModel = {
    data: [
        {
            id: 1,
            name: 'John',
            industry: 'Oil and Gas',
            content: 'We\'ve been sourcing flanges and valves from this supplier for over a year now, and the quality has consistently met our high standards. The industrial-grade products have proven to be durable and reliable, even under extreme conditions. Their customer service is top-notch, always responsive and willing to go the extra mile. Highly recommended for any oil and gas company looking for reliable equipment.',
        },
        {
            id: 2,
            name: 'Sarah',
            industry: 'Chemical',
            content: 'The sanitary grade valves and pipes we purchased have significantly improved our process efficiency. They are easy to clean and maintain, which is crucial for our operations. The team was very helpful during the procurement process, providing detailed technical support and prompt delivery. We look forward to continuing our partnership',
        },
        {
            id: 3,
            name: 'Mark',
            industry: 'Power',
            content: 'We require components that can withstand high pressure and temperature. The flanges and valves from this supplier have been exceptional in performance. Their industrial-grade quality ensures safety and reliability in our systems. The customer service is also excellent, with timely responses and swift problem-solving. We are extremely satisfied with their products and services.',
        },
        {
            id: 4,
            name: 'Emma',
            industry: 'Water Treatment',
            content: 'Finding high-quality, sanitary grade pipes and valves for our water treatment facility was a challenge until we started working with this supplier. Their products are not only durable but also meet all regulatory standards, which is crucial for us. The support team has been incredibly supportive, assisting us with all technical details and ensuring smooth delivery. Highly recommended for anyone in the water treatment industry.',
        },
        {
            id: 5,
            name: 'David',
            industry: 'Shipbuilding',
            content: 'Our shipbuilding operations demand robust and reliable components, and this supplier has consistently delivered. The industrial-grade flanges and valves have performed excellently in harsh marine environments. The service team is knowledgeable and always ready to assist with technical advice. We couldn\'t be happier with the products and the overall experience.',
        },
        {
            id: 6,
            name: 'Lisa',
            industry: 'Food Processing',
            content: 'Quality and hygiene are paramount in the food processing industry, and the sanitary grade valves and pipes from this supplier have been outstanding. They are easy to clean and have helped us maintain high standards of cleanliness in our facility. The customer service has been exemplary, with fast responses and efficient problem resolution. We highly recommend their products for any food and beverage company.',
        },
    ],
    async getFeedbacks() {
        return this.data;
    },
};

export default feedbackModel;
