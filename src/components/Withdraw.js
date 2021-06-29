import { Container, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const Withdraw = ({ users, withdraw }) => {

    const validationSchema = Yup.object({
        withdraw: Yup.number()
            .typeError('Withdraw amount should be a number')
            .max(users.length === 0 ?
                0 :
                users[users.length - 1].balance, 'Overdraft. Please deposit money first.')
    })

    return (
        <Container>
            <div className="card text-center border-secondary">
                <div className="card-header border-secondary">
                    <h5 className="card-title">WITHDRAW</h5>
                </div>
                {users.length === 0 ?
                    <div className="no-account">Create account to withdraw money.</div> :
                    <div className="card-body">
                        <div className="balance">
                            BALANCE: ${users[users.length - 1].balance}
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
                                setTimeout(function () { alert('Money successefully withdrawn!'); }, 400);
                            }}>
                            {formik => (
                                <Form>
                                    <label className="field" htmlFor="withdraw">Withdraw Amount</label>
                                    <Field
                                        name="withdraw"
                                        type="text"
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