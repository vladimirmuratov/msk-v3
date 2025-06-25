import { Link, Typography } from '@mui/material';

export const BaseLink = ({ icon, label, path }) => {
    return (
        <Link
            href={path}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'var(--black)',
                textDecoration: 'none',
                transition: '0.3s',
                '&:hover': {
                    transform: 'scale(1.1)',
                    color: 'var(--blue)',
                }
            }}>
            {icon}
            <Typography>{label}</Typography>
        </Link>
    );
};
