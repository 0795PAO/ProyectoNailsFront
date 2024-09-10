const Button = (props) => {
    
    const { name } = props;
    return (
        <>
            <button className="bg-primary px-5 py-2 text-black">{name}</button>
        </>
    )
}

export default Button;