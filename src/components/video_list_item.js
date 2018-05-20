import React from 'react'

const VideoListItem = ({video}) => {

    const imageURL = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <div className="col-md-3 col-sm-6">
            <div className="card video-item">
                <img className="card-img-top" src={imageURL}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    );
}

export default VideoListItem;