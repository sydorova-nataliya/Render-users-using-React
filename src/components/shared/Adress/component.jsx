import './styles.scss'

const Address=({text, className=''})=> (   
        <address  className={`address ${className}`}>
            {text}
        </address>
    )



export default Address;