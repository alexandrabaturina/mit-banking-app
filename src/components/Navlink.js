import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navlink = ({ hover, page, link }) => {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 100 }}
            overlay={<Tooltip id="bottom-tooltip">{hover}</Tooltip>}>
            <NavLink exact
                to={link}
                className="navbar-brand">
                {page}
            </NavLink>
        </OverlayTrigger>
    )
}

export default Navlink