import {
  Box,
  Button,
  IconButton,
  Select,
  styled,
  TextField,
  Toolbar,
} from '@mui/material';

export const CustomButton = styled(Button)((props) => ({
  backgroundColor: `${props.bg} !important`,
  padding: props.padding,
  textTransform: 'capitalize',
  boxShadow: `3px 3px ${props.shadow}`,
}));

// About Section
export const AboutTitle = styled('div')(() => ({
  p: {
    fontSize: '22px',
    color: '#4E4E4E',
    marginTop: 0,
  },
  h3: {
    fontSize: '22px',
    color: '#0B141F',
  },
}));

// Hero Section
export const HeroContainer = styled(Box)(() => ({
  textAlign: 'center',
  marginTop: '100px',
  h1: {
    fontSize: '58px',
    width: '800px',
    margin: '0 auto',
    color: '#0B141F',
  },
}));

// ProductionFeatures Section
export const ProductionFeaturesContainer = styled(Box)(() => ({
  marginBottom: '50px',
  img: {
    padding: '8px',
    borderRadius: '10px',
    boxShadow: '0px 5px 7px 1px #dbdbdb',
  },
  h4: {
    color: '#0B141F',
    fontSize: '26px',
    marginTop: '5px',
    marginBottom: 0,
  },
  p: {
    fontSize: '16px',
    color: '#4E4E4E',
  },
}));

// Title Component
export const TitleBox = styled(Box)((props) => ({
  h5: {
    fontSize: '20px',
    marginBottom: 0,
    color: '#0052CC',
  },
  h2: {
    fontSize: props.descriptionsize,
    fontWeight: '700',
    marginTop: '5px',
    color: '#0B141F',
  },
}));

// Login, Register Page
export const InputTextField = styled(TextField)(() => ({
  backgroundColor: 'transparent !important',
  width: '100%',
  marginBottom: '20px',
  '.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root': {
    backgroundColor: 'transparent !important',
  },
  '.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover': {
    backgroundColor: 'transparent !important',
  },
}));

// Register Page
export const InputSelect = styled(Select)(() => ({
  backgroundColor: 'transparent !important',
  '.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root': {
    backgroundColor: 'transparent !important',
  },
  '.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover': {
    backgroundColor: 'transparent !important',
  },
}));

// Geo Information Layout
export const Sidebar = styled(Box)(() => ({
  width: '300px',
  padding: '20px 10px',
  height: 'calc(100vh - 63.9931px)',
}));

export const MenuIcon = styled(IconButton)(() => ({
  color: '#fff',
  backgroundColor: '#0B2E4E !important',
  marginRight: '-27px',
}));

// Navbar component
export const NavBar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
