function CountItem({iconId,count,disc}) {
    return(
        <div>
            <div className="flex items-center gap-x-2">
                <svg className="size-12  text-amber-300"><use href={iconId}></use></svg>
                <h3 className="font-sans-bold text-4xl mt-2">{count}</h3>
            </div>
            <p className="text-zinc-700 text-sm font-sans-Medium">{disc}</p>
        </div>
    )
    
}
export default CountItem