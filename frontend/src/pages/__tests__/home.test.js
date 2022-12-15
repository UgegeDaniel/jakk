import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../home'
import AppProvider from '../../AppProvider'

describe("Component", () => {
    test("renders continue with Google button", () => {
        render(<Home />, {
            wrapper: AppProvider
        })
        // screen.debug()
        const googleBtn = screen.getByRole("button", { name: /Continue with Google/i })
        // screen.debug()
        expect(googleBtn).toBeInTheDocument()
    })
    test("renders text on home screen", () => {
        render(<Home />, {
            wrapper: AppProvider
        })
        // screen.debug()
        const welcomeTxt = screen.getByText(/single page application/i)
        // screen.debug()
        expect(welcomeTxt).toBeInTheDocument()
    })
    test("renders Form component on button click", async()=>{
        render(<Home />, {
            wrapper: AppProvider
        })
        //screen.debug()
        const googleBtn = screen.getByRole("button", { name: /Continue with Google/i })
        fireEvent.click(googleBtn)
        //screen.debug()
        const signUpBtn = screen.getByRole("button", {name: /^Sign up$/i})
        expect(signUpBtn).toBeInTheDocument()
      })
})