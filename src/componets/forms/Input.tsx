
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

function Input (){
    return (
        <div>
            <form>
            <TextField required id="outlined-basic" label="Email" variant="outlined" fullWidth size="small"/>
            <TextField required id="outlined-basic" label="Password" variant="outlined" fullWidth size="small" type="password"/>
            <Button variant="contained" >Login</Button>
            </form>
        </div>
    )
}

export default Input