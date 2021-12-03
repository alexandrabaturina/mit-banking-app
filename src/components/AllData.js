import { Container } from 'react-bootstrap'

const AllData = ({ users }) => {

    return (
        <Container>
            <div className="card border-secondary text-center all-data-card">
                <div className="card-header border-secondary">
                    <h5 className="card-title">ALL USER DATA</h5>
                </div>
                <div className="card-body">
                    {users.length === 0 ?
                        <p className="card-text">No current users yet.</p> :
                        <table className="table" verticalalign='middle'>
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
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.balance}</td>
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