import { useContext } from 'react'
import { UserContext } from './UserContext'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllData = () => {

    const users = useContext(UserContext)[0].users

    return (

        <Container>
            <div className="card border-secondary text-center all-data-card">
                <div className="card-header border-secondary">
                    <h5 className="card-title">ALL USER DATA</h5>
                </div>
                <div className="card-body">
                    {Object.keys(users).length === 0
                        ? <p className="card-text">No users yet.</p>
                        : <table className="table" verticalalign='middle'>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(users).map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link to={`/users/${users[user].name}`}>
                                                {users[user].name}
                                            </Link>
                                        </td>
                                        <td>{users[user].email}</td>
                                        <td>{users[user].password}</td>
                                        <td>{users[user].balance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>}
                </div>
            </div>
        </Container>
    )
}

export default AllData