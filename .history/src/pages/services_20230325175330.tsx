import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const services = [
    {
        id:"1",
        label: "Service 1",
        icon:"icon",
        description:"serices description"
    },
    {
        id:"2",
        label: "Service 1",
        icon:"icon",
        description:"serices description"
    },
    {
        id:"3",
        label: "Service 1",
        icon:"icon",
        description:"serices description"
    },
    {
        id:"4",
        label: "Service 1",
        icon:"icon",
        description:"serices description"
    },
    {
        id:"5",
        label: "Service 1",
        icon:"icon",
        description:"serices description"
    },
    {
        id:"6",
        label: "Service 1",
        icon:"icon",
        description:"serices description"
    },
    {
        id:"7",
        label: "Service 1",
        icon:"icon",
        description:"serices description"
    },
]
export default function Sercices() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className='py-24 px-10'>
        {
            services.map((service,ind) => {
                return(

                <Accordion expanded={expanded === `panel${ind}`} onChange={handleChange(`panel${ind}`)}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{service.icon}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                       {service.description}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                )
            })
        }

    </div>
  );
}
