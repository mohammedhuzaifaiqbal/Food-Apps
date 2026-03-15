import { useRouteError } from "react-router-dom";
const Errors = () => {
    const err = useRouteError();
    console.log(err);
    const{status,statusText}=err;
    return (
        <div className="Error">
           <h1>Oops!!</h1>
           <h2>Something went wrong!!</h2>
           <h2>{status+ ":"+statusText }</h2>
        </div>
    );
}
export default Errors;