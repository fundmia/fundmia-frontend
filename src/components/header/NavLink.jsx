import {getHref} from '../../utils/navLinkItems'
import {Link} from 'react-router-dom'


const NavLink = ({title, active} ) => {
  return (
    <Link  to={getHref(`/${title}`)} className={`nav-link ${active ? 'active' : ''}`}>{title}</Link>
  )
}

export default NavLink