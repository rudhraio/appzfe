import { Link } from "react-router-dom";
import { Form } from "../../../components/elements/form/form";
import { FormField } from "../../../components/elements/form/form-field";
import { Label } from "../../../components/elements/form/label";
import { PasswordBox } from "../../../components/elements/form/password-box";
import { Heading2 } from "../../../components/elements/ui/headings";
import { Text } from "../../../components/elements/ui/text";
import { Button } from "../../../components/elements/ui/button";
import { EmailBox } from "../../../components/elements/form/email-box";

function SignInHTML() {
    return (<>
        <section className="flex flex-row h-screen">
            <div className="lg:basis-2/5 basis-full flex flex-col justify-center items-center h-full border-r-2 shadow-lg w-full mx-auto">
                <div className="flex flex-col md:min-w-[36rem] min-w-full px-6">
                    <div>
                        <Heading2>Welcome back</Heading2>
                        <Text>Sign in to your account</Text>
                    </div>
                    <div className="mt-6">
                        <Form>
                            <FormField>
                                <Label>
                                    Email
                                </Label>
                                <EmailBox />
                            </FormField>
                            <FormField>
                                <div className="flex flex-row justify-between items-center">
                                    <Label>
                                        Password
                                    </Label>
                                    <Link to="/auth/forgot-password" className="text-xs">Forgot Password?</Link>
                                </div>
                                <PasswordBox />
                            </FormField>

                            <Button className={"max-w-lg"}>Sign In</Button>

                        </Form>
                    </div>
                    <div className="mt-12">
                        <Text>Don't have an account? <Link to="/auth/signup" className="underline">Sign Up</Link></Text>
                    </div>
                </div>
            </div>
            <div className="lg:basis-3/5 basis-0 bg-black flex w-full h-full justify-center items-center ">
                <img src="assets/images/image.png" alt="auth background" className="w-full h-full" />
            </div>
        </section>
    </>);
}

export default SignInHTML;