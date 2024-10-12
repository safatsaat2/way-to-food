const { username, password } = process.env;
console.log(username, password)

export const connectionStr = `mongodb+srv://sakibsafat47:${password}@cluster0.a7kgr.mongodb.net/waytofood?retryWrites=true&w=majority&appName=Cluster0`;
