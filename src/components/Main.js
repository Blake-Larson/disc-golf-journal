export default function Main(props){
    return (
        <div className="flex py-5 gap-5 justify-center">
            <div className="w-1/3">
                <img className="object-contain rounded-xl" src={props.imageUrl} alt={`View of ${props.title}`}/>
            </div>
            <div className="w-2/3 flex flex-col justify-center">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="uppercase tracking-widest pl-2 pr-5">{props.location}</span>
                    <a className="text-slate-500 underline" href={props.udiscUrl}>View on UDisc</a>
                </div> 
                <h2 className="text-4xl custom-navy font-bold mt-2 mb-4">{props.title}</h2>
                <div className='flex gap-5 items-center mb-1'>
                    <span className="custom-navy font-bold bg-slate-300 rounded-full p-1">{props.rating}</span>
                    <span className="custom-navy font-bold">{props.date}</span>
                </div>     
                <p>{props.description}</p>
            </div>
        </div>
    )
}