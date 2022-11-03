import './styles.scss'

const Email=({href, text, className=''})=> (    
        <a
            className={`email ${className}`}
            href={`mailto:${href}`}
            rel="noopener noreferrer"
        >
            Email: {text}
        </a>
    )



export default Email;