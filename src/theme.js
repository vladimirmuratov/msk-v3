import {createTheme} from '@mui/material/styles'
import {Roboto} from 'next/font/google'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
})
