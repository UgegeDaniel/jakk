import { CardActions, Button } from '@material-ui/core'
import { useStyles } from '../../styles'
import { Link } from 'react-router-dom';

const LeftBtn = ({ btnTxt, handleClick }) => {
    const classes = useStyles();
    return (
        <CardActions>
            <Link>
                <Button className={classes.mc} variant='contained' color="secondary" size="small" onClick={handleClick}> {btnTxt}</Button>
            </Link>
        </CardActions>
    )
}
export default LeftBtn