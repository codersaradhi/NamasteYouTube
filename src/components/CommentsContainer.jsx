import React from "react";

const commentsData = [
  {
    name: "Chaitanya Naidu",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Chaitanya Naidu",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Chaitanya Naidu",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Chaitanya Naidu",
            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "Chaitanya Naidu",
                    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [
                      {
                        name: "Chaitanya Naidu",
                        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [
                          {
                            name: "Chaitanya Naidu",
                            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            replies: [],
                          },
                          {
                            name: "Chaitanya Naidu",
                            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Chaitanya Naidu",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Chaitanya Naidu",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Chaitanya Naidu",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Chaitanya Naidu",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Chaitanya Naidu",
            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Chaitanya Naidu",
            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "Chaitanya Naidu",
                    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [
                      {
                        name: "Chaitanya Naidu",
                        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [],
                      },
                      {
                        name: "Chaitanya Naidu",
                        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Chaitanya Naidu",
                    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Chaitanya Naidu",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Chaitanya Naidu",
            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Chaitanya Naidu",
            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "Chaitanya Naidu",
                    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                  {
                    name: "Chaitanya Naidu",
                    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                  {
                    name: "Chaitanya Naidu",
                    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Chaitanya Naidu",
                msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, msg, replies } = data;
  return (
    <div className="flex shadow-sm p-2 rounded-md bg-gray-200 my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{msg}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  //Disclamiar: don't use indexes as keys
  return comments.map((comment, index) => {
    return <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies} />
            </div>
    </div>;
  });
  //or else use paranthesis
//   return comments.map((comment, index) => (
//     <div key={index}>
//       <Comment data={comment} />
//       <div className="pl-5 border border-l-black ml-5">
//         <CommentsList comments={comment.replies} />
//       </div>
//     </div>
//   ));
  
};

const CommentsConatiner = () => {
  return (
    <div className="m-5 px-10">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
      {/* <Comment data={commentsData[0]} /> */}
    </div>
  );
};

export default CommentsConatiner;
