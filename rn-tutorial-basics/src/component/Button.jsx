import { View, Button } from 'react-native';
import React from 'react';

class MyButton extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    render() {
        const { title } = this.props
        return (
            <Button
                title={title + " " + this.state.count}
                onPress={() => this.setState({ count: this.state.count + 1 })}

            />
        )
    }
}
// const MyButton = ({ title }) => {
//     const [count, setCount] = useState(0);
//     return (
//         <Button
//             title={title + " " + count}
//             onPress={() => setCount(count + 1)}
//         />
//     )
// }

export default MyButton;