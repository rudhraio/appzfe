import { useState } from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (fieldName, value) => {
        setValues({
            ...values,
            [fieldName]: {
                ...values[fieldName],
                value,
            },
        });
    };

    const handleBlur = (fieldName) => {
        setTouched({
            ...touched,
            [fieldName]: true,
        });
        validateForm();

        const fieldErrors = validateField(fieldName);
        const isvalid = Object.keys(fieldErrors).length === 0;
        updateFieldValidity(fieldName, isvalid);
    };

    const validateField = (fieldName) => {
        const field = values[fieldName];
        const fieldErrors = {};

        if (field.required && (typeof field.value === "string" && !field.value.trim())) {
            fieldErrors.message = field.errorMessage || 'Field is required';
        } else if (field.pattern && (typeof field.value === "string" && !new RegExp(field.pattern).test(field.value))) {
            fieldErrors.message = field.errorMessage || 'Invalid value provided';
        }

        return fieldErrors;
    };

    const validateForm = () => {
        const newErrors = {};

        for (const fieldName in values) {
            const fieldErrors = validateField(fieldName);
            if (Object.keys(fieldErrors).length > 0) {
                newErrors[fieldName] = fieldErrors.message;
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getFormValues = () => {
        let returnValue = {};
        for (const fieldName in values) {
            returnValue[fieldName] = values[fieldName].value;
        }
        return returnValue;
    };

    const updateForm = (values) => {
        setValues(values);
    }

    const updateFieldValidity = (fieldName, isvalid) => {
        setValues({
            ...values,
            [fieldName]: {
                ...values[fieldName],
                isvalid,
            },
        });
    };

    const isFormValid = () => {
        if (!validateForm()) {
            return false;
        } else {
            return true;
        }
    };

    const setAllTouched = () => {
        const touchedFields = {};
        for (const fieldName in values) {
            touchedFields[fieldName] = true;

            const fieldErrors = validateField(fieldName);
            const isvalid = Object.keys(fieldErrors).length === 0;
            updateFieldValidity(fieldName, isvalid);
        }
        setTouched(touchedFields);
    };

    const handleSubmit = async (onSubmit) => {

        setIsSubmitting(true);
        try {
            validateForm();
            setAllTouched();
            await onSubmit(getFormValues());
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        touched,
        isSubmitting,
        updateForm,
        handleChange,
        handleBlur,
        handleSubmit,
        getFormValues,
        isFormValid,
        resetForm
    };
};
