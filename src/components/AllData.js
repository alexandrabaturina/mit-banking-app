import { Container } from 'react-bootstrap'

const AllData = ({ users }) => {

    return (
        <Container>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">ALL USER DATA</h5>
                    {users.length === 0 ?
                        <p className="card-text">No current users yet.</p> :
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
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