import * as React from 'react';
import Input from './Input';
import './Question.css';

interface QuestionProps {
    answer: string
    challenge: string
    report: (result: boolean) => void
}

class Question extends React.Component<QuestionProps, any> {
    constructor(props: QuestionProps) {
        super(props)
        this.finishAnswer = this.finishAnswer.bind(this);
    }

    public render() {
        const parts = this.props.challenge.split('|')
            .map(part => part === '_' ?
                <Input finishAnswer={this.finishAnswer} length={this.props.answer.length} /> :
                <span>{part}</span>);
        return (
            <p className="Question">
                {parts}
            </p>
        );
    }

    private finishAnswer(e: React.KeyboardEvent<HTMLInputElement>) {
        const code = e.keyCode;
        if (code === 13) {
            this.props.report(e.currentTarget.value === this.props.answer)
        }
    }
}

export default Question;
