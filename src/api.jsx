import Data from "../data/Data";

export async function loginUser(data) {
  const {email, password} = data
  
  const theUser = Data.user
  if(theUser.email == email){
    if(theUser.password == password){
      return theUser
    }
  }else{
    throw {message: "Your Email or Your Password is incorrect"}
  }
}