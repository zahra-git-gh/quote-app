import {screen, render} from '@testing-library/react';
import RandomQuotCard from '../components/RandomQuoteCard';
import fetchMock from "jest-fetch-mock";
import data from '../randomQuoteData.json';
fetchMock.enableMocks()
describe("test RandomQuoteCard component", ()=>{
    beforeEach(()=>{fetch.resetMocks()});
    test("fetch data and show in page", async()=>{
        fetch.mockResponseOnce(JSON.stringify(data))
        render(<RandomQuotCard/>)
        const quote=await screen.findByTestId("quote-paragraph")
        expect(quote).toBeInTheDocument()
    })
    test("equal text-content and data quote", async()=>{
        fetch.mockResponseOnce(JSON.stringify(data))
        render(<RandomQuotCard/>)
        const quote=await screen.findByTestId("quote-paragraph")
        expect(quote.textContent).toBe(data.quote.quote)
    })
    test("equal authorName and data author", async()=>{
        fetch.mockResponseOnce(JSON.stringify(data))
        render(<RandomQuotCard/>)
        const author=await screen.findByTestId("author-paragraph")
        expect(author.textContent).toBe(data.quote.author)
    })
})