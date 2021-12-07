import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'

const Profile = ({ users }) => {

    const { username } = useParams()

    return (
        <Container>
            <div className="card border-secondary text-center all-data-card">
                <div className="card-header border-secondary">
                    <h5 className="card-title">Operations of {username}</h5>
                </div>
                <div className="card-body">
                    <table className="table" verticalalign='middle'>
                        <thead>
                            <tr>
                                <th scope="col">Operation</th>
                                <th scope="col">Sum, $</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users[username].history.map((item, index) => (
                                <tr key={index}>
                                    {Object.keys(item)[0] === 'deposit'
                                        ? <td>Deposit</td>
                                        : <td>Withdraw</td>
                                    }
                                    <td>{Object.values(item)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>BALANCE</th>
                                <th>{users[username].balance}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </Container >
    )
}

export default Profile