
import './Post.css';



export function Post(props){
    const data = props.data.data;
    return(
        <div className="Post">
            <h1>{data.id}</h1>
        </div>
    )
}

