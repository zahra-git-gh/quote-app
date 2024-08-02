import {render, screen} from '@testing-library/react';
import QuotesBy from '../../components/QuotesBy';


describe("test component QuotesBy", ()=>{
    test("should show author name in component", ()=>{
        render(<QuotesBy isShow={true} author={"steve jobs"}/>)
        const paragraph=screen.getByRole("paragraph")
        expect(paragraph.textContent).toContain("steve jobs")
    })
})