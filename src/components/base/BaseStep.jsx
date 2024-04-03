import {Box, Divider, Typography} from '@mui/material'

export const BaseStep = ({id = '', number, label}) => {
    return (
        <Box
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
            <Typography sx={{textTransform: 'uppercase', fontSize: '40px', color: 'var(--black)'}}>{label}</Typography>
        </Box>
    )
}
