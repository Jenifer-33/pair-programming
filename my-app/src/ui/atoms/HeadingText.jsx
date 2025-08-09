export const HeadingText=({text, color="#000c0aff"})=>{
    return(
        <div style={{
            color:color,
            fontFamily:"serif",
            fontWeight:"bold",
           
        }}>
        <h1>{text}</h1>
        </div>
    )
}