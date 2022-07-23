import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { faqData } from '../data';
import Title from './pages/Home/Title';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaqContainer } from './styles';

export default function Faq() {
  return (
    <FaqContainer>
      <Container>
        <Title
          titleName="Common Question"
          titleDescription="Frequently asked questions"
          descriptionsize="48px"
          textAlign="center"
          titlecolor="#ffffff"
          descriptioncolor="#ffffff"
        />
        <Grid container spacing={3}>
          {faqData.map((faqItem) => (
            <Grid item xs={6} key={faqItem.id}>
              <Accordion sx={{ padding: '15px 10px' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">{faqItem.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1">
                    {faqItem.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FaqContainer>
  );
}
