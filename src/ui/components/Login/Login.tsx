import * as React from 'react';
import {useRef, memo} from 'react';
import {Alert, Button, IconButton, InputAdornment, TextField} from '@mui/material';
import type {KcProps} from 'keycloakify/lib/components/KcProps';
import {styled} from '@mui/material/styles';
import type {KcContext} from "../KCApp/kcContext";
import {Person, Visibility, VisibilityOff, Lock} from "@mui/icons-material";
import {useTranslation} from 'react-i18next';

type KcContext_Login = Extract<KcContext, { pageId: 'login.ftl' }>;

const StyledLogin = styled('div')(({theme}) => ({
  minWidth: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

const LoginForm = styled('form')(({theme}) => ({
  width: '25rem',
  height: '15rem',
  borderRadius: '5px',
  boxShadow: '2px 2px 8px 0px rgba(0)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

const LoginInput = styled(TextField)(({theme}) => ({
  width: '20rem',
  marginBottom: '15px',
  background: 'rgba(67,74,82,0.8)',
  shrink: {
    transform: 'translate(0, 1.5px) scale(0.8)',
    letterSpacing: 1,
  },
}));

const LoginButton = styled(Button)(({theme}) => ({
  width: '20rem',
}));

interface State {
  password: string;
  showPassword: boolean;
}

export const Login = memo(
    ({kcContext, ...props}: { kcContext: KcContext_Login } & KcProps) => {
      const {t} = useTranslation();
      const form = useRef<HTMLFormElement>(null);
      const {url, message,} = kcContext;

      const handleSubmit = () => {
        form?.current?.submit();
      };

      const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
      });

      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleSubmit();
        }
      }

      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };

      const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
      };

      return (
          <StyledLogin>
            {message &&
                <Alert
                    variant="filled"
                    severity={message.type}
                >
                  {message.summary}
                </Alert>
            }

            <LoginForm
                ref={form}
                method="post"
                action={url.loginAction}
            >
              <LoginInput
                  id="username"
                  name="username"
                  variant="outlined"
                  label={t('id')}
                  color="secondary"
                  autoComplete="off"
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                          <Person/>
                        </InputAdornment>
                    ),
                  }}
              />
              <LoginInput
                  id="password"
                  name="password"
                  variant="outlined"
                  color="secondary"
                  label={t('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  onKeyPress={handleKeyPress}
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                          <Lock/>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                          >
                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                          </IconButton>
                        </InputAdornment>
                    ),
                  }}
              />
              <LoginButton
                  variant="contained"
                  onClick={() => handleSubmit()}
                  color="secondary"
              >
                {t('login')}
              </LoginButton>
            </LoginForm>
          </StyledLogin>
      );
    },
);

export default Login;
