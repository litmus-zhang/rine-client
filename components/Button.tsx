interface ButtonInterface {
    text: string;
}

const Button = (props: ButtonInterface) => {
    const { text } = props

    return (<button className='bg-green-500 text-white p-2'>
        {text}
    </button>
    )
}


export default Button;
