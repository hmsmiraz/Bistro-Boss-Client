
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
        <div className="text-center font-bold text-emerald-600 text-3xl">
        <h2>
        <span>Hi, Welcome </span>
        {
            user?.displayName ? user.displayName : 'Back'
        }
        </h2>
        </div>
       
    </div>
    );
};

export default UserHome;