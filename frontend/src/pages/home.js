import PropTypes from 'prop-types';
import { Box } from '@material-ui/core'
import { useState } from 'react'
import { ModalComponent, Form, Hero } from '../components'

const Home = ({ setNotification, setStudent }) => {
    const [open, setOpen] = useState(false);
    return (
        <Box >
            <Hero setOpen={setOpen}/>
            <ModalComponent open={open} setOpen={setOpen} >
                <Form setStudent={setStudent} setNotification={setNotification} />
            </ModalComponent>
        </Box>
    )
}
Home.propTypes = {
    setNotification: PropTypes.func,
    setStudent: PropTypes.func,
};
export default Home