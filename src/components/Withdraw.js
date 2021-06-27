import { Container, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'

const Withdraw = ({ balance, withdraw }) => {

    return (
        <Container>
            <div className="card text-center">
                <div className="card-header">
                    <h5 className="card-title">WITHDRAW</h5>
                </div>
                <div className="card-body">
                    <div className="balance">
                        BALANCE: ${balance}
                    </div>
                </div>
                <Formik
                    initialValues={{
                        withdraw: ''
                    }}
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

                            <Button type="submit">Withdraw</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}

export default Withdraw