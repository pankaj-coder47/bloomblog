/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { useId } from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className=''></label>}

            <select
                id={id}
                {...props}
                ref={ref}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
            >
                {
                    options?.map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
