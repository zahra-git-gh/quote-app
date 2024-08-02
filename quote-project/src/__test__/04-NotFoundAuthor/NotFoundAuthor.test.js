import {render, screen} from '@testing-library/react';
import NotFoundAuthor from '../../components/NotFoundAuthor';
import '@testing-library/jest-dom'
describe("test NotFoundAuthor component", ()=>{
    test("when isShow is true paragraph show in component",()=>{
        render(<NotFoundAuthor isShow={true} author={"steve jobs"}/>)
        const paragraph=screen.getByRole("paragraph")
        expect(paragraph).toBeInTheDocument()
    })
    test("author name show in paragraph",()=>{
        render(<NotFoundAuthor isShow={true} author={"steve jobs"}/>)
        const paragraph=screen.getByRole("paragraph")
        expect(paragraph.textContent).toContain("steve jobs")
    })
})