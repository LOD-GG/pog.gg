import React from 'react';
import AppLayout from '../Component/AppLayout/AppLayout';
import CharBox from '../Component/Community/CharBox/CharBox';
import PostList from '../Component/Community/PostList/PostList';
const Community = ({location}) => {
    return (
        <>
            <AppLayout/>
            <CharBox/>
            <PostList location={location}/>
        </>
    );
}

export default Community;