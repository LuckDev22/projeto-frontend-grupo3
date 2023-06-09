import { useContext } from "react";
import Header from "../../components/Header";
import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import { DashboardContext } from "../../contexts/contextDashboard";
import { StyledButton } from "../../styles/Button";
import {
  BackgroundDash,
  ProfileContainer,
  ProfileItemsCard,
  UserInfo,
} from "./styles";

const Profile = () => {
  const { user } = useContext(LoginRegisterContext);
  const { myCollectionSave } = useContext(DashboardContext)

  return (
    <div>
      <Header />
      <BackgroundDash className="background" />
      <ProfileContainer>
        <UserInfo>
          <img src={user?.avatar} alt="user avatar" />
          <div>
            <section>
              <p>Nome: {user?.name}</p>
              <p>Email: {user?.email}</p>
              <p>Idade: {user?.age}</p>
            </section>
            <div>
              <StyledButton buttonSize="default" buttonStyle="primary">
                Editar
              </StyledButton>
            </div>
          </div>
        </UserInfo>
        <section>
          <div>
            <h2>Coleção</h2>
            <ul>
              {myCollectionSave.map((collection, index) => (
                <ProfileItemsCard key={collection.title}>
                  {" "}
                  <img src={collection.image} alt="avatar collection" />{" "}
                  <div className="colectionDiv">
                    <h2>{collection.title}</h2> <p>{collection.description}</p>
                  </div>
                </ProfileItemsCard>
              ))}
            </ul>
          </div>
          <div>
            <h2>Seguidores</h2>
            <ul>
              {user?.followed?.map((post, index) => (
                <ProfileItemsCard key={post.name}>
                  {" "}
                  <img
                    className="avatars"
                    src={post.avatar}
                    alt="avatar collection"
                  />{" "}
                  <div>
                    <h2>{post.name}</h2> <p>{post.email}</p>
                  </div>
                </ProfileItemsCard>
              ))}
            </ul>
          </div>
        </section>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
