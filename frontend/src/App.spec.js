import {
    render,
    screen,
    cleanup,
    fireEvent
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import AppWrapper from './AppWrapper'

import { Form } from './components'

afterEach(cleanup)

test("Render Continue with Google btn", async () => {
    render(<AppWrapper><App /></AppWrapper>)
    expect(screen.getByText(/continue with google/i)).toBeInTheDocument();
})
const student = {
    name: "",
    email: "",
    history: ""
}
test("Render Form component", async () => {
    render(
        <AppWrapper>
            <Form student={student} setNotification={() => {}}/>
        </AppWrapper>
    )
    expect(screen.getByRole("title")).toBeInTheDocument();
})

test("Render Form component on Button Click", async () => {
    render(
        <AppWrapper>
            <App/>
        </AppWrapper>
    )
    userEvent.click(screen.getByText(/continue with google/i))
    // expect(screen.getByRole("title")).toBeInTheDocument();
    // screen.debug();
})
