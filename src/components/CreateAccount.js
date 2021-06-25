import { Button, Container } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .required('*Name is required'),
    email: Yup.string()
        .required('*Email is required'),
    password: Yup.string()
        .min(8, 'Your password is too short!')
        .required('*Password is required')
});

const CreateAccount = ({ users, addUser }) => {

    const btnText = users.length > 0 ? 'Add Another Account' : 'Create Account'

    return (
        <Container>
            <div className="card text-center">
                <div className="card-header">
                    <h5 className="card-title">CREATE ACCOUNT</h5>
                </div>
                <div className="card-body">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            addUser(values)
                            setSubmitting(false)
                            resetForm()
                            setTimeout(function () { alert('Account successfully created!'); }, 400);
                        }}>
                        {formik => (
                            <Form>
                                <label className="field" htmlFor="name">Name</label>
                                <Field
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    className={formik.errors.name ? "error-highlight" : null} />
                                {formik.errors.name ?
                                    <div className="validation-error">{formik.errors.name}</div> : null}

                                <label className="field" htmlFor="name">Email</label>
                                <Field
                                    name="email"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className={formik.errors.email ? "error-highlight" : null} />
                                {formik.errors.email ?
                                    <div className="validation-error">{formik.errors.email}</div> : null}

                                <label className="field" htmlFor="password">Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className={formik.errors.password ? "error-highlight" : null} />
                                {formik.errors.password ?
                                    <div className="validation-error">{formik.errors.password}</div> : null}
                                {!formik.values.name || !formik.values.email || !formik.values.password || formik.errors.password ?
                                    <Button type="submit" disabled>{btnText}</Button> :
                                    <Button type="submit">{btnText}</Button>}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Container >
    )
}

export default CreateAccount