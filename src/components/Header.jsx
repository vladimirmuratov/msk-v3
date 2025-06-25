import { Box, IconButton, Link } from '@mui/material';
import { ContactBanner } from '@/components/ContactBanner';
import { links } from '@/config';
import { BaseLink } from '@/components/base/BaseLink';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { useCallback, useEffect, useRef, useState } from 'react';
import SocialBlock from '@/components/SocialBlock';

export const Header = ({ toggleDrawer }) => {
    const scrollContainer = useRef();
    const [position, setPosition] = useState('relative');

    const onScroll = useCallback(() => {
        const { top, bottom } = scrollContainer.current.getBoundingClientRect();
        if (bottom <= 0) {
            setPosition('fixed');
        } else {
            setPosition('relative');
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Box ref={scrollContainer}>

            <ContactBanner />

            <Box
                component="header"
                sx={{
                    position: position,
                    maxWidth: '1140px',
                    margin: '0 auto',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: 'var(--white)',
                    padding: { xs: '12px', sm: '18px', md: '22px' },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 2px 10px rgb(0 0 0 / 20%)'
                }}>
                <Link href="/">
                    <img className="logo" src="/images/logo.png" alt="logo" />
                </Link>
                <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: '25px', margin: '0 auto' }}>
                    {links.map((link) => <BaseLink key={link.id} {...link} />)}
                </Box>

                <IconButton
                    onClick={toggleDrawer(true)}
                    sx={{
                        // visibility: {xs: 'visible', md: 'hidden'},
                        display: { xs: 'block', md: 'none' }
                    }}
                >
                    <MenuTwoToneIcon sx={{ color: 'var(--blue)' }} />
                </IconButton>

                {position === 'fixed' && (
                    <Box sx={{display: { xs: 'none', md: 'block' }}}>
                        <SocialBlock />
                    </Box>
                )}

            </Box>
        </Box>
    );
};
