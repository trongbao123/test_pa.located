import { useForm, SubmitHandler } from "react-hook-form"
import { Login } from "../interface";
import { useCallback } from "react";
import { user } from '../../../data'
import { useNavigate } from "react-router";
import Notification from "../../../components/notification";
const useLogin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Login>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Login> = useCallback(async (data) => {
        const { identity, password } = data || {};
        const identity_user = user?.identity;
        const password_user = user?.password;

        if (identity_user !== identity) {
            Notification({
                type: 'error',
                message: 'Identity not found',
            });
        } else if (password_user !== password) {
            Notification({
                type: 'error',
                message: 'Password not found',
            });
        } else {
            Notification({
                type: 'success',
                message: 'Login successfully',
                description: 'Welcome to PA DEMO HOTEL',
            });
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
        }

    }, []);

    return {
        onSubmit,
        register,
        handleSubmit,
        watch,
        errors
    }
}

export default useLogin;