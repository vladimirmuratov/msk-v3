import { Box, Button, Typography } from '@mui/material';
import { phoneNumber } from '@/config';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Banner = () => {
    const router = useRouter();
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const os = navigator.userAgentData.platform;

        if (os === 'Android' || os === 'iOS') {
            setMobile(true);
        }

    }, []);

    return (
        <Box sx={{ position: 'relative' }}>
            <img className="banner" src="/images/banner.jpg" alt="banner" style={{ filter: 'brightness(85%)' }} />
            <Box sx={{
                position: 'absolute',
                top: '20%',
                left: '5%',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '10px', sm: '15px' }
            }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '36px', sm: '48px', md: '64px' },
                        fontWeight: 500,
                        lineHeight: 1,
                        color: 'var(--white)',
                        textShadow: '0 2px var(--black)'
                    }}>Долголетие с удовольствием</Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '18px', sm: '28px', md: '32px' },
                        lineHeight: 1,
                        color: 'var(--white)',
                        textShadow: '0 2px var(--black)'
                    }}>лечение, помогающее
                    пожилым людям жить полноценной жизнью</Typography>

                <Button
                    onClick={() => router.push(`tel:${phoneNumber}`)}
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{
                        alignSelf: 'flex-start',
                        display: isMobile ? 'block' : 'none'
                    }}
                >
                    Позвонить
                </Button>

            </Box>

        </Box>
    );
};
