//Learning Styling in React
//import styles from './Button.module.css'

function Button(){

    const style ={
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer', 
    }

    return(
        <>
        {/* <button className={styles.button}>Click Me</button> */}
        <button className='flex justify-items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>Update</button>
        <button style={style}>click me</button>
        </>
    )
}

export default Button