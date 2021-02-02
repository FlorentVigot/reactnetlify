const user = {
    firstname: 'florent',
    lastname: 'vigot'
};

function Formaname(user) {
    return user.firstname + ' ' + user.lastname
}

const JsxExemple = () => {
    return Formaname(user)
}

export default JsxExemple