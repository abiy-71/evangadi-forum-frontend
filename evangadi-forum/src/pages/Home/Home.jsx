import { useContext, useEffect, useState } from "react";
import { FaUserCircle, FaChevronRight } from "react-icons/fa";
import { AppState } from "../../App";
import axios from '../../axiosConfig';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const [questions, setQuestions] = useState([]);
  const { user } = useContext(AppState);


  const getQuestions = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get("/questions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuestions(data.questions);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <section className="outer_wrapper">
      <div className="questions_wrapper">
        <div className="question_top">
          <Link to="/question" className="ask_question_btn">
            Ask Question
          </Link>
          <h2>
            Welcome: <span>{user?.username}</span>
          </h2>
        </div>
        <h2 className="questions_heading">Questions</h2>
        <div className="questions_list">
          {questions.map((question) => (
            <Link
              to={`/question/${question.question_id}`}
              className="question_item"
              key={question.question_id}
            >
              <div className="question_main">
                <div className="question_author">
                  <FaUserCircle className="question_avatar" />
                  <p className="username">{question.user_name}</p>
                </div>
                <div className="question_content">
                  <p className="title">{question.title}</p>
                </div>
              </div>
              <div className="question_arrow">
                <FaChevronRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
