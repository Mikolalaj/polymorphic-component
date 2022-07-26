import { Text } from './Polimorphic'

export default function App() {
    return (
        <div className='App'>
            <Text>This is a default span</Text>
            <Text as='h1' color='red'>
                This is a red h1
            </Text>
            <Text as='h3' color='blue'>
                This is a blue h3
            </Text>
            <Text as='button' color='green'>
                This is a green button
            </Text>
            <Text as='img'>This is a div</Text>
        </div>
    )
}
