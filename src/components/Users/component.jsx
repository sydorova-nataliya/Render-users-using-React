import data from './mockData';

import User from './User/component';

import './styles.scss';
const Users=()=>{
    return (
      <>
        <h1 className='Users__title'>Users</h1>
        <section className='Users'>
          {data.map((user)=> <User key={user.id}{...user}/>)}

      </section>
      </>
    )
}
export default Users;