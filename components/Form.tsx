const Form = () => {

    return (
        <div className="flex h-screen bg-gray-200 w-full item-center justify-center ">

            <form className="bg-white h-fit pb-6 p-4 justify-center my-4flex flex-col w-fit z-2">
                <h1 className="text-3xl font-semibold">Pickup Request</h1>
                <div className="flex">
                    <FormInput label="Firstname" type="text" placeholder="Olaoluwa" onChange={() => { console.log("First") }} />
                    <FormInput label="Lastname" type="text" placeholder="Pogan" onChange={() => { console.log("Last") }} />
                </div>
                <FormInput label="Phone Numer" type="text" placeholder="+2349012345678" onChange={() => { console.log("First") }} />
                <FormInput label="Email" type="email" placeholder="Olaoluwap@gmail.com" onChange={() => { console.log("First") }} />
                <FormInput label="Address" type="text" placeholder="Plot 2, Ajao Estate" onChange={() => { console.log("First") }} />
                <FormInput label="Preferred Date of Pickup" type="date" placeholder="Olaoluwa" onChange={() => { console.log("First") }} />

            </form>

        </div>
    )
}

export default Form;

type FormInput = {
    label: string;
    type: "text" | "date" | "tel" | "email"
    placeholder: string
    onChange: () => void
}

export const FormInput = (props: FormInput) => {
    const { label, ...rest } = props
    return (
        <div className="flex flex-col gap-2 w-fix p-2">
            <label className="font-md font-semibold"> {label}</label>
            <input className="w-full bg-gray-100 p-2 outline-none rounded-md focus:outline-green-200" {...rest} />
        </div>
    )
}