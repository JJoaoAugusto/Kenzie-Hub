import { forwardRef } from "react"
import { StyledSelect } from "./index.js"
import { StyledLabel } from "../../styles/TipographyStyles/StyledLabel.js"

export const Select = forwardRef(({ label, errors, ...rest }, ref) => {
    return (
        <StyledSelect>
            <StyledLabel>{label}</StyledLabel>
            <select ref={ref} {...rest} ></select>
            {errors ? <p>{errors.message}</p> : null}
        </StyledSelect>
    )
})