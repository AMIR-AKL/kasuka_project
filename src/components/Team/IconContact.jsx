function IconContact({iconId}) {
    return(
        <div className="size-10 rounded-sm flex justify-center items-center bg-gray-50/50 hover:bg-amber-300 hover:*:text-zinc-900 transition-colors">
            <svg className="size-6 text-zinc-700  transition-colors"><use href={iconId}></use></svg>
        </div>
    )
    
}
export default IconContact