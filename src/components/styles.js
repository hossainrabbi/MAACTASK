import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)((props) => ({
  backgroundColor: `${props.bg} !important`,
  padding: props.padding,
  textTransform: 'capitalize',
  boxShadow: `3px 3px ${props.shadow}`,
}));
