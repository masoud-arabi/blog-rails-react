import React from 'react';
import {Route} from 'react-router-dom';
import PostContainer from '../PostContainer';
import PostShow from '../PostShow';



function PostRoutes (){
    return(
        <>
            <Route exact path="/" component={PostContainer}/>
             
            <Route path="/posts/:id" component={PostShow}/>
                
        </>
    );
}

export default PostRoutes;