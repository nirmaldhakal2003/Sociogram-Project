export const UserData = async ()=>{
    const response = await fetch("https://nirmaldhakal2003.github.io/api/user.json");
    return response.json();
}