function FeatureItem({iconId,title,text}) {
    return (
        <div>
            <svg className=" size-12 text-amber-300 float-right ml-3"><use href={iconId}></use></svg>
            <div>
                <h2 className="font-sans-Demibold text-xl text-zinc-700 mb-2">{title}</h2>
                <p className=" text-sm font-sans-Medium text-zinc-400">{text}</p>
            </div>
        </div>
    )
    
}
export default FeatureItem