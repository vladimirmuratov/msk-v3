import {Box} from '@mui/material'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {TemporaryDrawer} from '@/components/TemporaryDrawer'

export const Layout = ({children}) => {
    const router = useRouter()
    const [isOpen, setOpen] = useState(false)
    const anchor = 'right'

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'Escape' && (event.key === 'Tab')) {
            setOpen(false)
        }
        setOpen(open)
    }

    return (
        <Box className="container" sx={{minHeight: '100vh'}}>
            <TemporaryDrawer anchor={anchor} toggleDrawer={toggleDrawer} isOpen={isOpen} router={router}/>
            <Header toggleDrawer={toggleDrawer}/>
            {children}
            <Footer/>
        </Box>
    )
}
