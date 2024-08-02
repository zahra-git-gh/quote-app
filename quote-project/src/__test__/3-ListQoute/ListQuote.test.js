import {render, screen} from '@testing-library/react';
import ListQuote from '../../components/ListQuote';

const data2=[
    {
        "id": 15,
        "category": "Imagination",
        "quote": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
        "author": "Albert Einstein",
        "description": "Einstein's perspective on the power of imagination in shaping the future."
    },
    {
        "id": 30,
        "category": "Curiosity",
        "quote": "I have no special talents. I am only passionately curious.",
        "author": "Albert Einstein",
        "description": "Einstein's acknowledgment of the power of curiosity in intellectual pursuits."
    },
    {
        "id": 33,
        "category": "Wisdom",
        "quote": "It is not that I'm so smart. But I stay with the questions much longer.",
        "author": "Albert Einstein",
        "description": "Insight into the importance of staying curious and engaged with questions."
    },
    {
        "id": 98,
        "category": "Nature",
        "quote": "Look deep into nature, and then you will understand everything better.",
        "author": "Albert Einstein",
        "description": "Insight into the profound understanding that nature can offer about life and existence."
    },
    {
        "id": 106,
        "category": "Imagination",
        "quote": "The true sign of intelligence is not knowledge but imagination.",
        "author": "Albert Einstein",
        "description": "Einstein's viewpoint on the role of imagination in measuring intelligence."
    },
    {
        "id": 116,
        "category": "Creativity",
        "quote": "Creativity is intelligence having fun.",
        "author": "Albert Einstein",
        "description": "A playful definition of the relationship between creativity and intelligence."
    }
]
describe("test component ListQuote", ()=>{
    test("test number of data equal to number of cards", ()=>{
        render(<ListQuote isShow={true} data={data2}/>)
        const card=screen.getAllByTestId("box-quote");
        expect(card).toHaveLength(6)
    })
})