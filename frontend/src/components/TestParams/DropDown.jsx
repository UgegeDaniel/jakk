import { Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const DropDown = ({ labelName, value, name, handleChange, items, disabled }) => (
    <Box>
        <FormControl fullWidth>
            <InputLabel><i>{labelName}</i></InputLabel>
            <Select
                value={value}
                name={name}
                autoWidth={false}
                onChange={handleChange}
            >
                {items.map((subject, index) => <MenuItem key={index} disabled={disabled}> {subject.toUpperCase()}</MenuItem>)}
            </Select>
        </FormControl>
    </Box>
)

export default DropDown;