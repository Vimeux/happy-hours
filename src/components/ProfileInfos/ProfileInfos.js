function ProfileInfos ({ logout, profil }) {
  // const [profil, setProfil] = useState(null)

  return (
    <div>
      <p>{profil.firstName}</p>
      <p>{profil.lastName}</p>
      <p>{profil.email}</p>
      <p>{profil.phone}</p>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  )
}

export default ProfileInfos
