import {render, fireEvent, screen} from '@testing-library/react';
import InputSearchAuthor from '../components/InputSearchAuthor';
const mockFunction=jest.fn()
describe("test component inputSearchAuthor", ()=>{
    test("when form submit mockFunction should call once", ()=>{
        render(<InputSearchAuthor setAuthor={mockFunction}/>)
        const form =screen.getByRole("form");
        fireEvent.submit(form);
        expect(mockFunction).toHaveBeenCalledTimes(1)
    })
})