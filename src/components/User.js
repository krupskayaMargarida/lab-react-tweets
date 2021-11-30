function User(tweetObj) {
  return (
    <span className="user">
      <span className="name">{tweetObj.userData.name}</span>

      <span className="handle">{tweetObj.userData.handle}</span>
    </span>
  );
}

export default User;
