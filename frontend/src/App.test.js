import {render, screen} from '@testing-library/react';
import App from './App';
import AppWrapper from './AppWrapper'

test("Render Continue with Google btn",()=>{
    render(<AppWrapper><App/></AppWrapper>)
    const btnText = screen.getByText(/Continue with Google/i)
    expect(btnText).toBeInTheDocument()
} )