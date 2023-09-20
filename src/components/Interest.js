import { useAuth } from "../hooks";
import styled from "../styles/navbar.module.css";
const interests = ["sports", "health", "technology", "politics"];

export default function Interest() {
  const auth = useAuth();

  const handleUpdateInterest = async (interest) => {
    const response = await auth.updateInterest(interest);
    console.log("handle update component :", response);
    // if (response) alert(response.message);
    if (response.success) {
      // notification success
      alert("Interest Updated success full");
    } else {
      // notification error
      alert(response.message);
    }
  };
  return (
    <>
      <div className={styled.InterestWrapper}>
        <ul className={styled.IntemContainer}>
          {interests.map((interest) => (
            <li className={styled.Item}>
              <span onClick={() => handleUpdateInterest(interest)}>
                {" "}
                {interest}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
