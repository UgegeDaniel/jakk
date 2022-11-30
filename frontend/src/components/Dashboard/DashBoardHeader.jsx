import PropTypes from 'prop-types';
import { CardHeader, IconButton, Avatar, Chip, } from '@material-ui/core'
import { FaUser } from 'react-icons/fa';
import { deepPurple } from '@material-ui/core/colors';

const DashBoardHeader = ({ student }) => (
    <CardHeader
        action={
            <IconButton>
                <Avatar style={{ backgroundColor: deepPurple[500] }}>{student?.userName.charAt(0)}</Avatar>
            </IconButton>
        }
        title={
            <Chip
                style={{ color: "#fff" }}
                avatar={<Avatar>{<FaUser />}</Avatar>}
                label={student?.userName}
                color="primary"
            />}
        subheader={
            <Chip
                style={{ color: "#fff", marginTop: "5px" }}
                avatar={<Avatar>@</Avatar>}
                label={student?.email}
                color="secondary"
            />}
    />)
DashBoardHeader.propTypes = {
    student: PropTypes.object,
};
export default DashBoardHeader;