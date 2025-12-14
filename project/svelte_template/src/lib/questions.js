export const questions = [
    {
        id: 'transport',
        title: 'How will you move around?',
        subtitle: 'Select your main transportation',
        options: [
            { value: 'walk', label: 'Walking' },
            { value: 'public', label: 'Public Transport' },
            { value: 'car', label: 'Rental Car' },
            { value: 'bike', label: 'Bicycle/Scooter' }
        ]
    },
    {
        id: 'companion',
        title: 'Who are you with?',
        subtitle: 'Select your travel companion',
        options: [
            { value: 'solo', label: 'Solo' },
            { value: 'couple', label: 'Couple' },
            { value: 'family', label: 'Family' },
            { value: 'friends', label: 'Friends' }
        ]
    },
    {
        id: 'timeOfDay',
        title: 'When do you prefer to go?',
        subtitle: 'Select preferred time of day',
        options: [
            { value: 'morning', label: 'Morning' },
            { value: 'afternoon', label: 'Afternoon' },
            { value: 'evening', label: 'Evening' },
            { value: 'night', label: 'Night' }
        ]
    },
    {
        id: 'mood',
        title: 'What is your mood?',
        subtitle: 'Select the vibe you want',
        options: [
            { value: 'nature', label: 'Nature & Healing' },
            { value: 'culture', label: 'Culture & History' },
            { value: 'activity', label: 'Active & Fun' },
            { value: 'relax', label: 'Relaxing' }
        ]
    },
    {
        id: 'avoid',
        title: 'Anything to avoid?',
        subtitle: 'Select all that apply',
        multiple: true,
        options: [
            { value: 'crowd', label: 'Crowded places' },
            { value: 'walking', label: 'Long walking' },
            { value: 'cost', label: 'High cost' },
            { value: 'weather', label: 'Outdoor/Weather sensitive' }
        ]
    },
    {
        id: 'intensity',
        title: 'Activity Level?',
        subtitle: 'How active do you want to be?',
        options: [
            { value: 'light', label: 'Light' },
            { value: 'moderate', label: 'Moderate' },
            { value: 'active', label: 'Active' }
        ]
    },
    {
        id: 'food',
        title: 'Food preference?',
        subtitle: 'What would you like to eat nearby?',
        options: [
            { value: 'seafood', label: 'Seafood' },
            { value: 'meat', label: 'Meat/BBQ' },
            { value: 'cafe', label: 'Cafe & Dessert' },
            { value: 'traditional', label: 'Traditional Food' }
        ]
    }
];
