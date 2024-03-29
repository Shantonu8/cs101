import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";
const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();


  useEffect(()=> {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    console.log("Works 1st Checkpoint")
    setError(false)
    const  comment = commentEl.current.value
    const email= emailEl.current.value
    const name = nameEl.current.value
    console.log("Works 2 Checkpoint")
    // const storeData = storeDataEl.current.value
    // Debug Comments
    // (storeDataEl.current.value)

    if(!comment || !name || !email){
        // console.log(comment, name, email)
        // console.log(commentEl.current.value )
        setError(true)
        return;
    }
    const commentObj = {
        name, email, comment, slug
    }

    if(storeData){
        window.localStorage.setItem('name', name)
        window.localStorage.setItem('email', email)
    } else {
        window.localStorage.removeItem('name', name)
        window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
        .then((res)=>{
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 3000);
        })

  };

  return (
    <div className="bg-darkmode shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-white techfont">Leave a Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-600 bg-comments text-gray-200"
          placeholder="Comment"
          name="Comment"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2 ">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-600 bg-comments text-gray-200"
          placeholder="Name"
          name="Name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-600 bg-comments text-gray-200"
          placeholder="Email"
          name="Email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
      <div className="grid grid-cols-1 gap-4 mb-4 "> 
      <div className="container">
        <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true"/>
        <label className="text-white cursor-pointer ml-2 techfont " htmlFor="storeData">Save my email and name for the next time</label>
      </div>
      </div>
        {error && (
          <p className="text-xs  techfont text-white">All fields are required</p>
        )}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleCommentSubmission}
            className="transition duration-500 ease hover:bg-indigo-600 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer techfont"
          >
            Post Comment
          </button>
          {showSuccessMessage && <span className="text-lg float-right font-semibold mt-3 text-green-500">Comment Submitted</span>}
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
