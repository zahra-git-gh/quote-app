import {screen, render, fireEvent} from '@testing-library/react';
import BasicBtn from '../../components/Button';
import '@testing-library/jest-dom'
const functionMock=jest.fn()
describe("tests for BasicBtn component", ()=>{
    test("should render with the text in props", ()=>{
        render(<BasicBtn text={"My Button"} handleClick={functionMock}/>)
        const button=screen.getByRole("button")
        expect(button.textContent).toBe("My Button")
    })
    test("should render with the text in props2", ()=>{
        render(<BasicBtn text={"My Button"} handleClick={functionMock}/>)
        const button=screen.getByText("My Button")
        expect(button).toBeInTheDocument()
    })
    test("function in props should call after every click", ()=>{
        render(<BasicBtn text={"My Button"} handleClick={functionMock}/>)
        const button=screen.getByRole("button")
        fireEvent.click(button)
        expect(functionMock).toHaveBeenCalledTimes(1)
    })
})