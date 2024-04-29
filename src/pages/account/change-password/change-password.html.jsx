import { Form } from "../../../components/elements/form/form";
import { FormField } from "../../../components/elements/form/form-field";
import { Label } from "../../../components/elements/form/label";
import { PasswordBox } from "../../../components/elements/form/password-box";
import { Button } from "../../../components/elements/ui/button";
import { Heading2 } from "../../../components/elements/ui/headings";
import { Text } from "../../../components/elements/ui/text";

function ChangePasswordHTML(props) {
  const { formHandler, onSubmit } = props;

  return (<>
    <div className="p-2">
      <div className="mb-4">
        <Heading2 className="text-gray-400 !font-light">
          Set New Password
        </Heading2>
      </div>
      <hr className="mb-6" />
      <Form onSubmit={(e) => { e.preventDefault(); formHandler.handleSubmit(onSubmit) }}>
        <div className="flex flex-col w-full gap-3">
          <div className="flex flex-row w-full gap-x-12 justify-between">
            <div className="flex flex-col gap-6">
              <div>
                <FormField className="w-full">
                  <Label>Current Password</Label>
                  <PasswordBox
                    value={formHandler.values.cpwd.value}
                    onChange={(e) => formHandler.handleChange('cpwd', e.target.value)}
                  />
                </FormField>
                <Text className="text-sm text-gray-600">
                  Enter your current password.
                </Text>
                <hr className="mt-3" />
              </div>
              <div>
                <FormField className="w-full">
                  <Label>New Password Number</Label>
                  <PasswordBox
                    value={formHandler.values.npwd.value}
                    onChange={(e) => formHandler.handleChange('npwd', e.target.value)}
                  />
                </FormField>
                <Text className="text-sm text-gray-600 max-w-lg">
                  Enter new password which must contain at least one uppercase letter, one lowercase letter, one digit, one special character (@, $, !, %, *, ?, or &) and be at least 8 characters long.
                </Text>
                <hr className="mt-3" />
              </div>
              <div className="mt-10">
                <Button className="w-full max-w-lg">
                  Update Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>

  </>)
}

export default ChangePasswordHTML;