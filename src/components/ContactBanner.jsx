import {Box, Typography} from '@mui/material'
import {address, phoneNumber} from '@/config'

export const ContactBanner = () => {
    return (
        <Box sx={{
            color: 'var(--white)',
            backgroundColor: 'var(--blue)',
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: {xs: '12px', sm: '18px', md: '22px'},
            paddingY: '12px'
        }}>
            <Typography sx={{fontSize: '12px'}}>{address}</Typography>
            <Typography sx={{fontSize: '12px'}}>{phoneNumber}</Typography>
        </Box>
    )
}
