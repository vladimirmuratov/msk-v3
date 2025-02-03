import { Box, Button, Typography } from '@mui/material';
import { phoneNumber } from '@/config';
import { useRouter } from 'next/navigation';

export const Banner = () => {
    const router = useRouter();

    return (
        <Box sx={{
            display: 'grid',
            placeItems: 'center',
            position: 'relative',
            backgroundImage: 'url(/images/banner.jpg)',
            height: '80vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(90%)'
        }}>
            {/*<img className="banner" src="/images/banner.jpg" alt="banner" style={{ filter: 'brightness(65%)' }} />*/}
            <Box sx={{
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
                        textWrap: 'balance'
                    }}>Платная госпитализация в ведущие больницы Москвы</Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '18px', sm: '28px', md: '32px' },
                        color: 'var(--blue)',
                        textShadow: '2px 2px 1px var(--white)',
                        textAlign: 'center'
                    }}>Доверьте свое здоровье профессионалам!</Typography>

                <Button
                    onClick={() => router.push(`tel:${phoneNumber}`)}
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{
                        alignSelf: 'center',
                    }}
                >
                    Позвонить
                </Button>

            </Box>

        </Box>
    );
};
