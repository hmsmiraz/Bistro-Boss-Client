import { loadStripe } from "@stripe/stripe-js";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// add publishable key in " " from stripe website create an account
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE);

const Payment = () => {
    return (
        <div>
            <SharedTitle heading={"Payment"} subHeading={"Pay For Eat"}></SharedTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;