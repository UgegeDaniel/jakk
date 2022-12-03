import { Paper, Modal, Container } from '@material-ui/core'
import { FaTimes } from 'react-icons/fa';
import { useStyles, modalContainerStyle } from '../../styles'

const ModalComponent = ({ children, open, setOpen, noClose }) => {
    const classes = useStyles();
    const handleClose = () => setOpen(false);
    return (
        <Modal open={open} onClose={handleClose} style={modalContainerStyle}>
            <Paper>
                <Container className={classes.modalStyle}>
                    {!noClose && <FaTimes onClick={() => setOpen(prevState => false)} className={classes.closeModalStyle} />}
                    {children}
                </Container>
            </Paper>
        </Modal>
    )
}

export default ModalComponent;