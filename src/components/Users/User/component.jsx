import Address from '../../shared/Adress/component';
import Email from '../../shared/Email/component';
import Link from '../../shared/Link';
import Phone from '../../shared/Phone/component';

import './styles.scss';


const User=({ name, username, email, address:{street,suite, city, zipcode,geo:{lat, lng}},phone,website,company:{name:companyName}})=>(
    <div className='User'>
        <h2 className='User__name'>{name}</h2>
        <h3 className='User__username'>{username}</h3>
        <Email 
             href={email} 
             text={email}
        />
        <Address 
        text={`${street}, ${suite}, ${city}, ${zipcode}, ${lat}, ${lng} `}
        />
        <Phone 
             href={phone} 
             text={phone}
        />
        <Link 
            href={website} 
            text= {website}
            className='User__website'
            isTargerBlank
        />
        <p className='User__company'><span className='subtitle'>Companny: </span>{companyName}</p>
    </div>
)
export default User;