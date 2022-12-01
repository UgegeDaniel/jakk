import { Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const DropDown = ({ labelName, value, name, handleChange, items }) => (
    <Box style={{ minWidth: 120, maxHeight: "50%" }}>
        <FormControl fullWidth>
            <InputLabel><i>{labelName}</i></InputLabel>
            <Select
                value={value}
                name={name}
                autoWidth={false}
                onChange={handleChange}
            >
                {items.map((item, index) => <MenuItem value={item} key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</MenuItem>)}
            </Select>
        </FormControl>
    </Box>
)

export default DropDown;
