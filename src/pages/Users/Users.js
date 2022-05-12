import { Link } from "react-router-dom";
import UsersList from "../../components/organisms/UsersList/UserList";
import './Users.css';
function UsersPage() {
    return (
        <div>
            <div className="sub-header">
                <h1>Users</h1>
                <Link to="/users/new"className="row" >
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#fff" />
                    </svg>
                <p>New User</p>
                </Link>
            </div>
            <UsersList />
        </div>
    );
}
export default UsersPage;