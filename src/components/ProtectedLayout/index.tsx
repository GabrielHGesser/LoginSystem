import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = () => {

  const auth = useAuth();

  if(!auth.email) {
    return (
      <h1>You don't have access</h1>
    )
  }
}