import './styles.scss'

const Link=({href, text, className='', isTargerBlank = false})=> (    
        <a
            className={`link ${className}`}
            href={href}
            target={isTargerBlank ? "_blank":''}
            rel="noopener noreferrer"
        >
            {text}
        </a>
    )



export default Link;