import gql from 'graphql-tag'

export const get_users = gql`
query get_users($where:UserWhereInput,$limit:Int!, $page:Int!){
  users (where:$where,limit:$limit, page: $page){
    edges{
        node{
            id
            firstname
            lastname
            gender
            cni
            address
            email
            phone
            roleId
            role{
              id
              title
            }
            password
        }
    }
    pageInfo {
      count
      currentPage
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
    gender
    cni
    address
    email
    phone
    role{
      id
      title
    }
    password
    createdAt
    updatedAt
  }
}
`

export const get_me = gql`
query get_me{
  me{
    id
    firstname
    lastname
    gender
    cni
    address
    email
    phone
    role{
      id
      title
    }
    createdAt
    updatedAt
  }
}
`

export const get_user_to_update = gql`
query get_user_to_update($userId:ID!){
  user(id:$userId){
    id
    firstname
    lastname
    gender
    cni
    address
    email
    phone
    roleId
    password
  }
}
`

export const get_me_to_update = gql`
query me{
  me{
    firstname
    lastname
    gender
    cni
    address
    phone
  }
}
`

export const get_user_password_to_update = gql`
query get_user_password_to_update($userId:ID!){
  user(id:$userId){
    id
    password
  }
}
`
export const update_my_profile = gql`
  mutation update_my_profile($data:MyProfileInput!)  {
    updateMyProfile(data:$data){
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
export const update_my_password = gql`
  mutation update_my_password( $data:UserPasswordInput!)  {
    updateMyPassword(data:$data){
        id 
    }
  }
`
export const update_user_password = gql`
  mutation update_user_password($id: ID!, $data:UserPasswordInput!)  {
    updateUserPassword(id:$id,data:$data){
        id
        password
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
export const delete_user = gql`
  mutation delete_user($id: ID!)  {
    deleteUser(id:$id){
        statut_code
        message
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
