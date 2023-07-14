import UserItem from './UserItem'
const Users = ({ users }) => {

    return users.map((user) => {
        return <UserItem key={user.id} user={user} />
    })
}

export default Users