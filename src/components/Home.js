import { Container } from 'react-bootstrap'

const Home = () => {

    return (
        <Container>
            <div className="card border-secondary text-center">
                <div className="card-header border-secondary">
                    <h5 className="card-title">WELCOME TO BAD BANK APP</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">Bad Bank App is here to meet all your banking needs!</p>
                    <img src='bank.png' className='img-fluid' alt='Bad Bank' />
                </div>
            </div>
        </Container>
    )
}
export default Home