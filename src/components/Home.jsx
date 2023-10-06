import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";

const Home = () => {
    const auth = useContext(AuthContext)
    console.log(auth);
    return (
        <div>
            <h2>This is home page of the website</h2>
        </div>
    );
};

export default Home;