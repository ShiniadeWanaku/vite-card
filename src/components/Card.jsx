import Avatar from "./Avatar";
import ContactLinks from "./ContactLinks";
import { profile } from "../config/profile";

export default function Card() {
  return (
    <div className="card">
      <Avatar src={profile.avatar} alt={profile.name} />
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p>{profile.description}</p>
      <ContactLinks links={profile.links} />
    </div>
  );
}
