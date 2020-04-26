import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import "./assets/style.css";
import './index.css';
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";




class IslamicQuiz extends Component {
    state ={
        questionBank: [],
        score: 0,
        responses: 0
    };
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
        });
     });
    };
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
           this.setState({
               score: this.state.score + 1
           });
        }
        this.setState({
            responses: this.state.responses < 34 ? this.state.responses + 1 : 34
        });
    };
    playAgain = () => {
        this.getQuestions();
        this.setState({
            score:0,
            responses: 0
        });
    }
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        return (
        <div className="container">
            <div className="title">Islamski kviz</div>
             
            {this.state.questionBank.length > 0 &&
            this.state.responses <34 &&
            this.state.questionBank.map(
            ({question, answers, correct, questionId})=> (
                <QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computeAnswer(answer, correct)}/>
                
            )   
            
            )}
            
            {this.state.responses === 34 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
            <div className="footer">
            <div class="test">© Fahir Latovic | Sva autorska prava zadržana.</div>
            </div>
        </div>
          
        );
        
    }
}

ReactDOM.render(<IslamicQuiz />, document.getElementById('root'));
