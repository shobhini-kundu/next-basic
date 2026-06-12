"use client";
import { IUser } from "@/interfaces/user";
import { Span } from "next/dist/trace";
import React from "react";
import { useForm } from "react-hook-form";

const CreateUser: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUser>({ mode: "all" });
  const onSubmit = (payload: IUser) => {
    console.log("payload",payload);
  };
return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 font-sans text-neutral-200 antialiased">
      <div className="w-full max-w-lg bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl">
        
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-white">Create User</h2>
          <p className="text-sm font-medium text-neutral-500">Enter details to register a new account.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-400 pl-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. John Doe"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                errors.name ? "border-rose-500/50" : "border-white/5"
              }`}
            />
            {errors.name && <p className="text-xs text-rose-400 pl-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-400 pl-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                errors.email ? "border-rose-500/50" : "border-white/5"
              }`}
            />
            {errors.email && <p className="text-xs text-rose-400 pl-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mobile" className="text-xs font-semibold uppercase tracking-wider text-neutral-400 pl-1">
              Mobile Number
            </label>
            <input
              id="mobile"
              type="number"
              placeholder="+1 (555) 000-0000"
              {...register("mobile", { required: "Mobile number is required" })}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                errors.mobile ? "border-rose-500/50" : "border-white/5"
              }`}
            />
            {errors.mobile && <p className="text-xs text-rose-400 pl-1">{errors.mobile.message}</p>}
          </div>
            <div className="space-y-1.5">
            <label htmlFor="age" className="text-xs font-semibold uppercase tracking-wider text-neutral-400 pl-1">
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="12"
              {...register("age", { required: "Age is required", valueAsNumber: true })}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                errors.age ? "border-rose-500/50" : "border-white/5"
              }`}
            />
            {errors.age && <p className="text-xs text-rose-400 pl-1">{errors.age.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="address" className="text-xs font-semibold uppercase tracking-wider text-neutral-400 pl-1">
              Residential Address
            </label>
            <textarea
              id="address"
              rows={3}
              placeholder="Enter full address..."
              {...register("address", { required: "Address is required" })}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none ${
                errors.address ? "border-rose-500/50" : "border-white/5"
              }`}
            />
            {errors.address && <p className="text-xs text-rose-400 pl-1">{errors.address.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-3.5 px-4 bg-white text-neutral-950 font-bold rounded-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Register User"}
          </button>
        </form>
      </div>
    </div>
  );};

export default CreateUser;
