import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

const Deposit = ({ users, addDeposit }) => {

    return (
        <Container>
            <div className="card text-center border-secondary">
                <div className="card-header border-secondary">
                    <h5 className="card-title">DEPOSIT</h5>
                </div>
                {users.length === 0 ?
                    <div className="no-account">
                        <Link to="/createaccount">Create an account</Link> to deposit money.
                    </div> :
                    <div className="card-body">
                        <div className="balance">
                            BALANCE: ${users[users.length - 1].balance}
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
                                    {!formik.values.deposit ?
                                        <Button type="submit" disabled>Deposit</Button> :
                                        <Button type="submit">Deposit</Button>}
                                </Form>
                            )}
                        </Formik>
                    </div>}
            </div>
        </Container >
    )
}

export default Deposit