import React from 'react';
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'


const VideoList = ({ videos, videoSelect }) => {

    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} videoSelect={videoSelect} />)

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;