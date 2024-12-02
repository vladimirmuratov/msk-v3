import { Box, Typography } from '@mui/material';
import { phoneNumber } from '@/config';
import Link from 'next/link';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--blue)',
                padding: { xs: '12px', sm: '18px', md: '22px' },
                color: 'var(--white)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <Typography sx={{ fontSize: 18, fontWeight: 500 }}>МСК</Typography>
                <Box component="span" sx={{ alignSelf: 'start' }}>&copy;</Box>
                <Box component="span">
                    <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                        2014&ndash;{new Date().getFullYear()}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                <Link href="tel:84997198100">{phoneNumber}</Link>
            </Typography>
        </Box>
    );
};
