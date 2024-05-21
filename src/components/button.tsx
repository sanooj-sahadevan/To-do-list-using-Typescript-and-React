type Button ={
    children:JSX.Element|string;
    className:string;
}


 const Button = ({children,className}:Button) => {
    return (
        <div>
            <button className={`bg-gray-700 w-full p-2 ${className}`} type='submit'>{children}</button  >

        </div>
    )
}

export default Button