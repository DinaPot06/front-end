import React from 'react'

export const listBooks = () => {
    return [
        {
            id: '0',
            name: 'Demijan',
            genre: 'drama',
            author: 'Herman Hese',
        },

        {
            id: '1',
            name: 'Zlostorstvo i kazna',
            genre: 'krimi',
            author: 'Fjodor M. Dostoevski',
        },
        {
            id: '2',
            name: 'Izbrani pesni',
            genre: 'poezija',
            author: 'Rumi',
        },

    ]; // replace the empty array with actual array with at least 5 student objects
}
export default  listBooks()