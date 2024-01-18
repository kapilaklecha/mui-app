import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

interface FormData {
    name: string;
    phoneNumber: string;
    email: string;
}

const UserForm: React.FC = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<FormData>();
    const { setItem } = useLocalStorage();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setItem(data.name, data);
        navigate('/data');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <TextField
                    {...register('name', { required: 'Name is required' })}
                    label="Name"
                    fullWidth
                    variant="outlined"
                />
                {errors.name && <p>{errors.name.message}</p>}

                <TextField
                    {...register('phoneNumber', { required: 'Phone number is required' })}
                    label="Phone Number"
                    fullWidth
                    variant="outlined"
                />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

                <TextField
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    label="Email"
                    fullWidth
                    variant="outlined"
                />
                {errors.email?.message && <p>{errors.email.message}</p>}

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Stack>
        </form>
    );
};

export default UserForm;
