import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, videoSelect }) => {

    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => videoSelect(video)}>
                <img style={{ marginRight: "20px", }} alt="thumbnails" src={video.snippet.thumbnails.default.url}></img>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;