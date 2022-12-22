import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import User from "../types/User";
import * as sessionsApi from "../api/sessions";
import * as usersApi from "../api/users";


interface AuthContextType {
    user?: User;
    error?: any;
    loading: boolean;
    login: (email: string, password: string) => void;
    signUp: (userName: string, firstName: string, lastName: string, email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

export function AuthProvider({children,}: { children: ReactNode; }): JSX.Element {
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (error) setError(null);
    }, [location.pathname]);

    useEffect(() => {
        usersApi.getCurrentUser()
            .then((user) => setUser(user))
            .catch((_error) => {
            })
            .finally(() => setLoadingInitial(false));
    }, []);

    function login(email: string, password: string) {
        setLoading(true);

        sessionsApi.login({email, password})
            .then((user) => {
                setUser(user);
                navigate("/");
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    function signUp(userName: string,
                    firstName: string,
                    lastName: string,
                    email: string,
                    password: string,
    ) {
        setLoading(true);

        usersApi.signUp({email, userName, firstName, lastName, password})
            .then((user) => {
                setUser(user);
                navigate("/");
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    function logout() {
        sessionsApi.logout().then(() => setUser(undefined));
    }

    const value = useMemo(
        () => ({
            user,
            loading,
            error,
            login,
            signUp,
            logout,
        }),
        [user, loading, error]
    );
    return (
        <AuthContext.Provider value={value}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
