import { Box, Typography } from '@mui/material';
import { address, phoneNumber } from '@/config';
import Link from 'next/link';
import SocialBlock from '@/components/SocialBlock';

export const ContactBanner = () => {
    return (
        <Box sx={{
            display: { xs: 'none', md: 'flex' },
            color: 'var(--white)',
            backgroundColor: 'var(--blue)',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: { xs: '12px', sm: '18px', md: '22px' },
            paddingY: '12px'
        }}>

            <Typography sx={{ fontSize: '14px' }}>{address}</Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <Typography sx={{ fontSize: '16px' }}>
                    <Link href="tel:84997198100">{phoneNumber}</Link>
                </Typography>

                <SocialBlock/>

            </Box>
        </Box>
    );
};
