import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import AppWrapper from '../../../AppWrapper'

test("Render hero text", () => {
    render(<AppWrapper><Hero setOpen={()=> {}}/></AppWrapper>)
    const heroTxt = screen.getByText(/O - Level Examinations/i)
    expect(heroTxt).toBeInTheDocument()
})