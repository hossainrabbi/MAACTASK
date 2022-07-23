import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Paper,
  Select,
  styled,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import Shape from '../images/faqShape.png';
import BGShape from '../images/bg.svg';

export const CustomButton = styled(Button)((props) => ({
  color: props.textcolor || '#ffffff !important',
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
export const HeroContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '100px',
  h1: {
    fontSize: '40px',
    margin: '0 auto',
    color: '#0B141F',
    [theme.breakpoints.up('md')]: {
      fontSize: '58px',
      width: '800px',
    },
  },
  '& .mobile-laptop': {
    maxWidth: '100%',
  },
}));

// AboutUs area
export const AboutUsContainer = styled(Box)(() => ({
  backgroundImage: `url(${BGShape})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',
}));

export const CounterContainer = styled(Box)(() => ({
  textAlign: 'center',
  marginTop: '70px',
  paddingBottom: '100px',
}));

export const CounterCount = styled(Typography)(() => ({
  fontSize: '40px',
  color: '#0052CC',
  fontWeight: 700,
  padding: '10px 0',
}));

// ProductionFeatures Section
export const ProductionFeaturesContainer = styled(Box)(({ theme }) => ({
  marginBottom: '50px',
  textAlign: 'center',
  paddingLeft: '15px',
  paddingRight: '15px',

  '&.text-right': {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  '&.text-left': {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

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

export const FeaturesImageGrid = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

// Title Component
export const TitleBox = styled(Box)((props) => ({
  h5: {
    fontSize: '20px',
    marginBottom: 0,
    fontWeight: '400',
    color: props.titlecolor || '#0052CC',
  },
  h2: {
    fontSize: '35px',
    fontWeight: '700',
    marginTop: '5px',
    color: props.descriptioncolor || '#0B141F',
    [props.theme.breakpoints.up('md')]: {
      fontSize: props.descriptionsize,
    },
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

// Region List Page
export const RegionContainer = styled(Box)(() => ({
  h3: {
    margin: 0,
  },
  p: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
  },
}));

export const RegionInputField = styled(Paper)(() => ({
  padding: '25px',
  display: 'inline-block',
  width: '500px',
  marginTop: '50px',
  small: {
    color: '#495057',
    marginBottom: '10px',
    display: 'inline-block',
  },
  '& .input-button': {
    marginTop: '50px',
    textAlign: 'right',
  },
}));

// Region & Area Table
export const SmallTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
  },
  '& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '10.5px 14px',
  },
}));

export const SmallFormControl = styled(FormControl)(() => ({
  borderRadius: '50px',
  minWidth: '255.176px',
  marginLeft: '20px',
  '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '10.5px 14px',
  },
}));

// FAQ Component
export const FaqContainer = styled(Box)(() => ({
  backgroundColor: '#0052CC',
  backgroundImage: `url(${Shape})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',
  padding: '70px 0',
}));

// Client Component
export const ClientTitle = styled(Typography)(() => ({
  textAlign: 'center',
  color: '#0052CC',
  fontSize: '32px',
  fontWeight: 500,
  marginBottom: '50px',
}));

// Footer Component
export const FooterContainer = styled(Box)(() => ({
  backgroundColor: '#00193D',
  padding: '50px 0px',
  color: '#ffffff',
  '& .footer-icon': {
    margin: '0 15px',
  },
}));

export const FooterCopyRight = styled(Box)(() => ({
  textAlign: 'center',
  paddingTop: '50px',
  paddingBottom: '30px',
  fontSize: '18px',
  borderTop: '1px solid #0D3166',
  span: {
    color: '#F60E0E',
    marginLeft: '5px',
  },
}));
