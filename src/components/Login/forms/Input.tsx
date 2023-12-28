import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Input() {
  return (
    <div>
      <Box display="flex" flexDirection="column">
        <TextField
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
          // fullWidth
          size="small"
          sx={{
            maxWidth: "80vw",
          }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          variant="outlined"
          // fullWidth
          size="small"
          type="password"
          sx={{ marginTop: "1rem", maxWidth: "80vw" }}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: "1rem",
          }}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Input;
