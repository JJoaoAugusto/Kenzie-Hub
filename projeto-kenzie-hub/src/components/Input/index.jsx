import { forwardRef } from "react"
import { StyledFieldset } from "./index.js"
import { StyledLabel } from "../../styles/TipographyStyles/StyledLabel.js"

export const Input = forwardRef(({ label, errors, ...rest }, ref) => {
    return (
        <StyledFieldset>
            <StyledLabel>{label}</StyledLabel>
            <input ref={ref} {...rest} />
            {errors ? <p>{errors.message}</p> : null}
        </StyledFieldset>
    )
})