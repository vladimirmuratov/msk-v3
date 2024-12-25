import { Link, Typography } from '@mui/material';

export const BaseLink = ({ icon, label, path }) => {
    return (
        <Link href={path} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'var(--black)',
            textDecoration: 'none'
        }}>
            {icon}
            <Typography>{label}</Typography>
        </Link>
    );
};
