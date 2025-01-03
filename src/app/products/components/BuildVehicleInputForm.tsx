import {VehicleInputFieldsProps} from "@/models/Vehicle";

const BuildVehicleInputForm: React.FC<VehicleInputFieldsProps> = ({ fields, onChange }) => {
    return (
        <div className="overflow-y-auto h-full mx-8 my-4 pr-4 pl-2">
            {fields.map(({ name, type, placeholder, hint, value }) => (
                <div key={name as string} className="mb-4">
                    <label className="block text-gray-700 mb-1">
                        {placeholder}
                    </label>
                    <input
                        type={type}
                        name={name as string}
                        placeholder={hint}
                        value={value}
                        onChange={onChange}
                        required
                        className="bg-inherit text-gray-400 border rounded p-2 w-full"
                    />
                </div>
            ))}
        </div>
    );
};

export default BuildVehicleInputForm;