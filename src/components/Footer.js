import { Box, Container } from '@mui/material';
import React from 'react';
import { socialData } from '../data';
import Logo from '../images/FieldXWhite.png';
import { FooterContainer, FooterCopyRight } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            paddingBottom: '50px',
          }}
        >
          <Box component="img" src={Logo} alt="FieldX" />
          <Box
            component="p"
            sx={{
              maxWidth: '500px',
              margin: '15px auto',
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque.
          </Box>
          <Box>
            {socialData.map(({ title, icon, link }) => (
              <a
                className="footer-icon"
                href={link}
                target="_blank"
                rel="noreferrer"
                key={title}
              >
                <img src={icon} alt={title} />
              </a>
            ))}
          </Box>
        </Box>
      </Container>
      <FooterCopyRight>
        <Container>
          &copy; All rights reserve by
          <span>MAAC</span>
        </Container>
      </FooterCopyRight>
    </FooterContainer>
  );
}
