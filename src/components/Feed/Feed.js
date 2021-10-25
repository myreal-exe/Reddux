import { useState ,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectFeedData,loadData } from '../../features/feedData/feedDataSlice';

import './Feed.css';



export function Feed(){

    const url = "https://www.reddit.com/r/memes.json";
    const dispatch = useDispatch();
    const feedData = useSelector(selectFeedData);


    useEffect( () => {
        console.log("sdf");
        dispatch(loadData(url));
    },[dispatch])

    return(
        <div className="Feed">
            
        </div>
    )
}

