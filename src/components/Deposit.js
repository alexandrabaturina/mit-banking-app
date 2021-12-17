import { UserContext } from './UserContext'
import { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

const Deposit = () => {

    const [ctx, setCtx] = useContext(UserContext)

    const { users, currentUser } = ctx

    const addDeposit = sum => {
        setCtx({
            ...ctx,
            users: {
                ...ctx.users,
                [currentUser]: {
                    ...ctx.users[currentUser],
                    balance: ctx.users[currentUser].balance += sum,
                    history: ctx.users[currentUser].history.concat([{ 'deposit': sum }])
                }
            },
            currentUser: currentUser
        })
    }

    return (
        <Container className="center">
            <div className="card text-center border-secondary">
                <div className="card-header border-secondary">
                    <h5 className="card-title">DEPOSIT</h5>
                </div>
                {Object.keys(users).length === 0
                    ? <div className="no-account">
                        <Link to="/createaccount">Create an account</Link> to deposit money.
                    </div>
                    : <div className="card-body">
                        <div className="balance">
                            BALANCE ${users[currentUser].balance}
                        </div>

                        <Formik
                            initialValues={{
                                deposit: ''
                            }}
                            validateOnChange={false}
                            validateOnBlur={false}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                addDeposit(parseFloat(values.deposit))
                                setSubmitting(false)
                                resetForm()
                                setTimeout(function () { alert('Deposit successefully added!') }, 400)
                            }}>
                            {formik => (
                                <Form>
                                    <label className="field" htmlFor="deposit">Deposit Amount</label>
                                    <Field
                                        id="deposit"
                                        name="deposit"
                                        type="number"
                                        min="1"
                                        onChange={formik.handleChange}
                                        value={formik.values.deposit}
                                        autoComplete="current-deposit" />
                                    <div className="btn-wrapper">
                                        {!formik.values.deposit
                                            ? <Button variant="outline-dark" type="submit" disabled>Deposit</Button>
                                            : <Button variant="outline-dark" type="submit">Deposit</Button>}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>}
            </div>
        </Container >
    )
}

export default Deposit