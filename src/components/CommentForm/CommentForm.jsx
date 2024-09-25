import React, { useState, useEffect } from "react";

const CommentForm = ({ blogid }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments([]);
  }, [blogid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, email, comment };
    setComments([...comments, newComment]);
    setName("");
    setEmail("");
    setComment("");
    alert("コメントの送信が完了しました");
  };

  return (
    <>
      <div className="single-blog-list" data-aos="fade-up">
        <h4 className="single-blog-title">コメント数 ({comments.length})</h4>
        {comments.length === 0 ? (
          <p className="single-blog-desp">まだコメントをカウントしていません！</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index}>
              <p>お名前: {comment.name}</p>
              <p>コメント: {comment.comment}</p>
              <hr />
            </div>
          ))
        )}
      </div>
      <div className="ak-height-30 ak-height-lg-30"></div>
      <div className="post-from" data-aos="fade-up">
        <div className="comment-form-title-container">
          <h2 className="contact-form-title ak-white-color text-uppercase">
            コメントを投稿する
          </h2>
        </div>
        <div className="ak-height-25 ak-height-lg-20"></div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="from-inputs">
              <input
                placeholder="お名前"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                placeholder="メールアドレス"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="from-textarea">
              <textarea
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows="5"
                placeholder="コメント"
              ></textarea>
            </div>
            <div className="ak-height-40 ak-height-lg-20"></div>
            <button type="submit" className="common-btn">
              コメントを投稿
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
