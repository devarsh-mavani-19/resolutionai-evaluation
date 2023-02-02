import { Avatar, Typography } from "@mui/material";

export default function Header() {
    return (
        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', margin: '0.5rem' }}>
            <Avatar sx={{ marginRight: '0.5rem' }} />
            <Typography variant='body1'>xyz@gmail.com</Typography>
        </div>
    )
}