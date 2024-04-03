import {Box, Typography} from '@mui/material'

export const Footer = () => {
    return(
        <Box
            component='footer'
            sx={{
                backgroundColor: 'var(--blue)',
                padding: {xs: '12px', sm: '18px', md: '22px'},
                color: 'var(--white)',
            }}
        >
            <Typography sx={{fontSize: 18, fontWeight: 500}}>МСК</Typography>
        </Box>
    )
}
