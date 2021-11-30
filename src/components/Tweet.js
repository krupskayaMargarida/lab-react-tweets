import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

function Tweet(tweetObj) {
  return (
    <div className="tweet">
      <ProfileImage image={tweetObj.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={tweetObj.tweet.user} />
          <Timestamp timestamp={tweetObj.tweet.timestamp} />
        </div>

        <Message message={tweetObj.tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
