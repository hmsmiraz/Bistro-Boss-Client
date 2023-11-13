
const SharedTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center my-8 md:w-4/12 font-medium pt-10">
            <p className="text-yellow-600 mb-2">------------ {subHeading} ------------</p>
            <h3 className="text-3xl py-4 uppercase border-y-4">{heading}</h3>
        </div>
    );
};

export default SharedTitle;