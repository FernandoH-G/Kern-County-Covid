import myPig from "./../image/ic_my_pig_55x55.png"

const Home = () => {
    return (
        <>
            <section> {/* Covid Cards*/}
                {/* <div className="p-6 max-w-sm mx-auto bg-covid-blue rounded-xl shadow-md flex items-center space-x-10"></div> */}
                <div className="p-6 max-w-none lg:max-w-5xl mx-auto bg-covid-blue shadow-md flex space-x-10">
                    <div className="flex-shrink-0">
                        <img className="h-12 w-12" src={myPig} alt="pig" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-white">Health Tips</div>
                        <p className="text-gray-300">Easy to follow tips to reduce exposure risk!</p>
                    </div>
                </div>
            </section>
            <section> {/* Covid Cards*/}
                <div className="p-6 max-w-none lg:max-w-5xl mx-auto bg-covid-blue-compliment shadow-md flex space-x-10">
                    <div className="flex-shrink-0">
                        <img className="h-12 w-12" src={myPig} alt="pig" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-white">Vaccination Sites</div>
                        <p className="text-gray-300">Find the nearest vaccination site near you!</p>
                    </div>
                </div>
            </section>
            <section> {/* Covid Cards*/}
                <div className="p-6 max-w-none lg:max-w-5xl mx-auto bg-covid-blue shadow-md flex space-x-10">
                    <div className="flex-shrink-0">
                        <img className="h-12 w-12" src={myPig} alt="pig" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-white">Covid-19 stats</div>
                        <p className="text-gray-300">Current mortality numbers, infection rate, etc.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home