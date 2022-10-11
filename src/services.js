import axios from "axios";

const server = "http://localhost:4000/excute";

const UserCollection = {};

UserCollection.create = async userDate => {
  const user = JSON.stringify(userDate);
  return await axios.post(server, {
    code:`("user").insertOne(${user})`
  })
}

UserCollection.getAll = async ()=>{
  return await axios.post(server, {
    code:`("user").find().toArray()`
  })
};

UserCollection.delete = async id =>{
  return await axios.post(server, {
    code:`("user").deleteOne({_id:util.ObjectId("${id}")})`
  });
}

export { UserCollection }