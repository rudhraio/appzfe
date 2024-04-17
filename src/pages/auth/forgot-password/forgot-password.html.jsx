import { Link } from "react-router-dom";
import { Form } from "../../../components/elements/form/form";
import { FormField } from "../../../components/elements/form/form-field";
import { Label } from "../../../components/elements/form/label";
import { Heading2 } from "../../../components/elements/ui/headings";
import { Text } from "../../../components/elements/ui/text";
import { Button } from "../../../components/elements/ui/button";
import { EmailBox } from "../../../components/elements/form/email-box";

function ForgotPasswordHTML(props) {
    const { formHandler, onSubmit, showMessage } = props;
    return (<>
        <section >
            <div className="flex justify-center mt-48">
                <div className="flex flex-col px-6">
                    <div>
                        <Heading2>Forgot Password</Heading2>
                        <Text>
                            Type in your email and we'll send you a link to reset your password
                        </Text>
                    </div>
                    {
                        showMessage.show && <div className="mt-4">
                            <Text className={`p-2 px-3 capitalize ${showMessage.error ? "bg-red-300" : "bg-green-200"} rounded font-medium`}>
                                {showMessage.message} <br />
                            </Text>
                            {
                                !showMessage.error && <Text>
                                    Redirecting to Sign In ...
                                </Text>
                            }
                        </div>
                    }

                    <div className="mt-6">
                        <Form onSubmit={(e) => { e.preventDefault(); formHandler.handleSubmit(onSubmit) }}>
                            <FormField>
                                <Label>
                                    Email
                                </Label>
                                <EmailBox
                                    value={formHandler.values.email.value}
                                    onChange={(e) => formHandler.handleChange('email', e.target.value)}
                                />
                            </FormField>
                            <Button className={"max-w-lg"}>Send Reset Email</Button>
                        </Form>
                    </div>
                    <div className="mt-12">
                        <Text>Had an account? <Link to="/auth/signin" className="underline">Sign In</Link></Text>
                    </div>
                </div>
            </div>
        </section>
    </>)
};

export default ForgotPasswordHTML;