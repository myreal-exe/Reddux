import { useState ,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectFeedData,loadData } from '../../features/feedData/feedDataSlice';
import {selectSearchTerm} from '../../features/searchTerm/searchTermSlice';
import {selectFilter} from '../../features/filter/filterSlice';
import { Post } from '../Post/Post';

import './Feed.css';



export function Feed(){
    
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const filter = useSelector(selectFilter);
    const feedData = useSelector(selectFeedData);
    const isLoading = useSelector((state) => state.feedData.isLoading);
    const hasError = useSelector((state) => state.feedData.hasError);

    let url;
    if(searchTerm.length){
        url = `https://www.reddit.com/r/${searchTerm}/${filter}.json`;
        console.log(url)

    } else {
        url = `https://www.reddit.com/${filter}.json`;
        console.log(url)

    }
    


    useEffect( () => {
        
        dispatch(loadData(url));
    },[dispatch,url])

    if(isLoading){
        return <h1 style={{textAlign:"center",marginTop:"250px"}}>LOADING...</h1>
    }
    if(hasError){
        return <h1 style={{textAlign:"center",marginTop:"250px"}}>No Subreddit wit dat name bruh :/</h1>
    }
    try{
        return(
            <div className="Feed">
                {
                    feedData.data.children.map( (post) => {
                        return <Post data={post} key={post.data.id}/>
                    })
                }
            </div>
        )
    } catch (err) {
        return <div></div>
    }
}

