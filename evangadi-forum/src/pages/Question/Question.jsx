import { Link } from 'react-router-dom';
import './Question.css';

const Question = () => {
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

        <div className='question_form'>

          <h2>Ask a public Question</h2>
          <Link to="#">Go to question detail & answer page</Link>

          <form>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Question Description..." />
            <button type="submit">Post Your Question</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Question;