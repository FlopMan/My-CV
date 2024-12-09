import { cn } from '@/lib/utils';

interface IRadioProps {
    label: string;
    value: string;
    name: string;
    className?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputRadio(props: IRadioProps) {
    const { label, name, className, onChange, value, checked } = props;
    return (
        <label className={cn(className, 'inline-flex items-center cursor-pointer')}>
            <input
                type="radio"
                name={name}
                className="hidden peer"
                onChange={onChange}
                value={value}
                checked={checked}
            />
            <div className="w-3.5 h-3.5 rounded-full border border-[#E5E5E5] bg:[#FAFAFA] peer-checked:bg-black flex items-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full m-auto"></div>
            </div>
            <span className="ml-2 text-medium-body-16 text-[#262626]">{label}</span>
        </label>
    );
}

export default InputRadio;
