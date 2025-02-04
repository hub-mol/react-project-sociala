import { Layout } from "../components/Layout/Layout";
import { Postview } from "../components/Postview";

export const Home = () => (
  <Layout>
    <div className="main-content right-chat-active">
      <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left">
          <div className="row feed-body">
            <div className="col-xl-8 col-xxl-9 col-lg-8">
              <Postview user="Zbigniew" time="12:30" avatar="avatar.jpg" />
              <Postview user="Adam" time="3:20" avatar="user.png" />
              <Postview user="Ewa" time="7:30" avatar="avatar.jpg" />
              <Postview user="Józek" time="10:30" avatar="user.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
