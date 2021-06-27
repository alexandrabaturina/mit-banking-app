import { Container, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'

const Deposit = ({ balance, addDeposit }) => {
    return (
        <Container>
            <div className="card text-center">
                <div className="card-header">
                    <h5 className="card-title">DEPOSIT</h5>
                </div>
                <div className="card-body">
                    <div className="balance">
                        BALANCE: ${balance}
                    </div>
                </div>
                <Formik
                    initialValues={{
                        balance: balance,
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        addDeposit(parseFloat(values.deposit))
                        setSubmitting(false)
                        resetForm()
                        setTimeout(function () { alert('Deposit successefully added!'); }, 400);
                    }}>
                    {formik => (
                        <Form>
                            <label className="field" htmlFor="deposit">Deposit Amount</label>
                            <Field
                                name="deposit"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.deposit} />
                            <Button type="submit">Deposit</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}

export default Deposit