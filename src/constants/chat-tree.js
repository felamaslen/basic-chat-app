export const TYPES = {
    BUTTON: 0x001,
    SELECT: 0x002,
    INPUT_STRING: 0x003,
    INPUT_NUMBER: 0x004,
    LOCATION: 0x005
};

export default [
    {
        id: 1,
        question: 'Left or right?',
        answer: {
            type: TYPES.BUTTON,
            options: [
                { text: 'Left', next: 2 },
                { text: 'Right', next: 3 }
            ]
        }
    },
    {
        id: 2,
        question: 'Where are you?',
        answer: {
            type: TYPES.LOCATION,
            next: 4
        }
    },
    {
        id: 3,
        question: 'What is your name?',
        answer: {
            type: TYPES.INPUT_STRING,
            next: 5
        }
    },
    {
        id: 4,
        question: 'How old are you?',
        answer: {
            type: TYPES.INPUT_NUMBER,
            next: -1
        }
    },
    {
        id: 5,
        question: 'What is your favourite colour?',
        answer: {
            type: TYPES.SELECT,
            options: [
                { text: 'Red', next: -1 },
                { text: 'Blue', next: -1 }
            ]
        }
    }
];

