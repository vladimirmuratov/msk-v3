import { Box, Button, Typography } from '@mui/material';
import { phoneNumber } from '@/config';
import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

export const Banner = () => {
    const router = useRouter();
    /*const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const os = navigator.userAgentData.platform;

        if (os === 'Android' || os === 'iOS') {
            setMobile(true);
        }

    }, []);*/

    return (
        <Box sx={{
            position: 'relative',
            backgroundImage: 'url(/images/banner.jpg)',
            height: '80vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            // filter: 'brightness(65%)'
        }}>
            {/*<img className="banner" src="/images/banner.jpg" alt="banner" style={{ filter: 'brightness(65%)' }} />*/}
            <Box sx={{
                position: 'absolute',
                top: '20%',
                left: '5%',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '10px', sm: '15px' },
            }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '36px', sm: '48px', md: '64px' },
                        fontWeight: 500,
                        // lineHeight: 1,
                        color: 'var(--white)',
                        textShadow: '0 2px 2px var(--black)',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}>Лечение в лучших клиниках москвы</Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '18px', sm: '28px', md: '32px' },
                        // lineHeight: 1,
                        color: 'var(--white)',
                        textShadow: '0 2px var(--black)',
                        textAlign: 'center'
                    }}>Доверьте свое здоровье профессионалам!</Typography>

                <Button
                    onClick={() => router.push(`tel:${phoneNumber}`)}
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{
                        alignSelf: 'center',
                        // display: isMobile ? 'block' : 'none'
                    }}
                >
                    Позвонить
                </Button>

            </Box>

        </Box>
    );
};
