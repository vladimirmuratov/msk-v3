import {Box, Divider, Typography} from '@mui/material'

export const BaseStep = ({id = '', number, label, className = ''}) => {
    return (
        <Box
            className={className}
            id={id}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: {xs: '25px', sm: '50px'}
            }}
        >
            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    backgroundColor: 'var(--blue)',
                    height: '100px',
                    width: '2px',
                    alignSelf: 'center',
                }}
            />
            <Typography sx={{color: 'var(--blue)', fontSize: '24px'}}>{number}</Typography>
            <Typography variant='h2' sx={{textTransform: 'uppercase', fontSize: {xs: '36px', md: '40px'}, fontWeight: 400, color: 'var(--blue)'}}>{label}</Typography>
        </Box>
    )
}
