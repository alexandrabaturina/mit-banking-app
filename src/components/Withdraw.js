import { Container, Button } from 'react-bootstrap'
import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

const Withdraw = ({ users, currentUser, withdraw }) => {

    const [balance, setBalance] = useState(users[currentUser].balance)

    const validationSchema = Yup.object({
        withdraw: Yup.number()
            .max(Object.keys(users).length === 0 ?
                0 :
                balance, 'Overdraft. Please deposit money first.')
    })

    return (
        <Container>
            <div className="card text-center border-secondary">
                <div className="card-header border-secondary">
                    <h5 className="card-title">WITHDRAW</h5>
                </div>
                {Object.keys(users).length === 0 ?
                    <div className="no-account">
                        <Link to="createaccount">Create an account</Link> to withdraw money.
                    </div> :
                    <div className="card-body">
                        <div className="balance">
                            BALANCE: ${users[currentUser].balance}
                        </div>

                        <Formik
                            initialValues={{
                                withdraw: ''
                            }}
                            validationSchema={validationSchema}
                            validateOnChange={false}
                            validateOnBlur={false}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                withdraw(parseFloat(values.withdraw))
                                setSubmitting(false)
                                resetForm()
                                setTimeout(function () { alert('Money successefully withdrawn!'); }, 400)
                                setTimeout(function () { setBalance(balance - parseFloat(values.withdraw)) }, 450)
                            }}>
                            {formik => (
                                <Form>
                                    <label className="field" htmlFor="withdraw">Withdraw Amount</label>
                                    <Field
                                        id="withdraw"
                                        name="withdraw"
                                        type="number"
                                        min="1"
                                        autoComplete="current-withdraw"
                                        onChange={formik.handleChange}
                                        value={formik.values.withdraw} />
                                    {formik.errors.withdraw ?
                                        <div className="validation-error">{formik.errors.withdraw}</div> : null}
                                    {!formik.values.withdraw ?
                                        <Button type="submit" disabled>Withdraw</Button> :
                                        <Button type="submit">Withdraw</Button>}
                                </Form>
                            )}
                        </Formik>
                    </div>}
            </div>
        </Container>
    )
}

export default Withdraw