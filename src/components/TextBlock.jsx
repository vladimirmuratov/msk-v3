import {Box, Typography} from '@mui/material'

export const TextBlock = ({text}) => {
    return (
        <Box sx={{paddingX: {xs: '12px', sm: '18px', md: '22px'}}}>
            <Typography sx={{whiteSpace: 'pre-wrap', color: 'var(--black)', fontSize: {xs: '18px', md: '20px'}}}>{text}</Typography>
        </Box>
    )
}
