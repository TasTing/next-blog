import React, {useState} from 'react'
import axios from 'axios'
import {Box, Toolbar, Typography, InputLabel, FormControl, Input, Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    wrapper: {
        marginTop: 50,
    },
});

export default function ContactForm() {
    const classes = useStyles()
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: {error: false, msg: null},
    })
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: {error: false, msg: msg},
            })
            setInputs({
                email: '',
                message: '',
            })
        } else {
            setStatus({
                info: {error: true, msg: msg},
            })
        }
    }
    const handleOnChange = (e) => {
        e.persist()
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: {error: false, msg: null},
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setStatus((prevStatus) => ({...prevStatus, submitting: true}))
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/mleollql',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.'
                )
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error)
            })
    }
    const handleOnReset = (e) => {

    }

    return (
        <Box className={classes.wrapper}>
            <Typography variant={"h4"}>Contact Me</Typography>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <TextField
                        id="email"
                        type="email"
                        name="_replyto"
                        label={"Email"}
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                        variant={"outlined"}
                        margin={"dense"}
                        fullWidth
                        helperText="Your email address is safe."
                    >
                    </TextField>
                </div>
                <div>
                    <TextField
                        id="message"
                        name="message"
                        fullWidth
                        label={"Message"}
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                        multiline
                        rows={10}
                        variant={"outlined"}
                        margin={"dense"}
                        helperText="Your message is important to me."
                    />
                </div>
                <Toolbar>
                    <Button type="submit" disabled={status.submitting}>
                        {!status.submitting
                            ? !status.submitted
                                ? 'Submit'
                                : 'Submitted'
                            : 'Submitting...'}
                    </Button>
                    <Button onClick={handleOnReset}>

                    </Button>
                </Toolbar>
            </form>
            <Toolbar>

            </Toolbar>
            {status.info.error && (
                <Typography className="error" variant={'subtitle1'}>Error: {status.info.msg}</Typography>
            )}
            {!status.info.error && status.info.msg && <Typography variant={'subtitle1'}>{status.info.msg}</Typography>}
        </Box>
    )
}