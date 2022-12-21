import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

import './HomeBtn.scss'

const HomeBtn = () => {
    return (
        <Link className='home-btn' to="/dashboard"><Icon className='home-btn-icon' icon="material-symbols:home-rounded" inline={true} /></Link>
    )
}

export default HomeBtn