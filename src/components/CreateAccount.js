import { useContext } from 'react'
import { UserContext } from './UserContext'
import { Button, Container } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const CreateAccount = () => {

    const [ctx, setCtx] = useContext(UserContext)

    const { users } = ctx

    const addUser = ({ name, email, password }) => {
        setCtx({
            ...ctx,
            users: {
                ...ctx.users,
                [name]: {
                    name: name,
                    email: email,
                    password: password,
                    balance: 0,
                    history: []
                }
            },
            currentUser: name
        })
    }

    const emailRegex = /\w+@\w+\.[a-z]{2,4}$/

    const validationSchema = Yup.object({
        name: Yup.string()
            .test('uniqueness', 'User with this name already exists. Choose another name.',
                function (value) {
                    const { path, createError } = this
                    if (Object.keys(users).includes(value)) {
                        return createError({
                            path,
                            message: 'User with this name already exists. Choose another name.'
                        })
                    }
                    return true
                })
            .required('*Name is required'),
        email: Yup.string()
            .matches(emailRegex, 'Email format is incorrect.')
            .required('*Email is required'),
        password: Yup.string()
            .min(8, 'Enter password which is at least 8 characters long.')
            .required('*Password is required')
    })

    const btnText = Object.keys(users).length > 0
        ? 'Add Another Account'
        : 'Create Account'

    return (
        <Container className="center">
            <div className="card text-center border-secondary">
                <div className="card-header border-secondary">
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
                        validateOnChange={false}
                        validateOnBlur={false}
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
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="current-name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    className={formik.errors.name
                                        ? "error-highlight"
                                        : null} />
                                {formik.errors.name
                                    ? <div className="validation-error">{formik.errors.name}</div>
                                    : null}

                                <label className="field" htmlFor="name">Email</label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="text"
                                    autoComplete="current-email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className={formik.errors.email
                                        ? "error-highlight"
                                        : null} />
                                {formik.errors.email
                                    ? <div className="validation-error">{formik.errors.email}</div>
                                    : null}
                                <label className="field" htmlFor="password">Password</label>
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className={formik.errors.password
                                        ? "error-highlight"
                                        : null} />
                                {formik.errors.password
                                    ? <div className="validation-error">{formik.errors.password}</div>
                                    : null}
                                <div className="btn-wrapper">
                                    {!formik.values.name || !formik.values.email || !formik.values.password
                                        ? <Button variant="outline-dark" type="submit" disabled>{btnText}</Button>
                                        : <Button variant="outline-dark" type="submit">{btnText}</Button>}
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Container >
    )
}

export default CreateAccount