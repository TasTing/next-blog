import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {getStrapiMedia} from '../lib/media'

const useStyles = makeStyles({
    root: {

    },
    media: {
        height: 140,
    },
});

export default function MediaCard({card}) {
    const classes = useStyles();
    const image = card.image ? getStrapiMedia(card.image) : ''

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
                title={card.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {card.description}
                </Typography>
            </CardContent>

        </Card>
    );
}
