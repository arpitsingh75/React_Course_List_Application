
export const StackTiles = ({id, title, author, duration}) => {
    return (
        <div className="p-4">
            <div className="border-b-2">
                <h1 className="font-bold">{title}</h1>
            </div>
            &nbsp;
            <p className="text-l"><b><u>Author</u> : </b>{author}</p>
            <p className="text-l"><b><u>Duration</u> : </b>{duration}</p>
            
        </div>
    )
}