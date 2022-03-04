
export default function  Counter({count, setCount}) {
    return (
        <div className = "box">
            <h1>The Counter is : {count}</h1>
            <button onClick = { () => { setCount(++count)}}>Increment</button>
            <button onClick = { () => { setCount(--count)}}>Decrement</button>
            <button onClick = { () => { setCount((pre) => (2 * pre))}}>Double</button>
        </div>
    )
}