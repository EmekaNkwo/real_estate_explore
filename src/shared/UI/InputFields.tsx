import { ConfigProvider, Input, InputNumber, InputNumberProps, InputProps, Select, SelectProps } from "antd"
import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface ISelectProps extends SelectProps {
    className?: string;
    labelName?: string;
}

interface INumberInputProps extends InputNumberProps {
    className?: string;
    labelName?: string;
}

interface IInputProps extends InputProps {
    className?: string;
    labelName?: string;
}

interface ICustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    labelName?: string;
    options: {
        value: string;
        label: string;
    }[]
}
export const SelectField = ({ className, labelName, ...props }: ISelectProps) => {
    return (
        <label className="flex-1 flex flex-col gap-1 font-semibold w-full">
            {labelName && (
                <span className="font-medium text-[13px]  ">{labelName}</span>
            )}
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#066FA9",
                    },
                }}
            >
                <Select {...props} className={`rounded-md ${className}`} />
            </ConfigProvider>
        </label>
    )
}

export const CustomSelectField = ({ className, labelName, options, ...props }: ICustomSelectProps) => {
    return (
        <div className="flex flex-col w-full">
            {labelName && (
                <span className="font-normal ">{labelName}</span>
            )}
            <select  {...props} className={`${className} bg-white h-[38px] border-[#999] text-[#999] border rounded-[6px] p-2`}>
                {
                    options.map((option) => <option key={option.value} value={option.value} >{option.label}</option>)
                }
            </select>

        </div>
    )
}

export const NumberField = ({ className, labelName, ...props }: INumberInputProps) => {
    return (
        <label className="flex-1 flex flex-col gap-1 font-semibold w-full">
            {labelName && (
                <span className="font-medium text-[13px]  ">{labelName}</span>
            )}
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#066FA9",
                    },
                }}
            >
                <InputNumber {...props} className={`rounded-md ${className}`} />
            </ConfigProvider>
        </label>
    )
}

export const TextField = ({ className, labelName, ...props }: IInputProps) => {
    return (
        <label className="flex-1 flex flex-col gap-1 font-semibold w-full">
            {labelName && (
                <span className="font-medium text-[13px]">{labelName}</span>
            )}
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#066FA9",
                    },
                }}
            >
                <Input {...props} className={`rounded-md ${className}`} />
            </ConfigProvider>
        </label>
    )
}