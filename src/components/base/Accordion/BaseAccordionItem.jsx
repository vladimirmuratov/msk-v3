import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const BaseAccordionItem = ({id, question, answer, expanded, onChange}) => {

    return(
        <Accordion expanded={expanded === `panel${id}`} onChange={() => onChange(`panel${id}`)}>
            <AccordionSummary
                sx={{fontWeight: 500, fontSize: 18}}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
            >
                <Typography sx={{fontSize: {sm: '18px', md: '20px'}}}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: 'var(--blue)', color: 'var(--white)', whiteSpace: 'pre-wrap'}}>
                <Typography sx={{fontSize: {sm: '18px', md: '20px'}, lineHeight: 1.5}}>{answer}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}
