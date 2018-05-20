import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos}) => {
    let videoListItems = videos.map((video) => {
        return <VideoListItem key ={video.etag} video={video}/>
    });

    return (
        <div className="row video-list">
            {videoListItems}
        </div>
    );
}

export default VideoList;