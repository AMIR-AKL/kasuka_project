import IconContact from "./IconContact"

function TeamPerson({imgSrc,personName,info}) {
    return(
        <div className="bg-white  h-110 pb-5 flex flex-col justify-between rounded-sm shadow-xl overflow-hidden">
            <div className="w-full group relative">
                <img src={imgSrc} alt="" />
                <div className="absolute bottom-4 left-0 right-0 mx-auto text-center transition-all ease-linear opacity-0 group-hover:opacity-100 flex gap-x-5 justify-center">
                    <IconContact iconId={'#linkdin'}></IconContact>
                    <IconContact iconId={'#twitter'}></IconContact>
                    <IconContact iconId={'#instagram'}></IconContact>
                    <IconContact iconId={'#facebook'}></IconContact>
                </div>
            </div>
            <div className="p-2">
            <h2 className="font-sans-Demibold text-lg">{personName}</h2>
            <p className="font-sans-Medium text-sm mt-2">{info}</p>
            </div>
        </div>
    )
    
}
export default TeamPerson