import gql from 'graphql-tag'

export const get_users = gql`
{
  users {
    edges{
        node{
            id
            email
            firstname
            lastname
            role{
              id
              title
            }
        }
    }
  }
}
`

export const get_user = gql`
query get_user($userId:ID!){
  user(id:$userId){
    id
    firstname
    lastname
    email
  }
}
`
export const update_user = gql`
  mutation update_user($id: ID!, $data:UserInput!)  {
    updateUser(id:$id,data:$data){
        id
        firstname
        lastname
        email
    }
  }

`
export const create_user = gql`
  mutation update_user($data:UserInput!)  {
    createUser(data:$data){
        id
    }
  }

`
export const login_user = gql`
  mutation login_user($email:String!,$password:String!)  {
    login(email:$email, password:$password){
    	statut_code
    	message
    	token
    	user{
    		id
    		firstname
    		lastname
    		email
    	}
    }
  }

`
export const signup_user = gql`
  mutation login_user($nom:String!,$prenom:String,$email:String!,$password:String!)  {
    signup(nom:$nom,prenom:$prenom,email:$email, password:$password){
    	statut_code
    	message
    	token
    	user{
    		id
    		firstname
    		lastname
    		email
    	}
    }
  }

`
export const forgotPassword_user = gql`
  mutation login_user($email:String!)  {
    signup(email:$email){
    	statut_code
    	message
    	token
    	user{
    		id
    		firstname
    		lastname
    		email
    	}
    }
  }

`
export const changePassword_user = gql`
  mutation recoverPassword($id:ID!,$new_password:String!,$recover_code:String!)  {
    recoverPassword(id:$id,new_password:$new_password,recover_code:$recover_code){
    	statut_code
    	message
    }
  }

`

export default () => {
return "Show page working ! ";
}
