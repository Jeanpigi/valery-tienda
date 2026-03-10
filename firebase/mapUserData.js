export const mapUserData = async (user) => {
    const { uid, email, displayName, photoURL } = user;
    const token = await user.getIdToken();
    return {
        id: uid,
        email,
        token,
        name: displayName,
        profilePic: photoURL,
    }
}
