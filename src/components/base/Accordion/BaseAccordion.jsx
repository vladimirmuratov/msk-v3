import {Box} from '@mui/material'
import {BaseAccordionItem} from '@/components/base/Accordion/BaseAccordionItem'

export const BaseAccordion = ({id = '', items = []}) => {

    return (
        <Box
            id={id}
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: {xs: '12px', sm: '18px', md: '22px'},
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}>

            {items.map((item) => <BaseAccordionItem key={item.id} {...item}/>)}

        </Box>
    )
}
