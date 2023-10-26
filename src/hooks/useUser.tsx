
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const useUser = () => {
    const {getUser} = getKindeServerSession()
    const user = getUser()
    console.log(user)
  return (
    user
  )
}

export default useUser