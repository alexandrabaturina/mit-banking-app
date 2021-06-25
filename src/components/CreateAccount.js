import { Button, Container } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'

const CreateAccount = ({ addUser }) => {

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
                        onSubmit={(values) => {
                            addUser(values)
                            alert('Account successfully created!')
                        }}>
                        {formik => (
                            <Form>
                                <label className="field" htmlFor="name">Name</label>
                                <Field
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                                <label className="field" htmlFor="name">Email</label>
                                <Field
                                    name="email"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                <label className="field" htmlFor="password">Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                <Button type="submit">Create Account</Button>
                            </Form>
                        )
                        }
                    </Formik>
                </div>
            </div>
        </Container >
    )
}

export default CreateAccount