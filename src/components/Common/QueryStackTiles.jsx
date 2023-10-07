
export const QueryStackTiles = ({id, coursename, username, userquery}) => {
    return (
        <div className="p-4">
            <div className="border-b-2">
                <h1 className="font-bold">{coursename}</h1>
            </div>
            &nbsp;
            <p className="text-l"><b><u>Name</u> : </b>{username}</p>
            <p className="text-l"><b><u>Query</u> : </b>{userquery}</p>
            
        </div>
    )
}