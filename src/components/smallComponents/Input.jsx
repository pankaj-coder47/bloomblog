/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { forwardRef, useId } from 'react';



const Input = forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {
                label && <label
                    htmlFor={id}
                    className="inline-block mb-1 pl-1 dark:text-slate-100 text-zinc-900 text-[1.1rem]"
                >{label}</label>
            }

            <div>
                <input
                    type={type}
                    id={id}
                    className={`${className}bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-zinc-200 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-[1.1rem]`} placeholder="John"
                    {...props}
                    ref={ref}
                />
            </div>
        </div>
    )

})




export default Input;
