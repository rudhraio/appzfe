import { EmailBox } from "../../../components/elements/form/email-box";
import { Form } from "../../../components/elements/form/form";
import { FormField } from "../../../components/elements/form/form-field";
import { InputBox } from "../../../components/elements/form/input-box";
import { Label } from "../../../components/elements/form/label";
import { PasswordBox } from "../../../components/elements/form/password-box";
import { Button } from "../../../components/elements/ui/button";
import { Heading1, Heading2 } from "../../../components/elements/ui/headings";
import { Text } from "../../../components/elements/ui/text";

function ResetPasswordHTML(props) {

    const { email, formHandler, onSubmit, showMessage } = props;


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
                            <div>
                                <Text> Email: {email}</Text>
                            </div>
                            <FormField>
                                <Label>
                                    New Password
                                </Label>
                                <PasswordBox
                                    value={formHandler.values.password.value}
                                    onChange={(e) => formHandler.handleChange('password', e.target.value)}
                                />
                                <Text className="text-xs text-gray-700">It must contain at least one uppercase letter, one lowercase letter, one digit, one special character (@, $, !, %, *, ?, or &) and be at least 8 characters long.</Text>

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