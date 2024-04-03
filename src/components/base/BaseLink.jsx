import {Box, Link, Typography} from '@mui/material'

export const BaseLink = ({icon, label, path}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {icon}
            <Link href={path} sx={{color: 'var(--black)', textDecoration: 'none'}}>
                <Typography>{label}</Typography>
            </Link>
        </Box>
    )
}
