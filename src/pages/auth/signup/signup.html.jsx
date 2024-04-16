import { Link } from "react-router-dom";
import { Form } from "../../../components/elements/form/form";
import { FormField } from "../../../components/elements/form/form-field";
import { InputBox } from "../../../components/elements/form/input-box";
import { Label } from "../../../components/elements/form/label";
import { PasswordBox } from "../../../components/elements/form/password-box";
import { Heading2 } from "../../../components/elements/ui/headings";
import { Button } from "../../../components/elements/ui/button";
import { Text } from "../../../components/elements/ui/text";
import { EmailBox } from "../../../components/elements/form/email-box";

function SignUpHTML(props) {

    const { formHandler, onSubmit } = props;

    return (<>
        <section className="flex flex-row h-screen">
            <div className="lg:basis-2/5 basis-full flex flex-col justify-center items-center h-full border-r-2 shadow-lg w-full mx-auto">
                <div className="flex flex-col md:min-w-[36rem] min-w-full px-6">
                    <div>
                        <Heading2>Get Started</Heading2>
                        <Text>Create a new account</Text>
                    </div>
                    <div className="mt-6">
                        <Form onSubmit={(e) => { e.preventDefault(); formHandler.handleSubmit(onSubmit) }}>
                            <FormField>
                                <Label>
                                    Name
                                </Label>
                                <InputBox
                                    value={formHandler.values.name.value}
                                    onChange={(e) => formHandler.handleChange('name', e.target.value)}
                                />
                            </FormField>
                            <FormField>
                                <Label>
                                    Email
                                </Label>
                                <EmailBox
                                    value={formHandler.values.email.value}
                                    onChange={(e) => formHandler.handleChange('email', e.target.value)}
                                />
                            </FormField>
                            <FormField>
                                <Label>
                                    Password
                                </Label>
                                <PasswordBox
                                    value={formHandler.values.password.value}
                                    onChange={(e) => formHandler.handleChange('password', e.target.value)}
                                />
                                <Text className="text-xs text-gray-700">It must contain at least one uppercase letter, one lowercase letter, one digit, one special character (@, $, !, %, *, ?, or &) and be at least 8 characters long.</Text>
                            </FormField>

                            <Button className={"max-w-lg"} >Sign Up</Button>
                        </Form>
                    </div>
                    <div className="mt-12">
                        <Text>Have an account? <Link to="/auth/signin" className="underline">Sign In</Link></Text>
                    </div>
                </div>
            </div>
            <div className="lg:basis-3/5 basis-0 bg-black flex w-full h-full justify-center items-center ">
                <img src="assets/images/image.png" alt="auth background" className="w-full h-full" />
            </div>
        </section>
    </>)
};

export default SignUpHTML;