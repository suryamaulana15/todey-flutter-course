import React from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxThunk from 'redux-thunk';
import reducers from "store/reducers";
import { GlobalStyles } from '@mui/system';
import theme from "./theme";
import {Box, IconButton, TextField, Typography} from "@mui/joy";
import {CssVarsProvider, useColorScheme} from "@mui/joy/styles";
import Layout from 'components/Layout';
import Navigation from 'components/Navigation';
import Mails from 'components/Mails';
import EmailContent from 'components/EmailContent';
import Menu from "components/Menu";

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import BookRoundedIcon from '@mui/icons-material/BookRounded';

const ColorSchemeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="primary"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
};

const Root = ({children, initialState = {}}) => {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(reduxThunk)));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <GlobalStyles
            styles={(theme) => ({
            body: {
              margin: 0,
              fontFamily: theme.vars.fontFamily.body,
            },
          })}
        />
        {drawerOpen && (
          <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
            <Navigation />
          </Layout.SideDrawer>
        )}
        <Layout.Root
          sx={{
            ...(drawerOpen && {
              height: '100vh',
              overflow: 'hidden',
            }),
          }}
        >
          <Layout.Header>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <IconButton
                variant="outlined"
                size="sm"
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                size="sm"
                variant="solid"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                <MailRoundedIcon />
              </IconButton>
              <Typography component="h1" fontWeight="xl">
                Email
              </Typography>
            </Box>
            <TextField
              size="sm"
              placeholder="Search anything…"
              startDecorator={<SearchRoundedIcon color="primary" />}
              endDecorator={
                <IconButton variant="outlined" size="sm" color="neutral">
                  <Typography fontWeight="lg" fontSize="sm" textColor="text.tertiary">
                    /
                  </Typography>
                </IconButton>
              }
              sx={{
                flexBasis: '500px',
                display: {
                  xs: 'none',
                  sm: 'flex',
                },
              }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
              <IconButton
                size="sm"
                variant="outlined"
                color="primary"
                sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
              >
                <SearchRoundedIcon />
              </IconButton>
              <IconButton
                size="sm"
                variant="outlined"
                color="primary"
                component="a"
                href="/blog/first-look-at-joy/"
              >
                <BookRoundedIcon />
              </IconButton>
              <Menu
                id="app-selector"
                control={
                  <IconButton
                    size="sm"
                    variant="outlined"
                    color="primary"
                    aria-label="Apps"
                  >
                    <GridViewRoundedIcon />
                  </IconButton>
                }
                menus={[
                  {
                    label: 'Email',
                    active: true,
                    href: '/joy-ui/getting-started/templates/email/',
                    'aria-current': 'page',
                  },
                  {
                    label: 'Team',
                    href: '/joy-ui/getting-started/templates/team/',
                  },
                  {
                    label: 'Files',
                    href: '/joy-ui/getting-started/templates/files/',
                  },
                ]}
              />
              <ColorSchemeToggle />
            </Box>
          </Layout.Header>
          <Layout.SideNav>
            <Navigation />
          </Layout.SideNav>
          <Layout.SidePane>
            <Box
              sx={{
                p: 2,
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                textColor="neutral.500"
                fontWeight={700}
                sx={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '.1rem',
                }}
              >
                Unread
              </Typography>
              <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ '--IconButton-size': '24px' }}
              >
                <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
            <Box sx={{ py: 10 }}>
              <Typography
                textColor="text.tertiary"
                level="body2"
                sx={{ textAlign: 'center' }}
              >
                You&apos;ve read all messages in your inbox.
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                textColor="neutral.500"
                fontWeight={700}
                sx={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '.1rem',
                }}
              >
                Everything else
              </Typography>
              <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ '--IconButton-size': '24px' }}
              >
                <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
            <Mails />
          </Layout.SidePane>
          <Layout.Main>
            <EmailContent />
          </Layout.Main>
        </Layout.Root>

      </CssVarsProvider>

    </Provider>
  )
}

export default Root;
