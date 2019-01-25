import React, { Component } from 'react';
import propTypes from 'prop-Types';
import {GridList,GridTile} from '@material-ui/core/GridList';
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button'; 

class ImageResults extends Component {
    render() {
        let imageListContent;
        // const{images}=this.props;

        if(this.props.images){
            imageListContent=(
                <GridList cols={3}>
                    {this.props.images.map(img=>(
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                        <span>
                            by <strong>{img.user}</strong>
                        </span>
                }
                actionIcon={
                    <Button>
                        <ZoomIn color="white"/>
                    </Button>
                }
                >
                <img src={img.largeImageURL} alt=""/>
            </GridTile>
        ))}
    </GridList>
)
        }else{
            imageListContent=null;
        }
        return (
            <div>
                {imageListContent}
            </div>
        );
    }
}

ImageResults.propTypes={
    images:propTypes.array.isRequired
}

export default ImageResults;