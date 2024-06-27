'use client';

import FeedbackCard from './feedback-card';

export default function Feedbacks({
    feedbacks,
}) {
    return (
        <div className='md:grid md:grid-cols-3 flex flex-col gap-2 mb-8 px-3 md:px-0'>
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