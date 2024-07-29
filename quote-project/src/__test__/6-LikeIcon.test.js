import {fireEvent, render, screen} from '@testing-library/react';
import LikeIcon from '../components/LikeIcon';
import '@testing-library/jest-dom'

describe("test LikeIcon component", ()=>{
    test("by one click should be fill-icon", ()=>{
        render(<LikeIcon/>)
        const parentIcon=screen.getByRole("div");
        fireEvent.click(parentIcon)
        const fillIcon=screen.getByTestId("fill-heart")
        expect(fillIcon).toBeInTheDocument()
    })
    test("by two click should be outline-icon", ()=>{
        render(<LikeIcon/>)
        const parentIcon=screen.getByRole("div");
        fireEvent.click(parentIcon)
        fireEvent.click(parentIcon)
        const outlineIcon=screen.getByTestId("outline-heart")
        expect(outlineIcon).toBeInTheDocument()
    })
})