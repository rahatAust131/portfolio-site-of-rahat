import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="">
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-input w-75" type="text" placeholder="Your Name" {...register("name")} />
                <input className="form-input w-75" placeholder="Your Email Address" {...register("email")} />
                <textarea className="form-textarea w-75" placeholder="Your Comment" {...register("comment", { required: true })} />
                {errors.comment && <span style={{color: 'red'}}>The Comment field is required</span>}
                <input className="btn btn-brand w-75" type="submit" />
            </form>
        </div>
    );
};

export default Contact;