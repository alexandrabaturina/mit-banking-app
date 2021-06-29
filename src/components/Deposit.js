import { Container, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    deposit: Yup.number()
        .typeError('Deposit amount should be a number')
        .min(0, 'Please deposit a positive amount')
})

const Deposit = ({ balance, addDeposit }) => {

    return (
        <Container>
            <div className="card text-center border-secondary">
                <div className="card-header border-secondary">
                    <h5 className="card-title">DEPOSIT</h5>
                </div>
                <div className="card-body">
                    <div className="balance">
                        BALANCE: ${balance}
                    </div>

                    <Formik
                        initialValues={{
                            deposit: ''
                        }}
                        validationSchema={validationSchema}
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
                                {formik.errors.deposit ?
                                    <div className="validation-error">{formik.errors.deposit}</div> : null}
                                {!formik.values.deposit || formik.errors.deposit ?
                                    <Button type="submit" disabled>Deposit</Button> :
                                    <Button type="submit">Deposit</Button>}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Container>
    )
}

export default Deposit