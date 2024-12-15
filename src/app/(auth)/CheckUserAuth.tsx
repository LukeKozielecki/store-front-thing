'use client'

import useAuth from "@/app/utils/hooks/useAuth";
import useAuthRedirect from "@/app/utils/hooks/useAuthRedirect";

const CheckUserAuth = () => {
    const { user, checking } = useAuth();
    useAuthRedirect(checking, user);

    return null;
}

export default CheckUserAuth;