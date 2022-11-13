import { Button } from '@material-ui/core'
const Param = ({ items, testParams, setTestParams, className, feild }) => (
    <ul>
        {items?.length !== 0 && items?.map((item, index) =>
            <Button key={index} value={item} onClick={(e) => setTestParams({ ...testParams, [feild]: e.target.textContent })} className={className} variant='contained' color={index % 2 === 1 ? "primary" : "secondary"} size="small">
                {item}
            </Button>
        )}
    </ul>

)
export default Param