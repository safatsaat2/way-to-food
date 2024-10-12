const {username, password} = process.env
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.a7kgr.mongodb.net/waytofood?retryWrites=true&w=majority&appName=Cluster0";