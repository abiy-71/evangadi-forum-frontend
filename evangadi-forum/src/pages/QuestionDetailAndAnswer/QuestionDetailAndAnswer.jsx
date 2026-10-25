import { Link, useParams } from 'react-router-dom';
import './QuestionDetailAndAnswer.css';
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import axios from '../../axiosConfig';

const QuestionDetailAndAnswer = () => {
    const [answer, setAnswer] = useState("");
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState([]);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [loading, setLoading] = useState(true);
    const { question_id } = useParams();
    const token = localStorage.getItem('token');

    const getSingleQuestion = async () => {
      setLoading(true);

        try {
            const { data } = await axios.get(
              `/questions/${question_id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );
            setQuestion(data.question)
        } catch (error) {
            console.log(error.response);
        } finally {
          setLoading(false);
        }
    }

    const getAnswers = async () => {
        try {
            const { data } = await axios.get(`/answers/${question_id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            
            setAnswers(data.answers)
        } catch (error) {
            console.error(error.response);
        }
    }

    useEffect(() => {
        getSingleQuestion();
        getAnswers();
    }, [question_id])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/answers', {
                answer,
                question_id
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );
            setMessage(data.message);
            setMessageType("success");

            await getAnswers();

            setAnswer("");
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
    <section className="outer_wrapper">
      <div className="inner_wrapper">
        <div className="question_detail">
          <h2>Question</h2>
          <p id="q_title">{question.title}</p>
          <p id="q_description">{question.description}</p>
        </div>
        <h1>Answer From The Community</h1>
        {loading ? (
          <div className="loading_container">
            <div className="loading_spinner"></div>
            <p>Loading answers...</p>
          </div>
        ) : answers.length > 0 ? (
          <div className="answer_list">
            {answers.map((answer) => (
              <article className="answer_item" key={answer.answer_id}>
                <div className="answer_main">
                  <div className="answer_author">
                    <FaUserCircle className="answer_avatar" />
                    <p className="username">{answer.user_name}</p>
                  </div>

                  <div className="answer_content">
                    <p className="title">{answer.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="no_answers">No answers yet. Be the first to answer!</p>
        )}

        <div className="answer_form">
          <h2>Answer The Top Question</h2>
          <Link to="/question">Go to Question page</Link>

          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              placeholder="Your Answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button type="submit">Post Your Answer</button>
          </form>

          {message && (
            <p className={`form_message ${messageType}`}>{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuestionDetailAndAnswer;