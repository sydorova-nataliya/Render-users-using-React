import './styles.scss'

const Phone=({href, text, className=''})=> (   
    <p className='phone-holder'>
        <a
            className={`phone ${className}`}
            href={`tel:${href}`}

            rel="noopener noreferrer"
        >
            <span className='subtitle'>Phone: </span>{text}
        </a>
    </p> 
    )



export default Phone;