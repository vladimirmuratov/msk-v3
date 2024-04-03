import '@/styles/globals.css'
import {AppCacheProvider} from '@mui/material-nextjs/v14-pagesRouter'
import {ThemeProvider} from '@mui/material/styles'
import {theme} from '@/theme'
import {Layout} from '@/components/Layout'

export default function App({Component, pageProps}) {
    return (
        <AppCacheProvider {...pageProps}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </AppCacheProvider>
    )
}
