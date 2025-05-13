import { Box, Typography } from '@mui/material';

export const ImageBlock1 = ({ img, text }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                paddingX: { xs: '12px', sm: '18px', md: '22px' },
                paddingY: { xs: '25px', sm: '50px' }
            }}
        >
            <img className="img" src={img} alt="pic" />
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    backgroundColor: 'var(--blue)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px'
                }}>
                <Typography
                    sx={{
                        color: 'var(--white)',
                        whiteSpace: 'pre-wrap',
                        fontSize: { xs: '18px', md: '20px' },
                        // lineHeight: 1.3
                    }}>{text}</Typography>
            </Box>
        </Box>
    );
};
