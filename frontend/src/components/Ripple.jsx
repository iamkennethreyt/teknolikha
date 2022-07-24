import { Link, useNavigate, useLocation } from 'react-router-dom';

const Ripple = () => {
  const location = useLocation();
  return (
    <div class='list-group m-2'>
      <Link
        to='/'
        className={`list-group-item list-group-item-action ${
          location.pathname === '/' && 'active'
        }`}
      >
        Dashboard
      </Link>
      <Link
        to='/accounts'
        className={`list-group-item list-group-item-action ${
          location.pathname === '/accounts' && 'active'
        }`}
      >
        Accounts
      </Link>
      <Link
        to='/transactions'
        className={`list-group-item list-group-item-action ${
          location.pathname === '/transactions' && 'active'
        }`}
      >
        Transactions
      </Link>
      <Link
        to='/inventory'
        className={`list-group-item list-group-item-action ${
          location.pathname === '/inventory' && 'active'
        }`}
      >
        Inventory
      </Link>
    </div>
  );
};

export default Ripple;
