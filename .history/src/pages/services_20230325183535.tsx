import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HandymanIcon from '@mui/icons-material/Handyman';
import AndroidIcon from '@mui/icons-material/Android';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AttachmentIcon from '@mui/icons-material/Attachment';
import htmlParser from "react-html-parser"
const services = [
    {
        id: "1",
        label: "What is Lorem Ipsum?",
        icon: <CameraAltIcon />,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "2",
        label: "What is Lorem Ipsum?",
        icon: <HandymanIcon />,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "3",
        label: "What is Lorem Ipsum?",
        icon: <YouTubeIcon />,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "4",
        label: "What is Lorem Ipsum?",
        icon: <AndroidIcon />,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "5",
        label: "What is Lorem Ipsum?",
        icon: <HandshakeIcon />,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "6",
        label: "What is Lorem Ipsum?",
        icon: <WbIncandescentIcon />,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "7",
        label: "What is Lorem Ipsum?",
        icon: <AttachmentIcon />,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
            <div className="py-4">

                <h1 className='font-bold text-3xl'>Services</h1>
                <div className='w-52 h-1 bg-purple-500'></div>
            </div>
            {
                services.map((service, ind) => {
                    return (

                        <Accordion expanded={expanded === `panel${ind}`} onChange={handleChange(`panel${ind}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={{
                                    py: 3,
                                    display: "flex",
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}
                            >
                                <div>

                                <Typography sx={{  color: 'purple', fontSize: 40 }}>
                                    {service.icon}
                                </Typography>
                                <Typography sx={{width: '50%', flexShrink: 0 }}>{service.label}</Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {htmlParser(service.description)}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

        </div>
    );
}
