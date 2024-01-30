import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    name: string
}
export default function Form() {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);


    return <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue='paweł' {...register('name', { required: true, minLength: 7 })} />
        {errors.name && <span>Błąd: {errors.name.type}</span>}

        <input type="submit"/>
    </form>
}