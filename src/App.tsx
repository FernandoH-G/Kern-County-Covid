import myPig from './images/ic_my_pig_55x55.png'
function App() {
	return (
		// <section className="App h-screen w-full flex justify-center items-center bg-green-500">
		<section >
			{/* Navbar */}
			{/* <div className="p-4 bg-blue-400 space-x-6"> */}
				{/* <p className="inline ...">Home</p>
				<p className="inline ...">About</p> */}
			{/* <div className="p-4 bg-blue-400 flex flex-row space-x-4"> */}
			<div className="py-4 bg-blue-400 flex justify-around lg:justify-start lg:space-x-4 lg:px-4">
				<p >Home</p>
				<p >About</p>
			</div>

			{/* Message Notification */}
			<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-10">
				<div className="flex-shrink-0">
					<img className="h-12 w-12" src={myPig} alt="My Pig" />
				</div>
				<div>
					<div className="text-xl font-medium text-black">ChitChat</div>
					<p className="text-gray-500">You have a new message!</p>
				</div>
			</div>
			{/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex">
					<div className="md:flex-shrink-0">
						<img className="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store" />
					</div>
					<div className="p-8">
						<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
						<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
						<p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
					</div>
				</div>
			</div> */}
		</section>
	);
}

export default App;
