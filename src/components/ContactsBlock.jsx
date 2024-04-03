import {Box, Link, Typography} from '@mui/material'
import {address, email, phoneNumber} from '@/config'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

export const ContactsBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: '32px',
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}
        >

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <MapOutlinedIcon sx={{color: 'var(--blue)'}}/>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>{address}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <LocalPhoneOutlinedIcon sx={{color: 'var(--blue)'}}/>
                        <Link href={`tel:${phoneNumber}`} sx={{fontSize: {xs: '14px', sm: '16px'}}}>
                            <Typography>{phoneNumber}</Typography>
                        </Link>
                    </Box>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <AlternateEmailIcon sx={{color: 'var(--blue)'}}/>
                        <Link href={`mailto:${email}`} sx={{fontSize: {xs: '14px', sm: '16px'}}}>
                            <Typography>{email}</Typography>
                        </Link>
                    </Box>
                    <Box sx={{paddingLeft: '34px'}}>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>ООО "МСК"</Typography>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>ИНН: 9725116009</Typography>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>КПП: 772501001</Typography>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>ОГРН: 1237700147343</Typography>
                    </Box>
                </Box>
                <Box>
                    <iframe
                        className="map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A604ee8345ca097d664aa1c7764529b62cb0469a88360ead0ce5d5df219788165&amp;source=constructor"
                        frameBorder="0"></iframe>
                </Box>
            </Box>
        </Box>
    )
}
