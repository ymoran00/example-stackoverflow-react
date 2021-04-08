import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useState} from "react";
import classes from './index.module.scss';
import {
    Button,
    Container,
    FormGroup, Grid, IconButton,
    Input,
    Paper, TextField, Typography,
} from "@material-ui/core";
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from "clsx";
import {AccountCircle, LockRounded, Refresh, Warning} from "@material-ui/icons";
// @ts-ignore
import qs from 'qs';


const useStyles = makeStyles((theme: any) => ({
    margin: {
        margin: theme.spacing(1)
    },
    logo: {
        margin: '0 auto',
        '&:before': { // IE11 doesn't handle well content property on an element, only on "before"/"after"
            content: theme.logo
        }
    }
}));

type Props = {
    onLogin: (redirect: string) => void
}

const LoginContainer: React.FunctionComponent<Props> = ({onLogin}) => {

    const [captchaImg, setCaptchaImg] = useState<string | null>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captchaText, setCaptchaText] = useState('');
    const [error, setError] = useState('');

    const styles = useStyles();


    return (
        <Container fixed maxWidth={"xs"}
            classes={{root: classes.root}} component={Paper}>
                <form className={classes.form}>
                    <div role="img" aria-label="MASS Logo" className={styles.logo}/>
                    <Typography variant={'h4'}>{'Sign In'}</Typography>
                    <Grid container spacing={1} alignItems="flex-end" className={styles.margin}>
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField required label="User Name"
                                       onChange={(e)=> {setUsername(e.currentTarget.value)}}
                             />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end" className={styles.margin}>
                        <Grid item>
                            <LockRounded />
                        </Grid>
                        <Grid item>
                            <TextField required label="Password" type='password'
                                       onChange={(e)=> {setPassword(e.currentTarget.value)}}
                            />
                        </Grid>
                    </Grid>
                    {captchaImg &&
                        <FormGroup className={clsx(styles.margin, classes.captchaContainer)} row>
                            <div dangerouslySetInnerHTML={{ __html: captchaImg}}/>
                            <IconButton aria-label={"refresh captcha"} component={"span"}>
                                <Refresh color={"secondary"}/></IconButton>
                            <Input
                                classes={{root: classes.captchaRoot}}
                                placeholder={"Enter the letters as seen in the CAPTCHA."}
                                required
                                onChange={(e)=> {setCaptchaText(e.currentTarget.value)}}
                            />
                        </FormGroup>
                    }
                    <Button className={styles.margin} variant={"contained"} color={"primary"} type={"submit"}>
                        Login
                    </Button>
                    {error !== '' &&
                    <div className={classes.error}>
                        <Warning color={"error"}/>
                        <Typography variant={"subtitle1"} color={"error"}>{error}</Typography>
                    </div>
                    }
                </form>
        </Container>
    );
}

LoginContainer.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default LoginContainer;