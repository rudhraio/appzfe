import { EmailBox } from "../../../components/elements/form/email-box";
import { Form } from "../../../components/elements/form/form";
import { FormField } from "../../../components/elements/form/form-field";
import { InputBox } from "../../../components/elements/form/input-box";
import { Label } from "../../../components/elements/form/label";
import { PasswordBox } from "../../../components/elements/form/password-box";
import { Button } from "../../../components/elements/ui/button";
import { Heading1, Heading2 } from "../../../components/elements/ui/headings";
import { Text } from "../../../components/elements/ui/text";

function ResetPasswordHTML() {
    return (<>
        <section>
            <div className="flex justify-center mt-48">
                <div className="flex flex-col px-6">
                    <div>
                        <Heading2>Reset Your Password</Heading2>
                        <Text>
                            Type in a new secure password and press save to update your password
                        </Text>
                    </div>
                    <div className="mt-6">
                        <Form>
                            <div>
                                <Text> Email: user@example.com</Text>
                            </div>
                            <FormField>
                                <Label>
                                    New Password
                                </Label>
                                <PasswordBox />
                            </FormField>

                            <Button className={"max-w-lg"}>
                                Save New Password
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    </>)
};

export default ResetPasswordHTML;