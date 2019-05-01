import * as React from 'react';
import Question from './Question';

interface QuestionData {
    challenge: string
    answer: string
}

interface ChallengeState {
    currentQuestion: number
    description: string
    questions: QuestionData[]
}

class Challenge extends React.Component<any, ChallengeState> {
    constructor(props: any) {
        super(props);
        this.alert = this.alert.bind(this);

        this.state = {
            currentQuestion: 0,
            description: 'Change to past positive tense',
            questions: [
                { answer: "かった", challenge: "寒|_" },
                { answer: "きれいじゃない", challenge: "きれいな：|_" },
            ]
        }
    }

    public alert(result: boolean) {
        alert(result)
        let currentQuestion = this.state.currentQuestion + 1;
        if (currentQuestion >= this.state.questions.length) {
            currentQuestion = 0;
        }
        this.setState({ currentQuestion });
    }

    public render() {
        const question = this.state.questions[this.state.currentQuestion];
        return (
            <div className="Challenge">
                <p>{this.state.description}</p>
                <Question answer={question.answer} challenge={question.challenge} report={this.alert} />
            </div>
        )
    }
}

export default Challenge;