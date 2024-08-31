const UserData = ({
    data
}: {
    data: any


}) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>id</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.filter((item: any) => {
                        if (item?.id % 2 === 0) {
                            return true
                        }
                    })?.map((el: any) => (
                        <tr key={el?.id}>
                            <td>{el?.name}</td>
                            <td>{el?.id}</td>
                            <td>{el?.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default UserData