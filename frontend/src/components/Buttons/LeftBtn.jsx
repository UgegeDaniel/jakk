import { CardActions, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const LeftBtn = ({ btnTxt, handleClick, Icon, secondary }) => {
    return (
        <CardActions>
            <Link>
                <Button
                    style={{ borderRadius: "15px", padding: "0.25rem 0.5rem", fontSize: "14px", letterSpacing: "2px" }}
                    variant='contained'
                    color={secondary ? "primary" : "secondary"}
                    size="small"
                    onClick={handleClick}
                    startIcon={Icon && <Icon style={{ fontSize: "14px", marginLeft: "0.4rem", }} />}
                >
                    {btnTxt}
                </Button>
            </Link>
        </CardActions>
    )
}
export default LeftBtn