import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const BaseAccordionItem = ({id, question, answer}) => {

    return(
        <Accordion>
            <AccordionSummary
                sx={{fontWeight: 500, fontSize: 18}}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
            >
                <Typography variant='h3' sx={{fontSize: {sm: '18px', md: '20px'}, ':hover': {color: 'var(--blue)'}, transition: 'all 0.3s'}}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: 'var(--blue)', color: 'var(--white)', whiteSpace: 'pre-wrap'}}>
                <Typography sx={{fontSize: {sm: '18px', md: '20px'}, lineHeight: 1.5}}>{answer}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}
