'use client';

import FeedbackCard from './feedback-card';

export default function Feedbacks({
    feedbacks,
}) {
    return (
        <div className='grid grid-cols-3 gap-2 mb-8'>
            {feedbacks.map((feedback) => (
                <FeedbackCard
                    key={feedback.id}
                    name={feedback.name}
                    description={feedback.content}
                    industry={feedback.industry}
                />
            ))}
        </div>
    );
}