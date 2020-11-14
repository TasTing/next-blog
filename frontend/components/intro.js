import React from "react";
import {getStrapiMedia} from "../lib/media";
import Avatar from "@material-ui/core/Avatar";
import ReactMarkdown from "react-markdown";
import {Grid, Toolbar, Button, ButtonGroup} from "@material-ui/core";
import {Facebook, Linkedin} from "@trejgun/material-ui-icons-social-networks";
import MediaCard from "./mediacard";

const avatarStyle = {
    width: 200,
    height: 200,
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
};

// const useStyles = makeStyles((theme) => ({
//         icon: {
//             marginRight: theme.spacing(1)
//         }
//     }),
//     {name: "Demo"}
// );

const Intro = ({intro}) => {
    const image = getStrapiMedia(intro.image);
    // const classes = useStyles()
    return (
        <>
            <Grid container>
                <Grid item md={4} xs={12}>
                    <Avatar alt="Ting" src={image} style={avatarStyle}/>
                    <Toolbar/>
                </Grid>
                <Grid item md={8} xs={12}>
                    <h2>A little about me</h2>
                    <ReactMarkdown source={intro.intro} escapeHtml={false}/>
                    <Toolbar>
                        <ButtonGroup variant={"outlined"}>
                            {
                                intro.social ? intro.social.map(
                                    platform => (
                                        platform.title === "facebook" ?
                                            <Button variant={"outlined"}
                                                    key={platform.id}
                                                    href={platform.link}><Facebook/></Button>
                                            : platform.title === "linkedin" ?
                                            <Button variant={"outlined"}
                                                    key={platform.id}
                                                    href={platform.link}><Linkedin/></Button>
                                            : null
                                    )
                                ) : null
                            }
                        </ButtonGroup>
                        {/*Currently only support this two. will add in future*/}
                    </Toolbar>
                </Grid>
                <Toolbar/>
            </Grid>
            <Grid container>
                {intro.features.map(
                    card => (
                        <Grid item md={4} xs={12} key={card.id}>
                            <MediaCard card={card}/>
                        </Grid>
                    )
                )}
            </Grid>
        </>
    );
};

export default Intro;
