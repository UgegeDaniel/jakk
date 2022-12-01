import { Typography } from '@material-ui/core'
const ItalisizedTypography = ({ children, variant, align }) => (
    <div style={{ display: "flex", margin: "0.25rem", lineHeight: "0.5rem", letterSpacing: "3px" }}>
        <Typography variant={variant ? variant : "body2"} component="i" gutterbottom="true" style={{ textAlign: align ? align : "left" }}>
            {children}
        </Typography>
    </div>
)
export default ItalisizedTypography;