import * as React from 'react';
import { bind } from 'wanakana';
import './Input.css';

interface InputProps {
    length: number;
    finishAnswer: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<InputProps, any> {
    private wanakanaRef: React.RefObject<HTMLInputElement>

    constructor(props: InputProps) {
        super(props)
        this.wanakanaRef = React.createRef()
    }

    public componentDidMount() {
        bind(this.wanakanaRef.current)
    }

    public render() {
        const { length } = this.props
        return (
            <input ref={this.wanakanaRef} onKeyUp={this.props.finishAnswer} maxLength={length * 2} size={length * 2.5} />
        )
    }
}

export default Input