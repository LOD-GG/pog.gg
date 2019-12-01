import React from 'react';
import LolLayout from '../components/LolLayout';
import CharBox from '../components/Community/CharBox/CharBox';
import PostList from '../components/Community/PostList/PostList';
const Community = () => {
    return (
        <>
            <LolLayout/>
            <CharBox/>
            <PostList/>
        </>
    );
}

export default Community;