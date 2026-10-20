import { Link } from 'react-router-dom';
import './Question.css';
import { useState, useEffect } from 'react';
import axios from '../../axiosConfig'

const Question = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.post(
        "http://localhost:5500/api/questions",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setMessage(data.message)
      setMessageType("success")

      setTitle("");
      setDescription("");
    } catch (error) {
      setMessage(error.response.data.message);
      setMessageType("error");
      console.error(error.response);
    }
  }

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <section className="question_page">
      <div className="inner_wrapper">
        <div className="question_guide">
          <h2>Steps to write a good question</h2>

          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>

        <div className="question_form">
          <h2>Ask a public Question</h2>
          <Link to="#">Go to question detail & answer page</Link>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Question Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Post Your Question</button>
          </form>

          {message && (
            <p className={`form_message ${messageType}`}>{message}
            </p>)}
        </div>
      </div>
    </section>
  );
};

export default Question;