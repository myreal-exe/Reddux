
import './Post.css';
import upvoteIcon from '../../media/upvote.png';
import downvoteIcon from '../../media/downvote.png';

function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

export function Post(props){
    const data = props.data.data;
    let imgUrl = null;

    if(data.preview && data.preview.enabled){
        imgUrl = htmlDecode(data.preview.images[0].source.url);
 
    }
    let score;
    if(data.score>999){
        score=String(Math.floor(data.score / 1000)+'k');
    }else{
        score=data.score;
    }
    const author = data.author;
    const title = data.title;
    const isVideo = data.is_video;
    return(
        <div className="Post">
            <div class="votes">
                <img src={upvoteIcon} className="upvote-icon" alt="upvote"/>
                <h4 className="score">{score}</h4>
                <img src={downvoteIcon} className="downvote-icon" alt="downvote"/>

            </div>
            <div className="content">
                <h5 className="author-name">u/{author}</h5>
                <h2 className="title">{data.title}</h2>
                <img src={imgUrl} className="preview-img"/>
            </div>
                
        </div>
    )
}

