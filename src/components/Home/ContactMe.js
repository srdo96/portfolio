import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (formData) => {
    // console.log(formData);
    setLoading(true);
    emailjs
      .send(
        "service_i8gss9b",
        "template_bpfaeum",
        formData,
        "laIim4HS14ScglSOD"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Email Sent");
            setLoading(false);
            reset();
          } else toast.error("Email Not Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="relative flex justify-center text-center py-16">
        <h2 className="text-5xl md:text-8xl text-light opacity-10  uppercase font-semibold ">
          Contact Me
        </h2>
        <p className="text-xl md:text-2xl text-black font-semibold absolute mt-4  w-96 self-center leading-3   mb-0">
          Email Me
          <span className="w-20  border-emerald-500 mt-4 border-b border-4  block mx-auto"></span>
        </p>
      </div>
      <div class="hero " id="contact">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold text-purple-700">
              Send me a message!
            </h1>
            <p class="py-6 ">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(sendEmail)}>
                {/* Name */}
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-lg "
                  placeholder="Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                {/* Name error handling */}
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
                {/* Email */}
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-lg "
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                {/* Email error handling */}
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
                {/* Password */}
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  className="input input-bordered w-full max-w-lg "
                  placeholder="Write your message here"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is Required",
                    },
                  })}
                />
                {/* Password error handling */}
                <label className="label">
                  {errors.message?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.message.message}
                    </span>
                  )}
                </label>
                <button
                  // onClick={setLoading(true)}
                  type="submit"
                  className="btn btn-primary btn-block mt-5"
                >
                  {loading ? <Loading /> : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
