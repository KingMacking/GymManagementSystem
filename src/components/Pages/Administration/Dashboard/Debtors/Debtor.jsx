import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'

import './Debtor.scss'

const Debtors = ({debtor}) => {
    return (
        <Link className='debtor' to={`/clients/${debtor.dni}`}>
            <h2 className='debtor-title'>{debtor.name}</h2>
            <p className='debtor-info'>Adeuda un pago desde el {DateTime.fromISO(debtor.nextPaymentDate).toLocaleString()}</p>
        </Link>
    )
}

export default Debtors