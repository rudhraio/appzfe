import { Form } from "../../../components/elements/form/form";
import { FormField } from "../../../components/elements/form/form-field";
import { InputBox } from "../../../components/elements/form/input-box";
import { Label } from "../../../components/elements/form/label";
import TextareaBox from "../../../components/elements/form/textarea-box";
import { Heading2 } from "../../../components/elements/ui/headings";
import { Button } from "../../../components/elements/ui/button";
import { Text } from "../../../components/elements/ui/text";
function ProfileHTML() {
    return (<>
        <div className="p-2">
            <div className="mb-4">
                <Heading2 className="text-gray-400 !font-light">
                    Profile Info
                </Heading2>
            </div>
            <hr className="mb-6" />
            <Form>
                <div className="flex flex-col w-full gap-3">
                    <div className="flex flex-row w-full gap-x-12 justify-between">
                        <div className="flex flex-col gap-6">
                            <div>
                                <div className="flex flex-row gap-6">
                                    <FormField className="w-full">
                                        <Label>First Name</Label>
                                        <InputBox />
                                    </FormField>
                                    <FormField className="w-full">
                                        <Label>Last Name</Label>
                                        <InputBox />
                                    </FormField>
                                </div>
                                <Text className="text-sm text-gray-600">This is you display name which will showed accross the platform. Last name is optional</Text>
                                <hr className="mt-3" />
                            </div>
                            <div>
                                <FormField className="w-full">
                                    <Label>Email</Label>
                                    <InputBox />
                                </FormField>
                                <Text className="text-sm text-gray-600">This is your primary email address which will be used for login. This can't be edited.</Text>
                                <hr className="mt-3" />
                            </div>
                            <div>
                                <FormField className="w-full">
                                    <Label>Phone Number</Label>
                                    <InputBox />
                                </FormField>
                                <Text className="text-sm text-gray-600">Enter a phone number to receive important service updates by SMS. This is an optional field.</Text>
                                <hr className="mt-3" />
                            </div>


                        </div>
                        <div className="px-6">
                            <Label className="mb-6">Your Avatar</Label>
                            <div className="w-48 h-48 bg-gray-400 rounded-full mt-6"></div>
                        </div>

                    </div>


                    <div className="mt-10">
                        <Button className="w-full max-w-lg"> Save</Button>
                    </div>
                </div>


            </Form>
        </div>
    </>)
}

export default ProfileHTML;